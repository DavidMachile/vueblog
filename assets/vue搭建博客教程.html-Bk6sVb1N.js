import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{ae as i,ag as n,am as e,ah as l,af as p}from"./app-M2qTqKgQ.js";const d={};function c(r,s){return p(),i("div",null,[s[0]||(s[0]=n("h1",{id:"vue-搭建博客教程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-搭建博客教程"},[n("span",null,"vue 搭建博客教程")])],-1)),s[1]||(s[1]=n("h2",{id:"背景",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#背景"},[n("span",null,"背景")])],-1)),e(" 以下是使用 Vue.js 搭建类似https://blog.upx8.com博客网站的分步技术方案，包含从环境搭建到部署的全流程： "),s[2]||(s[2]=l(`<h2 id="一、技术栈选型" tabindex="-1"><a class="header-anchor" href="#一、技术栈选型"><span>一、技术栈选型</span></a></h2><p>核心框架：Vue 3 + TypeScript（推荐组合）<br> 路由管理：Vue Router 4<br> 状态管理：Pinia（替代传统 Vuex，更简洁的类型支持）<br> UI 框架：Naive UI（现代设计语言，支持按需加载）<br> 构建工具：Vite（极速开发体验）<br> 部署方案：Vercel（自带 CDN 加速+自动 HTTPS）<br> 辅助工具：<br> Markdown 解析：marked + highlight.js<br> 代码高亮：shiki（支持 100+语言）<br> 数据分析：VueUse（集成 useMouse 等实用 hook）</p><h2 id="二、项目初始化" tabindex="-1"><a class="header-anchor" href="#二、项目初始化"><span>二、项目初始化</span></a></h2><p>bash</p><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    npm create vue@latest my-blog</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="安装核心依赖" tabindex="-1"><a class="header-anchor" href="#安装核心依赖"><span>安装核心依赖</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cd my-blog</span></span>
<span class="line"><span>npm install vue-router@4 pinia naive-ui marked highlight.js shiki @vueuse/core</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、架构设计-关键目录结构" tabindex="-1"><a class="header-anchor" href="#三、架构设计-关键目录结构"><span>三、架构设计（关键目录结构）</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>src/</span></span>
<span class="line"><span>├── assets/ # 静态资源</span></span>
<span class="line"><span>│ ├── icons/ # 自定义图标</span></span>
<span class="line"><span>│ └── styles/ # 全局样式（使用 SCSS）</span></span>
<span class="line"><span>├── components/ # 公共组件</span></span>
<span class="line"><span>│ ├── base/ # 基础组件（Button/Input 等）</span></span>
<span class="line"><span>│ ├── layout/ # 布局组件（Header/Sidebar）</span></span>
<span class="line"><span>│ └── widgets/ # 功能组件（ArticleCard/TagCloud）</span></span>
<span class="line"><span>├── views/ # 页面视图</span></span>
<span class="line"><span>│ ├── HomeView.vue # 首页</span></span>
<span class="line"><span>│ ├── PostView.vue # 文章详情页</span></span>
<span class="line"><span>│ └── ToolView.vue # 工具页面</span></span>
<span class="line"><span>├── router/ # 路由配置</span></span>
<span class="line"><span>├── stores/ # 状态管理（Pinia）</span></span>
<span class="line"><span>├── utils/ # 工具函数</span></span>
<span class="line"><span>│ ├── markdown.ts # Markdown 解析工具</span></span>
<span class="line"><span>│ └── api.ts # Axios 实例配置</span></span>
<span class="line"><span>└── main.ts # 入口文件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、核心功能实现" tabindex="-1"><a class="header-anchor" href="#四、核心功能实现"><span>四、核心功能实现</span></a></h2><ol><li>智能路由系统</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>   typescript</span></span>
<span class="line"><span>   // src/router/routes.ts</span></span>
<span class="line"><span>   import { createRouter, createWebHistory } from &#39;vue-router&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const routes = [</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>path: &#39;/&#39;,</span></span>
<span class="line"><span>name: &#39;home&#39;,</span></span>
<span class="line"><span>component: () =&gt; import(&#39;@/views/HomeView.vue&#39;),</span></span>
<span class="line"><span>meta: { requiresAuth: false }</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>path: &#39;/post/:id&#39;,</span></span>
<span class="line"><span>name: &#39;post&#39;,</span></span>
<span class="line"><span>component: () =&gt; import(&#39;@/views/PostView.vue&#39;),</span></span>
<span class="line"><span>props: true</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>path: &#39;/tools&#39;,</span></span>
<span class="line"><span>name: &#39;tools&#39;,</span></span>
<span class="line"><span>component: () =&gt; import(&#39;@/views/ToolView.vue&#39;),</span></span>
<span class="line"><span>meta: { requiresAuth: true }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = createRouter({</span></span>
<span class="line"><span>history: createWebHistory(),</span></span>
<span class="line"><span>routes</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 路由守卫示例</span></span>
<span class="line"><span>router.beforeEach((to) =&gt; {</span></span>
<span class="line"><span>if (to.meta.requiresAuth &amp;&amp; !store.auth.isLoggedIn) {</span></span>
<span class="line"><span>return &#39;/login&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>技术文章解析器</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>vue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- src/components/MarkdownRenderer.vue --&gt;</span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import { marked } from &#39;marked&#39;</span></span>
<span class="line"><span>import hljs from &#39;highlight.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const props = defineProps({</span></span>
<span class="line"><span>  content: {</span></span>
<span class="line"><span>    type: String,</span></span>
<span class="line"><span>    required: true</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 自定义Markdown渲染</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const renderer = new marked.Renderer()</span></span>
<span class="line"><span>renderer.code = (code, language) =&gt; {</span></span>
<span class="line"><span>  const validLang = hljs.getLanguage(language) ? language : &#39;plaintext&#39;</span></span>
<span class="line"><span>  return \`&lt;pre&gt;&lt;code class=&quot;hljs language-\${validLang}&quot;&gt;\${hljs.highlight(code, {</span></span>
<span class="line"><span>    language: validLang,</span></span>
<span class="line"><span>    ignoreIllegals: true</span></span>
<span class="line"><span>  }).value}&lt;/code&gt;&lt;/pre&gt;\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>const compiledMarkdown = computed(() =&gt; {</span></span>
<span class="line"><span>return marked(props.content, {</span></span>
<span class="line"><span>renderer,</span></span>
<span class="line"><span>gflags: { table: true },</span></span>
<span class="line"><span>pedantic: false</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;article class=&quot;markdown-body&quot; v-html=&quot;compiledMarkdown&quot; /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>1. 工具系统集成</span></span>
<span class="line"><span>vue</span></span>
<span class="line"><span>&lt;!-- src/views/ToolView.vue --&gt;</span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import { ref, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import type { ToolConfig } from &#39;@/types/tool&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tools: ToolConfig[] = [</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>name: &#39;IP 诊断&#39;,</span></span>
<span class="line"><span>component: () =&gt; import(&#39;@/components/tools/IPDiagnostic.vue&#39;),</span></span>
<span class="line"><span>icon: &#39;mdi-network&#39;</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>name: &#39;代码压缩&#39;,</span></span>
<span class="line"><span>component: () =&gt; import(&#39;@/components/tools/CodeMinifier.vue&#39;),</span></span>
<span class="line"><span>icon: &#39;mdi-code-tags&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const activeTool = ref&lt;ToolConfig&gt;()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const handleToolSelect = (tool: ToolConfig) =&gt; {</span></span>
<span class="line"><span>activeTool.value = tool</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;tool-container&quot;&gt;</span></span>
<span class="line"><span>    &lt;nav class=&quot;tool-nav&quot;&gt;</span></span>
<span class="line"><span>      &lt;div</span></span>
<span class="line"><span>        v-for=&quot;tool in tools&quot;</span></span>
<span class="line"><span>        :key=&quot;tool.name&quot;</span></span>
<span class="line"><span>        class=&quot;tool-item&quot;</span></span>
<span class="line"><span>        @click=&quot;handleToolSelect(tool)&quot;</span></span>
<span class="line"><span>      &gt;</span></span>
<span class="line"><span>        &lt;component :is=&quot;tool.icon&quot; class=&quot;tool-icon&quot; /&gt;</span></span>
<span class="line"><span>        &lt;span&gt;{{ tool.name }}&lt;/span&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/nav&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;main class=&quot;tool-main&quot;&gt;</span></span>
<span class="line"><span>      &lt;component</span></span>
<span class="line"><span>        :is=&quot;activeTool?.component&quot;</span></span>
<span class="line"><span>        v-if=&quot;activeTool&quot;</span></span>
<span class="line"><span>        class=&quot;active-tool&quot;</span></span>
<span class="line"><span>      /&gt;</span></span>
<span class="line"><span>    &lt;/main&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 五、性能优化策略</span></span>
<span class="line"><span></span></span>
<span class="line"><span>代码分割：使用 Vite 的动态导入实现按需加载</span></span>
<span class="line"><span>CDN 加速：将 Naive UI 等静态资源托管至 CDN</span></span>
<span class="line"><span>缓存策略：</span></span>
<span class="line"><span>typescript</span></span>
<span class="line"><span>// vite.config.ts</span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>build: {</span></span>
<span class="line"><span>rollupOptions: {</span></span>
<span class="line"><span>output: {</span></span>
<span class="line"><span>manualChunks: {</span></span>
<span class="line"><span>&#39;naive-ui&#39;: [&#39;naive-ui&#39;],</span></span>
<span class="line"><span>&#39;markdown-parser&#39;: [&#39;marked&#39;, &#39;highlight.js&#39;]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>图片懒加载：使用 vue3-lazyload</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 六、部署流程</span></span>
<span class="line"><span></span></span>
<span class="line"><span>构建生产版本：</span></span>
<span class="line"><span>bash</span></span>
<span class="line"><span>npm run build</span></span>
<span class="line"><span>部署至 Vercel：</span></span>
<span class="line"><span>连接 GitHub 仓库</span></span>
<span class="line"><span>设置构建命令：npm install &amp;&amp; npm run build</span></span>
<span class="line"><span>配置输出目录：dist</span></span>
<span class="line"><span>自定义域名配置：</span></span>
<span class="line"><span>在域名注册商处设置 CNAME 记录指向 Vercel 提供的域名</span></span>
<span class="line"><span>在 Vercel 项目设置中绑定自定义域名</span></span>
<span class="line"><span>七、扩展建议</span></span>
<span class="line"><span>SEO 优化：集成 vue-meta 管理页面元数据</span></span>
<span class="line"><span>PWA 支持：使用 vite-plugin-pwa 添加离线能力</span></span>
<span class="line"><span>监控集成：接入 Sentry 进行错误监控</span></span>
<span class="line"><span>持续集成：配置 GitHub Actions 自动部署</span></span>
<span class="line"><span>该方案实现了从前端到部署的完整技术链条，开发者可根据实际需求调整具体实现细节。建议采用渐进式开发策略，先完成核心文章系统，再逐步扩展工具模块和性能优化功能。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15))])}const u=a(d,[["render",c]]),o=JSON.parse(`{"path":"/posts/%E5%8D%9A%E5%AE%A2/vue/vue%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2%E6%95%99%E7%A8%8B.html","title":"vue 搭建博客教程","lang":"zh-CN","frontmatter":{"description":"vue 搭建博客教程 背景 一、技术栈选型 核心框架：Vue 3 + TypeScript（推荐组合） 路由管理：Vue Router 4 状态管理：Pinia（替代传统 Vuex，更简洁的类型支持） UI 框架：Naive UI（现代设计语言，支持按需加载） 构建工具：Vite（极速开发体验） 部署方案：Vercel（自带 CDN 加速+自动 HTT...","head":[["meta",{"property":"og:url","content":"https://davidmachile.github.io/vueblog/vueblog/posts/%E5%8D%9A%E5%AE%A2/vue/vue%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2%E6%95%99%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"daisz'blog"}],["meta",{"property":"og:title","content":"vue 搭建博客教程"}],["meta",{"property":"og:description","content":"vue 搭建博客教程 背景 一、技术栈选型 核心框架：Vue 3 + TypeScript（推荐组合） 路由管理：Vue Router 4 状态管理：Pinia（替代传统 Vuex，更简洁的类型支持） UI 框架：Naive UI（现代设计语言，支持按需加载） 构建工具：Vite（极速开发体验） 部署方案：Vercel（自带 CDN 加速+自动 HTT..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-05-26T07:54:18.000Z"}],["meta",{"property":"article:modified_time","content":"2026-05-26T07:54:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vue 搭建博客教程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-05-26T07:54:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"daisz\\",\\"url\\":\\"https://github.com/DavidMachile\\"}]}"]]},"git":{"createdTime":1779782058000,"updatedTime":1779782058000,"contributors":[{"name":"daisz","username":"daisz","email":"daisz@chsi.com.cn","commits":1,"url":"https://github.com/daisz"}]},"readingTime":{"minutes":2.88,"words":864},"filePathRelative":"posts/博客/vue/vue搭建博客教程.md","localizedDate":"2026年5月26日","excerpt":"\\n<h2>背景</h2>\\n<!-- 以下是使用 Vue.js 搭建类似https://blog.upx8.com博客网站的分步技术方案，包含从环境搭建到部署的全流程： -->\\n<h2>一、技术栈选型</h2>\\n<p>核心框架：Vue 3 + TypeScript（推荐组合）<br>\\n路由管理：Vue Router 4<br>\\n状态管理：Pinia（替代传统 Vuex，更简洁的类型支持）<br>\\nUI 框架：Naive UI（现代设计语言，支持按需加载）<br>\\n构建工具：Vite（极速开发体验）<br>\\n部署方案：Vercel（自带 CDN 加速+自动 HTTPS）<br>\\n辅助工具：<br>\\nMarkdown 解析：marked + highlight.js<br>\\n代码高亮：shiki（支持 100+语言）<br>\\n数据分析：VueUse（集成 useMouse 等实用 hook）</p>","autoDesc":true}`);export{u as comp,o as data};
