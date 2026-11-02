# 博客体检报告 · myVueBlog

> 体检时间 2026-11-02 ｜ 94 篇文章 ｜ VuePress 2.0.0-rc.20 + vuepress-theme-hope rc.78
> 构建状态：`npm run docs:build` **通过**（13.5s，157 个页面）

---

## ✅ 第一批已执行（2026-11-02）

构建现在 **0 warning**（此前 9 条），耗时 16.9s。

| 改动 | 文件 | 验证结果 |
|---|---|---|
| hostname 去掉 `/vueblog` | `theme.ts` | 双 base 文件 **157 → 0**；`og:url` 现为 `https://davidmachile.github.io/vueblog/` ✅ |
| 新增全站搜索 | `theme.ts` + `@vuepress/plugin-search@2.0.0-rc.91` | navbar 渲染出 `class="search-box"`，占位「搜索」 ✅ |
| 启用 Mermaid | `theme.ts`（`markdown.mermaid`）+ `mermaid@11` | 3 篇产出 `mermaid-wrapper` 真实组件，不再是纯文本 ✅ |
| 删除 `encrypt` 死配置 | `theme.ts` | 已移除 |
| 卸载 `vidstack` | `package.json` | 已移除（原本无人使用） |
| 删除 `deploy.sh` | 根目录 | 已 `git rm`（Gitee 遗留，与 `base` 冲突；`部署到 GitHub Pages 步骤` 一文自带正确脚本，不依赖它） |
| `<font>` → `<span>` ×3 | Spring框架了解 / updateConstraints / 开帕萨特 | `Failed to resolve component: font` 警告消失 ✅ |
| 围栏语言标识修正 | 见下 | `Missing highlighter` 警告全部消失 ✅ |

**围栏修复明细**：`java文件`→`java` ×2、`xml文件`→`xml`、`JDBC使用demo`→`java`、`objectivec`→`objective-c`、
`iOS-Widget初入.md` 的 `object-c` → **`xml`**（内容是 Info.plist，不是 OC，标 OC 反而是错的）。

**结构修复**：
- `2020-01-16-CDN…` 全文围栏是乱的（` ````pod --version ` + 正文困在代码块里 + 无效 CSS 的 `<p style="font-color:red">`），已按原意重排为 `bash` / `ruby` 两个正常代码块
- `Mybatis连接数据库.md` 的 mermaid 图此前语法无效（`Graph LR` + 未加方括号的节点 + `pmo` 应为 `pom`），已修成合法 `graph LR` 流程图，现在能真正渲染

**🔒 安全**：`实用推荐/值得学习的博客.md` 原本公开写着 `账号、密码： 手机号+dai7376360`，
已删除并改为「手机号注册，密码自行设置」；同时清掉同一文件里未删的模板 demo（`<PDF/>`、
一条指向**别的文章**的视频、vidstack 演示视频）。顺带修正两处全角括号导致的 Markdown 链接失效。

> ⚠️ 如果那个密码你还在别处使用，**请立即去改** —— 它已经躺在 git 历史里了。

**对审计的两处修正**（实测与报告不符）：
- `<video src="@source/posts/…">` 视频**是正常工作的**，构建产物已重写为 `/vueblog/assets/2025021701-B3FT6ZE9.mp4`，不需要改
- `ftp.bmp.ovh` 实测 **HTTP 200**，不是 404，`iOS 13适配` 那 4 张图还活着

---

## 0. 现状盘点

| 项目 | 数值 |
|---|---|
| 文章总数 | 94 篇（12 个目录） |
| 构建产物 `dist` | 150 MB（其中 assets 142 MB） |
| `.git` 仓库 | 248 MB |
| `src/posts` 源码 | 150 MB |
| 构建耗时 | 13.5 秒 |

文章分布：iOS学习 32 ｜ 旅行游记 8 ｜ Flutter 8 ｜ 汽车世界 7 ｜ Spring 7 ｜ 生活随笔 6 ｜ vue 6 ｜ 实用推荐 5 ｜ AI与创作 5 ｜ 工具收藏 3 ｜ 鸿蒙 3 ｜ 游戏 3

**内容判断**：生活类（旅行、汽车、随笔）元数据完整、结构清晰，是站点目前最好的一部分。技术类（`博客/` 目录）是整体质量的黑洞——不是内容差，而是**完全没有被"发布"**（无 frontmatter → 无分类、无标签、日期错乱）。

---

## 1. P0 · 确定的 Bug（建议立刻修）

### 1.1 全站 SEO 链接双 base（157/157 页面）

`theme.ts` 的 `hostname` 里多写了 `/vueblog`，而 `base` 已经是 `/vueblog/`，两者拼接后重复：

```
实际输出: https://davidmachile.github.io/vueblog/vueblog/
```

已验证 dist 中 **157 个 html 全部**带 `vueblog/vueblog`（`og:url` / `article:publisher` 等）。搜索引擎拿到的是错的规范链接。

```diff
- hostname: "https://davidmachile.github.io/vueblog",
+ hostname: "https://davidmachile.github.io",
```

> 注：`sitemap.xml` 不受影响（插件自己拼对了），坏的是页面内的 meta。

### 1.2 全站没有搜索

94 篇文章，**一个搜索框都没有**。已确认：
- `@vuepress/plugin-search` 未安装
- 它不在 theme-hope 的默认依赖里（`@vuepress/plugin-*` 列表里确实没有 search）

主题站没有搜索 = 站点越大越难用，这是当前**性价比最高**的一个改进。

```bash
npm i -D @vuepress/plugin-search@next
```
```ts
// theme.ts → plugins
search: { locale: { "zh-CN": { placeholder: "搜索文章..." } } },
```

### 1.3 19 张外链图片已永久失效

实测 HTTP 状态：

| 图床 | 状态 | 影响 |
|---|---|---|
| `q3gnsl2e8.bkt.clouddn.com` | **404** ×13 | PicGO 七牛图床已回收 |
| `newimg.jspang.com` / `blogimages.jspang.com` | **连接失败** ×5 | 站点已死 |
| `49.232.112.44` | **404** ×1 | |

受影响 7 篇：`vue3快速入手`、`flutter实现图片`、`flutter实现图片文本纵向列表`、`Markdown工具推荐`、`CDN-trunk Repo update failed`、`图床工具PicGO`、`Masonry自适应高度`。

另有 **11 处 `http://` 图片**（HTTPS 站点上的混合内容，会被浏览器拦截）。
讽刺的是 `图床工具PicGO实现七牛云图片上传` 这篇讲图床的文章，自己的图全裂了——**外链图床不可靠，这是最好的反面教材**，正文里图片一律走本地 `./img/`。

### 1.4 `<font>` 标签让 Vue 渲染报错

构建日志里的 `[Vue warn]: Failed to resolve component: font` 来自这 3 个文件，页面对应位置渲染是坏的：

- `博客/Spring学习笔记/idea新建java项目的框架了解.md`
- `博客/iOS学习/2024-11-22-updateConstraintsIfNeeded.md`
- `汽车世界/开帕萨特去练车.md`

### 1.5 两个部署脚本互相打架

| | 目标 | 路径处理 |
|---|---|---|
| `.github/workflows/deploy-docs.yml` | GitHub `DavidMachile/vueblog` → `gh-pages` | dist 放**根目录** ✅ 与 `base:"/vueblog/"` 匹配 |
| `deploy.sh` | **Gitee** `dsz1992/vue` → `gh-pages` | 塞进子目录 `vueblog/` |

`git remote` 只有 GitHub。**`deploy.sh` 是历史遗留**，跑它会把东西推到一个跟 `base` 不匹配的仓库，页面全白。要么删掉，要么明确注释"已废弃"。

### 1.6 失效的配置项

- `theme.ts` 的 `encrypt.config` 指向 `/demo/encrypt.html` —— 该文件不存在，纯死配置
- `package.json` 的 `dependencies.vidstack` **实际未被使用**（全局只有 1 处提到 vidstack 的外链视频 URL，`<video>` 是原生标签）。视频播放真正靠的是 `viteOptions.assetsInclude: ["**/*.mp4"]`，vidstack 可以卸载
- `intro.md` 还是模板占位页（"将你的个人介绍和档案放置在此处。"），而首页 `blog.intro` 正指向它——**关于页是空的**，但你其实已经写了一篇很好的 [关于我和这个博客](src/posts/生活随笔/关于我和这个博客.md)

### 1.7 已写但没开的功能

- `博客/鸿蒙/记一次无法完美实现的边框.md:107` 和 `AI与创作/AI绘制流程图教程.md:25` 各有一段 ` ```mermaid ` 流程图，**mermaid 支持没开** → 渲染成纯文本代码，图出不来。
  修复需要两步（`vuepress-plugin-md-enhance` 已内置，但 `mermaid` 是可选 peer 依赖，实测未安装）：
  ```bash
  npm i -D mermaid
  ```
  ```ts
  // theme.ts → plugins.mdEnhance
  mdEnhance: { mermaid: true },
  ```
- ` ```java文件 `、` ```xml文件 `、` ```JDBC使用demo `、` ``` 查看了下pod 版本 ` —— 4 处把中文说明写成了语言标识，Shiki 报 "Missing highlighter" 并跳过高亮
- `objective-c` / `objc` / `object-c` / `objectivec` 四种写法混用，统一成 `object-c`（Shiki 认这个）

---

## 2. P1 · 元数据治理（对"可发现性"影响最大）

### 2.1 覆盖率现状

| 字段 | 缺失 | 比例 |
|---|---|---|
| 整段 frontmatter | 40 / 94 | **43%** |
| `category` | 60 / 94 | 64% |
| `tag` | 60 / 94 | 64% |
| `cover` | 94 / 94 | **100%** |

重灾区是 `博客/` 整个目录：Flutter 8/8、Spring 7/7、vue 6/6、鸿蒙 3/3 **全部没有** frontmatter，iOS学习 32 篇缺 12 篇，游戏 3 篇全缺。

### 2.2 这导致的连锁故障

1. **分类页是空的** —— `category/技术博客/` 只列出 1 篇文章，而实际有 50 篇技术文。用户点"技术博客"分类，看到的是空页。
2. **日期错乱（已验证）** —— 无 `date` 时主题回退到 git 提交时间。你的 git 历史只有 3 个提交日期（2025-04-09 / 2025-08-15 / 2026-05-26），于是 2019–2021 写的技术文在时间线上全部显示为 2025/2026 年。94 篇的日期分布被压成 2 个年份：`2025 ×56`、`2026 ×38`。
   > 有 `date` 的文章渲染是正确的（`2019年9月29日` + `datePublished` 都对），问题只在这 40 篇裸文件上。
3. **首页"最新文章"排序失真** —— 2019 年的 block 底层原理会被排到最新。

### 2.3 标签格式写错了（格式性错误，不是稀疏）

现在的写法：

```yaml
tag:
  - 西安,旅游,攻略        # ← 逗号在 YAML 里不分割，这是「一个」标签
```

结果 33 个标签里 **32 个只被用过一次**，标签页形同虚设。构建出的目录名直接暴露了问题：`tag/西安_旅游_攻略/`、`tag/ai_工具_导航/`。

正确写法：

```yaml
tag:
  - 西安
  - 旅游
  - 攻略
```

### 2.4 命名不一致

- 目录叫 `AI与创作`，分类页 slug 却是小写 `ai与创作`
- 目录叫 `博客/`（含义空泛，指"技术"），分类名又叫 `技术博客`，navbar 链接指向 `/posts/博客/...`
- 建议目录直接改名 `博客/` → `技术/`，与分类名统一

### 2.5 文件名隐患

- **1 个文件以空格开头**：`博客/iOS学习/ iOS优秀第三方库资源收藏.md`（首列空格，极易踩坑）
- 12 个文件名含空格、2 个含半角括号 `(-)` `(二)`
- URL 全部 percent-encode，`og:url` 长这样：`.../%E5%8D%9A%E5%AE%A2/iOS%E5%AD%A6%E4%B9%A0/%20iOS%E4%BC%98...`

中文目录本身没问题（VuePress 处理得了），但**空格和括号建议清掉**。

### 2.6 隐私残留

上次提交信息是「脱敏 YMTApp 技术总结文章」，说明你在意这件事，但还有漏网：

```
/Users/myg/...                      ← ruby升级问题记录.md、IOS-Cocoapods安装失败修复.md
/Users/zzhh-bj/...                  ← Spring学习笔记.md
mayonggang@mayonggang~%             ← ruby升级问题记录.md 里的终端提示符
/Users/myg/Desktop/P_gitee/1.数字北京/Podfile   ← 连真实项目名一起泄露了
```

`App_技术总结.md` 脱敏做得不错，但这几篇的终端输出是整段贴上去的，漏了。

---

## 3. P2 · 仓库瘦身（248 MB .git / 150 MB dist）

### 3.1 直接可删：12 MB 的 Hexo 遗留图

`src/posts/img/` 共 62 个文件，**52 个是孤儿**（全仓库无任何引用）。清一色是早期 Hexo/NexT 主题素材：

```
post-bg-*.jpg (24 个)   home-bg*.jpg (4 个)   tag-bg*.jpg (2 个)
avatar_m*.png (6 个)    404-bg.jpg   post-sample-image.jpg
```

整个 `src/posts/img/` 12 MB 可以直接删掉。

### 3.2 内容完全重复的文件（已比对 MD5）

```
src/posts/img/avatar_m{1,2,3,4,5}.png  ==  src/.vuepress/public/assets/icon/avatar_m{1..5}.png
src/posts/生活随笔/img/20250311_01.jpg  ==  src/posts/旅行游记/img/20241113-01.jpeg
src/posts/工具收藏/img/homebg01.png     ==  src/.vuepress/public/assets/images/cover3.jpg
```

`public/` 里 8 个文件未被引用（含 `logo.png`、`cover1.jpg`、4 个 avatar、`daisz-logo.svg`）。

### 3.3 图片没有做尺寸优化

| 文件 | 像素 | 体积 |
|---|---|---|
| `旅行游记/img/20241112-03.jpg` | 3456×4608 | 6.6 MB |
| `汽车世界/img/2025042202.png` | 2508×1672 | 4.0 MB |
| `工具收藏/img/aiwht.png` | 2902×1588 | 4.0 MB |

手机原图直接提交，而主题列表区最多显示 ~800px 宽。这一类占掉 dist 的大头（`汽车世界/img` 单独就 36 MB）。

**建议**：加一条图片预处理，长边压到 1600px + `jpeg-quality 82`，PNG 转 WebP。粗估 dist 从 142 MB 降到 30 MB 以内，GitHub Pages 加载体验和 push 速度都会明显改善。

### 3.4 视频

3 个 mp4 共 19 MB 进了仓库和 dist。GitHub Pages 单文件限 100 MB，暂时没爆，但 `兵马俑.mp4` 9.7 MB 会拖慢首屏（虽然 `<video>` 是懒加载的）。可考虑迁到对象存储 / 不托管在 git 里。

---

## 4. P3 · 内容层面

### 4.1 需要重做的低质页

| 文件 | 问题 |
|---|---|
| `iOS 面试题收集.md` | 1613 行，**204 处 `&lt;key&gt;` 实体**、6 处转义反引号、32 处全角引号、0 个代码块。整篇是「富文本→MD」的失败转换 |
| `Masonry源码学习.md` | 150 B，一个 H1 + 一条外链，正文 0 字 |
| `ruby升级问题记录.md` | 0 个代码块，命令与报错糊成一段散文，空格全丢 |
| `App_技术总结.md` | 85 个 H2 却零图片；`####` 下塞完整 OC 方法体；`---` 后接裸文字被解析成分隔线 |
| `pod install失败问题解决.md` `ruby和cocoapods冲突.md` `IOS-Cocoapods安装失败修复.md` `ruby升级问题记录.md` | 4 篇同主题（pod/ruby 环境炸了）可合成一篇 |
| `2019-11-27-…block底层原理(-)` 与 `(二)` | 半角/全角括号混用，且两篇内容重叠 |

另有 8 篇 < 400 字节的近似空页：`配置应用图标不生效`(272B)、`VuePress修改首页列表配置`(152B)、`Masonry源码学习`(150B)、`AI工具箱`(359B)、`电子书资源推荐`(294B)、`流星合影留念-龙城飞将`(179B)、`饰品`(127B)、`群友书法`(104B)。

### 4.2 该合并的重复选题

- **西安**：`西安之行` / `西安旅游规划` / `西安三天两晚攻略` —— 三篇同一趟旅行，建议合成 1 篇长文 + 1 篇纯攻略
- **洛阳**：`洛阳旅游规划` / `洛阳牡丹花会三天攻略`（且前者引用了**不存在的** `./img/2025040803.jpeg`）
- **选车**：`我的选车方案` / `三款热门家用车对比` / `买车记录` —— 三篇
- **练车**：`丰田卡罗拉练车体验` / `开帕萨特去练车`

### 4.3 分类错位

- `康桥未来公元`（楼盘视频）放在 `AI与创作`，标签 `楼市,记录`
- 目录 `博客/` 这个名字本身没有信息量

### 4.4 值得保留的优点

别推倒重来 —— 这些是真的好：
- `YMTApp_技术总结.md`：架构分层 + mermaid + 表格 + 分主题拆解，全站最佳技术范本
- `App异常数据采集数据结构.md`、`Flutter与OC交互开发.md`：成熟工程文档结构
- 旅行游记的「图片当信息载体」（地图截图、演出时间表、位置图），是攻略该有的样子
- `关于我和这个博客`、`随笔的意义`、`被勾起的开封回忆`：有真实声音，是站点的灵魂
- 3 篇游记带真实出行日期，时间线这一段是干净的

---

## 5. 建议执行顺序

**第一批（1 小时，纯配置，收益立竿见影）**
1. `hostname` 去掉 `/vueblog` → 修 157 个页面的 SEO
2. 装 `@vuepress/plugin-search` → 全站可搜索
3. 删 `deploy.sh`、`encrypt` 死配置、`vidstack` 依赖
4. 清 `<font>` 标签 + 4 处中文语言标识
5. 开 mermaid：`npm i -D mermaid` + `plugins.mdEnhance: { mermaid: true }`（2 篇流程图立刻能看）

**第二批（2-3 小时，脚本 + 人工）**
6. 给 40 篇裸文件补 frontmatter：`title` 从 H1 提取、`category` 按目录推导、`date` 用文件名里的日期或 git 首次提交推断后人工订正
7. 标签格式从 `- 西安,旅游,攻略` 批量改成 YAML 列表（顺带收敛到 15 个左右的稳定标签）
8. 删 `src/posts/img/`（12 MB）、`public/` 未引用项、7 组重复文件
9. 去掉文件名首空格，清掉空格/括号
10. 脱敏 `/Users/myg`、`/Users/zzhh-bj`、真实项目名

**第三批（半天，内容与体验）**
11. 用 `关于我和这个博客` 的内容填掉 `intro.md` 占位页
12. 图片批处理管线（1600px / q82 / WebP），dist 142 MB → ~30 MB
13. 每篇文章补 `cover`（100% 缺失，首页列表观感差距最大的一项）
14. 修 19 张死链图（能找回的本地化，找不回的就删段落并注明）
15. 导航补 `分类 / 标签 / 时间线` 入口（这三个页面都构建出来了，但 navbar 里没有链接）
16. 合并 4 篇 cocoapods/ruby 故障文、3 篇西安、3 篇选车

**长期**
17. 加 RSS（`@vuepress/plugin-feed`）
18. 评论：自建 Waline/Giscus，别用主题里那个演示服务
19. 技术文按 `YMTApp_技术总结` 的规格重写；过期文（iOS 13 适配、2019 的 pod 问题）在开头加一句"⚠️ 本文写于 2019 年，环境已变化"即可，不必删——它们是有价值的历史
20. 内容方向：移动端 + AI 工具的组合是你独有的角度，`AI绘制流程图教程` 这类"用 AI 解决具体工程问题"的选题比再写一篇 Vue3 入门有竞争力得多。技术文和游记的双线结构是加分项，别为了"垂直"砍掉生活线
