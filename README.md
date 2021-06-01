# anyrtc-website4.0

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 框架

在 nuxt 的基础之上，采用了 SSR 服务端渲染的模式，并融入 `Tailwind CSS` UI 框架，`Axios` 网络请求库，以及项目 lint 工具，包括： ESLint、Prettier、Lint staged files、Commitlint 等，

nuxt 的 client 部分是基于 vue 2.x 实现的，因此我们在使用该框架时应参考 vue 2.x 的规范进行开发，严格执行 nuxt 提供的 API 以及规范。[点击查看详细介绍](https://nuxtjs.org/docs/2.x/get-started/installation)。

> 如果我们使用了 tailwind css 框架，我们同时还需要使用 sass 时，需要安装 node-sass 但是版本不能小于 4.0.0 同时大于 6.0.0, 可以安装 ndoe-sass@^5.0.0。

### 目录

使用此框架，你需要熟悉 nuxtjs、vue 2.x 等框架，另外要了解 nuxtjs 有着丰富的插件和 modules 可以使用。

### 自定义配置

配置我们可以在根目录的 `.env` 文件中定义，如果需要在上下文对象 `context` 中可以读取到 env 参数，可以在 `nuxt.config.js` 中定义 env 配置，比如第三方库的 appID、网络请求 baseUrl 等。

### 添加 modules

根据项目的需求我们还可以添加一些 nuxt 的 modules，[点击查看详情](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-modules)。

例如，当前是一个网站的门户，我们需要定义一个 sitemap，就可以使用 `@nuxtjs/sitemap`，通过配置或自动的生成 `sitemap.xml`。

当前项目我们使用了以下 modules:。

- `@nuxtjs/sitemap`
- `@nuxtjs/google-gtag`
- 百度统计
- 百度地图

### 添加自定义插件

自定义插件，可以是 vue 插件，可以是服务端有效的插件、也可以是客户端有效的插件，[点击查看详情](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-plugins)。

当前项目我们使用了以下 plugins：

- plugins/axios.js 请求响应拦截
- plugins/api.js   定义所有请求的 API

### 添加自定义中间件

当前项目我们使用了以下中间件：

- 路由守卫

### 关于 git commit

在进行 git commit 操作时需要遵守一下规范，否则会抛出异常：

```bash
git commit -m "<type>(<scope>): <subject>"
```

#### type

其中 `type` 是必填，必须是以下 11 种之一：

- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动
- build：编译相关的修改，例如发布版本、对项目构建或者依赖的改动
- ci：持续集成修改
- perf：优化相关，比如提升性能、体验。
- revert：回滚到上一个版本

#### scope

`scope` 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

#### subject

subject是 commit 目的的简短描述，不超过50个字符。

- 以动词开头，使用第一人称现在时，比如change，而不是changed或changes
- 第一个字母小写
- 结尾不加句号（.）

#### 示例

```
git commit -m "feat(view): 添加 banner 组件"
```

还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以revert:开头，后面跟着被撤销 Commit 的 Header。

```
git commit -m "revert: feat(pencil): add 'graphiteWidth' option"
```