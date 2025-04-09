import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { comment, hopeTheme } from "vuepress-theme-hope";
import { commentPlugin } from "@vuepress/plugin-comment";

import navbar from "./navbar.js";
export default defineUserConfig({
  base: "/vueblog/",
  lang: "zh-CN",
  title: "daisz'blog",
  description: "",
  theme: hopeTheme({
    navbar,
    displayFooter: false,
    plugins: {
      blog: {
        excerpt: false,
      },
      components: {
        components: ["ArtPlayer", "PDF", "VidStack"],
      },
    },
  }),
});
