import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/vueblog/",
  lang: "zh-CN",
  title: "daisz'blog",
  description: "daisz的博客 | 记录生活、旅行、技术学习与个人成长",
  theme,
  bundler: viteBundler({
    viteOptions: {
      assetsInclude: ["**/*.mp4"],
    },
  }),
});
