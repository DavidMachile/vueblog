import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { comment, hopeTheme } from "vuepress-theme-hope";
import { commentPlugin } from "@vuepress/plugin-comment";

import navbar from "./navbar.js";
export default defineUserConfig({
  base: "/vueblog/",
  lang: "zh-CN",
  title: "daisz'blog",
  description: "daisz的博客 | 记录生活、旅行、技术学习与个人成长",
  theme: hopeTheme({
    navbar,
    displayFooter: false,
    plugins: {
      blog: {
        excerpt: true,
        excerptLength: 200,
      },
      components: {
        components: ["ArtPlayer", "PDF", "VidStack"],
      },
    },
  }),
});
