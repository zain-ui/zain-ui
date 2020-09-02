# 组件开发说明文档

## 开发调试

### 组件开发

`yarn www-dev` 启动组件开发页面

- 组件开发和调试目录: `./components` 和 `./www`

`yarn www-build` 将组件开发页面编译成静态页面

- 编译后的文件夹: `./out/www`

### 文档开发

`yarn docz-dev` 启动组件文档开发页面

- 文档编写和组件调试目录: `./components` 和 `./docs`

`yarn docz-build` 编译组件文档页面

- 编译后的文件夹: `./out/docs`

## 发布组件

- 修改 package.json 版本号 version

- `yarn build` 生成 ./lib 和 ./esm 文件夹

- `cd lib` 终端进入 ./lib 文件夹

- `npm publish` 发布到 npm (需要先登入 `npm login`)

- 在线查看是否发布成功: https://www.npmjs.com/package/zain-ui

- 在线测试: https://npm.runkit.com/zain-ui

## TODO

暂时没有发布 esm, package.json 中没有添加 "module": "esm/index.js",

### 所有依赖包更到最新

- 手动选择升级的依赖包，按空格键选择，a 键切换所有，i 键反选选择，空格选择单个，方向键上下切换选择
```
yarn upgrade-interactive --latest
```

## GitHub Pages 部署问题

GitHub Pages 域名大小写敏感：

`mdx` 文件中的路由，一定要全小写 `route: /components/menuList`
