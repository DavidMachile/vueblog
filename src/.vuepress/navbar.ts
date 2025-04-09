import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    icon: "pen-to-square",
    link: "/",
  },
  {
    text: "随笔",
    icon: "pen-to-square",
    link: "/posts/",
  },
  {
    text: "博客",
    link: "/posts/",
    icon: "pen-to-square",
    children: [
      {
        text: "Spring学习笔记",
        link: "/posts/博客/Spring学习笔记/",
        children: [],
      },
      {
        text: "iOS",
        link: "/posts/博客/iOS学习/",
        children: [],
      },
      {
        text: "vue",
        link: "/posts/博客/vue/",
        children: [],
      },
    ],
  },
]);
