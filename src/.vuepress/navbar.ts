import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    icon: "home",
    link: "/",
  },
  {
    text: "生活",
    icon: "pen-to-square",
    children: [
      { text: "生活随笔", link: "/posts/生活随笔/" },
      { text: "旅行游记", link: "/posts/旅行游记/" },
      { text: "实用推荐", link: "/posts/实用推荐/" },
    ],
  },
  {
    text: "兴趣",
    icon: "lightbulb",
    children: [
      { text: "汽车世界", link: "/posts/汽车世界/" },
      { text: "AI与创作", link: "/posts/AI与创作/" },
      { text: "工具收藏", link: "/posts/工具收藏/" },
      { text: "游戏天地", link: "/posts/游戏/" },
    ],
  },
  {
    text: "技术博客",
    icon: "code",
    children: [
      { text: "Spring学习笔记", link: "/posts/博客/Spring学习笔记/" },
      { text: "iOS开发", link: "/posts/博客/iOS学习/" },
      { text: "Vue", link: "/posts/博客/vue/" },
      { text: "Flutter", link: "/posts/博客/Flutter/" },
      { text: "鸿蒙", link: "/posts/博客/鸿蒙/" },
    ],
  },
]);
