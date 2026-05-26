# 部署到 GitHub Pages 步骤

## 1. 准备工作

### 仓库要求
需要有一个 **public** 的 GitHub 仓库，仓库名会影响站点地址。例如：

| 仓库名 | 地址 |
|--------|------|
| `vueblog` | `https://<用户名>.github.io/vueblog/` |
| `<用户名>.github.io` | `https://<用户名>.github.io/` |

### 确认基本配置

`src/.vuepress/config.ts` 中的 `base` 需要和仓库名一致：

```ts
base: "/vueblog/",   // 对应仓库名 vueblog
// 如果是用户主页仓库 <用户名>.github.io，改为 base: "/"
```

`src/.vuepress/theme.ts` 中的 hostname：

```ts
hostname: "https://<用户名>.github.io",
```

## 2. 自动部署（推荐）

### 2.1 创建 GitHub Actions 工作流

在项目根目录创建 `.github/workflows/deploy-docs.yml`：

```yaml
name: 部署到 GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: 设置 Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: 安装依赖
        run: npm ci

      - name: 构建
        run: npm run docs:build

      - name: 部署到 GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: src/.vuepress/dist
```

### 2.2 推送代码到 GitHub

```bash
# 添加 GitHub 远程仓库
git remote add origin git@github.com:<用户名>/<仓库名>.git

# 推送 main 分支
git push -u origin main
```

推送后 GitHub Actions 会自动触发构建和部署。

### 2.3 开启 GitHub Pages

部署完成后，确保 Pages 服务已启用：

1. 打开仓库的 **Settings** → **Pages**
2. **Source** 选择 `Deploy from a branch`
3. **Branch** 选择 `gh-pages`，目录选择 `/ (root)`
4. 点击 **Save**

也可以直接执行：

```bash
gh api repos/<用户名>/<仓库名>/pages \
  -X POST \
  -F 'source[branch]=gh-pages' \
  -F 'source[path]=/'
```

### 2.4 验证

- 仓库 **Actions** 标签页确认 workflow 运行成功
- 访问 `https://<用户名>.github.io/<仓库名>/` 确认站点可访问

## 3. 手动部署（备选）

当 GitHub Actions 不可用时使用，创建一个 `deploy.sh`：

```bash
#!/usr/bin/env bash
set -e

GITHUB_REMOTE="git@github.com:<用户名>/<仓库名>.git"
DEPLOY_BRANCH="gh-pages"

echo "==> 1. 构建..."
npm run docs:build

echo "==> 2. 准备部署目录..."
DIST_DIR="src/.vuepress/dist"
TEMP_DIR=$(mktemp -d)
cp -r "$DIST_DIR"/* "$TEMP_DIR/"
touch "$TEMP_DIR/.nojekyll"

echo "==> 3. 推送到 $DEPLOY_BRANCH 分支..."
cd "$TEMP_DIR"
git init
git checkout -b "$DEPLOY_BRANCH"
git add -A
git commit -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')"
git remote add origin "$GITHUB_REMOTE"
git push -f origin "$DEPLOY_BRANCH"

echo "==> 完成！"
rm -rf "$TEMP_DIR"
```

```bash
chmod +x deploy.sh
./deploy.sh
```

## 4. 注意事项

- 推送 main 分支时会自动触发部署，不需要手动运行脚本
- 首次部署可能需要 1-2 分钟才会生效
- `gh-pages` 分支由 Actions 自动维护，不要手动修改
- 如果看到 404，检查 workflow 是否运行成功和 Pages 设置是否正确
