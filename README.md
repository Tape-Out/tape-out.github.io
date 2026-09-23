# 息壤 Xirang 官网

毛坯房。这一版只做一件事：**把技术栈钉死**，内容留个雏形。

| 事 | 定案 |
|:--:|:--|
| 构建 | Vite 6 |
| 框架 | Vue 3 |
| 模板 | Vue 原生 |
| 样式 | Stylus |
| 语言 | TypeScript |
| 发布 | GitHub Pages |

```sh
npm install
npm run dev      # 开发
npm run build    # 类型检查 + 出静态产物到 dist/
```

## 模板为什么不是 Fumi

原定 `@subwaytime/fumi`（`<template lang="fumi">`，`{% %}` 在构建期编成 Vue 指令）。
实测 0.0.3 有四处各自独立的毛病，最硬的一条是**它自己 README 上的例子就生成非法代码**：

```
{% for item in items :key="item.id" %}
  →  v-for='item in items :key="item.id"'      // :key 被塞进了循环表达式里
{% for item in items %}
  →  v-for="item in items"                     // 不带 key 才对
```

任何带 key 的列表都编不过，而真实列表都要 key。另外三条：README 写的导出名 `fumi`
实际是 `fumiVite`；插件对象的 `map: undefined[]` 与 Vite 6 的 `PluginOption` 类型不兼容；
Volar 插件上限是 vue language tools 2.1，而当前是 2.2。

所以退回 Vue 原生模板——这本来就是写在计划里的退路。等它修好再说。

## 版面

配色取青瓷与墨——名字出自《山海经》里会自己生长的土，所以走中式古典一路。
字用两把嗓子：**Spectral**（拉丁）配 **思源宋体**（中文）是同一把，**IBM Plex Mono**
只落在真的标识符与清单片段上。全篇宋体，不走「宋体标题加黑体正文」那套默认。
入场动效只此一处：「息」「壤」二字先后落定，`prefers-reduced-motion` 下不动。

## 下一步

各库齐了之后：目录改由 `ran list --format json` 生成（手写的目录活不过三次改名）·
四类做成真的索引 · 接 Read the Docs · Actions 自动发 Pages。
