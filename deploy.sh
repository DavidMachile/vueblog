#!/usr/bin/env bash
set -e

# ============================================================
# Gitee Pages 部署脚本
# 将构建产物推送到 gh-pages 分支，配合 Gitee Pages 使用
# ============================================================

GITEE_REMOTE="git@gitee.com:dsz1992/vue.git"
DEPLOY_BRANCH="gh-pages"
SUBDIR="vueblog"       # 与 config.ts 中 base 对应

echo "==> 1. 构建..."
npm run docs:build

echo "==> 2. 准备部署目录..."
DIST_DIR="src/.vuepress/dist"
TEMP_DIR=$(mktemp -d)

mkdir -p "$TEMP_DIR/$SUBDIR"
cp -r "$DIST_DIR"/* "$TEMP_DIR/$SUBDIR/"

echo "==> 3. 推送到 $DEPLOY_BRANCH 分支..."
cd "$TEMP_DIR"
git init
git checkout -b "$DEPLOY_BRANCH"
git add -A
git commit -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')"
git remote add origin "$GITEE_REMOTE"
git push -f origin "$DEPLOY_BRANCH"

echo "==> 完成！"
echo "请在 Gitee 仓库设置中开启 Pages 服务："
echo "  https://gitee.com/dsz1992/vue/pages"
echo "  部署分支: gh-pages"
echo "  部署目录: /${SUBDIR}"
rm -rf "$TEMP_DIR"
