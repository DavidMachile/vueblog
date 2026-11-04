---
title: 从 Options API 到组合式 API：一次迁移踩坑记录
date: 2025-10-20
category: 技术博客
tag:
  - Vue3
  - 前端
cover: /assets/images/cover2.jpg
---

# 从 Options API 到组合式 API：一次迁移踩坑记录

## 场景：一个两千行的页面，非搬不可

后台项目里有个老页面，选项式 API 写的，两千多行。改一个筛选逻辑，代码要横跨 data、computed、methods、watch 四个区块来回跳，同一个功能的上下文被切成四块。我是移动端出身，2024 年才开始正经写 Vue，这种写法一开始是当传统接受的，但确实越写越费劲。

借着一次需求重构，我把它整体搬到了 script setup 加组合式 API。功能不复杂，列表加筛选加批量提交，但坑基本踩全了：改完当天页面「不刷新」，第二天发现某个 watch 少触发一次，第三天又撞上一条生命周期钩子不执行。下面按踩坑顺序记。

## 分析：响应式挂在代理和盒子上，不在变量上

后面所有坑都能用两句话解释。

`reactive` 是用 Proxy 把对象包了一层，只有「通过代理读属性」这个动作会被记录成依赖，之后代理写入才会通知渲染。`ref` 是把值装进一个盒子，依赖记在盒子的 `value` 上：模板里自动解包，脚本里必须写 `.value`。

也就是说，响应性绑在「代理」或「盒子」上。一旦你手里的变量既不是代理也不是盒子，它就是个普通值，Vue 完全不知道它变过。

## 坑一：reactive 解构之后页面不刷新

迁移时我想把 data 平铺成一组局部变量，写成了这样：

```typescript
const state = reactive({ list: [], loading: false, page: 1 });

// 看着整洁，但响应性在这里断了
const { list, loading } = state;

function reload() {
  state.page = 2;
  console.log(loading); // 永远打印 false
}
```

`loading` 是布尔值，解构出来就是 `false` 的拷贝，之后 `state.loading = true` 跟它毫无关系。数组这种引用值更阴险：`list` 拿到的是**子级代理**，对它自己 push 还能刷新，可一旦源上整体替换（`state.list = 新数组`），这边仍指着旧数组，表现就是「接口回来了但列表不动」。

修法是 `toRefs` 或 `toRef`，把属性换成一组 ref，读写都透传回源对象：

```typescript
const state = reactive({ list: [], loading: false, page: 1 });
const { list, loading } = toRefs(state);

async function reload() {
  loading.value = true;
  const res = await fetchList(state.page);
  list.value = res.items; // 整体替换也能正常驱动视图
  loading.value = false;
}
```

相关的另一个：props 解构在 3.5 之前同样会丢响应性，得写 `toRefs(props)`；3.5 之后编译器会把它转成对 `props.xxx` 的访问，才可以直接解构。我们仓库当时是 3.4，为这个白排查了半小时。

## 坑二：ref 和 reactive 到底选哪个

我现在的判断标准，供参考：

| 场景 | 选择 | 原因 |
| --- | --- | --- |
| 布尔、数字、单值 | ref | reactive 接不住标量 |
| 接口返回整体赋值 | ref | reactive 对象不能整体替换，换了就脱离代理 |
| 表单这类同构字段集合、就地改字段 | reactive | 少写一堆 `.value`，配合 toRefs 往外暴露 |
| composable 的返回值 | ref | 调用方解构也不会丢响应性 |
| 需要 `toRaw` 拿原始对象做提交或比较 | reactive | 减少代理开销，注意别改到共享引用 |

两个细节：`reactive` 对象的属性如果本身是 ref，会自动解包（`state.count` 就是 `state.count.value`）；但数组里的 ref 元素**不解包**，得写 `arr[0].value`，这里很容易踩。另外 `reactive` 变量整体重新赋值等于换了个对象，模板里绑的还是旧代理，必须用 `Object.assign` 或者拆成多个 ref。

## 坑三：watch 和 watchEffect 不是一回事

我把一处「路由 query 变了重新查」写成 watchEffect，功能上是通的，但漏了一个判断：

```typescript
// 反例：watchEffect 拿不到旧值，条件分支没走到的依赖不会被收集
watchEffect(() => {
  if (props.id) {
    fetchDetail(props.id);
  }
});
```

它的问题有两个：一是立即执行一次，二是依赖靠「跑一遍」收集，所以分支没进入的那些依赖不会被记录，反过来分支里读的任何值变了都会让它重跑。而且它拿不到旧值，「id 没变就不重复请求」这种判断写不出来。改成 watch 就清楚了：

```typescript
watch(
  () => [props.id, keyword.value],
  ([id, kw], [oldId, oldKw]) => {
    if (!id || (id === oldId && kw === oldKw)) return;
    fetchDetail(id, kw);
  },
  { immediate: true },
);
```

结论是：有明确的数据源、需要旧值、要控制 `immediate` 或 `deep`，用 watch；只是「跟着别人的变化做点副作用」，尤其是需要拿到更新后的 DOM（`flush: 'post'`）时，用 watchEffect。watch 监听 reactive 对象默认就是深层的，不需要额外写 `deep: true`。watchEffect 返回一个 stop 函数，组件卸载时会自动停，但在手写的 effect scope 里不会，需要自己 `onScopeDispose`。

## 坑四：this 没了，生命周期变成「注册」

选项式里钩子是对象上的方法，组合式里是函数，得在 setup 执行期间调用注册函数挂上去。对照表我贴在了工位隔断上：

| Options | 组合式 |
| --- | --- |
| beforeCreate / created | 直接写在 setup 里 |
| beforeMount / mounted | onBeforeMount / onMounted |
| beforeUpdate / updated | onBeforeUpdate / onUpdated |
| beforeDestroy / destroyed（3.x 为 beforeUnmount / unmounted） | onBeforeUnmount / onUnmounted |
| activated / deactivated | onActivated / onDeactivated |
| errorCaptured | onErrorCaptured |

我踩的那条不执行，原因是把 `onMounted` 写到了 `await` 后面：

```typescript
const cfg = await loadConfig(); // 顶层 await，setup 变成异步

onMounted(() => {
  // 这里拿不到组件实例，注册无效，控制台会有警告
  measure(chartEl.value);
});
```

`await` 之后当前实例上下文已经丢了，钩子注册不上（async setup 还得配 Suspense 才认）。要么把 await 挪到 onMounted 内部，要么先注册钩子再 await。另外 DOM ref 只能在 onMounted 之后读，拿不准就 `nextTick` 一下。

## 坑五：mixin 平移成 composable，先撞了重名

原来那页面混了三个 mixin，各有一个 `loading`，谁后注册谁覆盖，出 bug 只能全局 grep。我一开始天真地把 mixin 逐个翻译成 composable，结果在同一个 setup 里解构出三个 `loading`，直接编译报错——这反而是好事，它把原来靠顺序解决的冲突暴露出来了。

三条约定：函数一律 `useXxx` 命名；返回字段带业务前缀（`uploadLoading` 而不是 `loading`）；组合时显式重命名。

```typescript
const { loading: uploadLoading, run: doUpload } = useUpload();
const { loading: listLoading, list, refresh } = useList(props.id);
```

还有一点：composable 内部的 ref 每次调用都新建，这是它和 mixin 最大的区别（mixin 的数据合进同一个实例）。真要全局共享，就把它放到模块顶层，或者干脆交给下面的 Pinia。

## 坑六：Pinia 换掉 Vuex

迁移顺带把 Vuex 换成了 Pinia，改动比预期小，主要是删代码：没有 mutations，只有 state、getters、actions；不用 namespaced 嵌套模块，一个业务一个 store；TS 类型基本靠推断就够了。

```typescript
export const useFilterStore = defineStore('filter', () => {
  const keyword = ref('');
  const visible = computed(() => keyword.value.trim());

  // action 用 function 声明：需要 this（跨 store、$patch）时，箭头函数会丢绑定
  async function apply() {
    await fetchList({ keyword: visible.value });
  }

  return { keyword, visible, apply };
});
```

两个坑：一是组件里解构 store 会丢响应性，要用 `storeToRefs(store)`（方法可以直接解构）；二是 setup 写法的 store 默认没有 `$reset`，得自己写一个 reset 方法。跨 store 调用就在 action 里 import 另一个 store 再用，比 Vuex 的 rootState 清楚。

## 小结

这次迁移真正的收获不是少写几行，而是几件小事有了准绳：响应性在代理和盒子上，所以解构要么用 toRefs 要么用 ref；watch 是「源驱动」、watchEffect 是「依赖驱动」，别混用；钩子必须在 setup 同步阶段注册，await 之后的都算晚；composable 靠显式命名解决 mixin 的暗冲突；Pinia 让状态回到普通的 ref 和 computed。下次再搬页面，我会先只做「拆 composable」，等重名和响应性问题都清了，再动 store。
