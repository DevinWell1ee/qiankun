const { name } = require('../package.json')

module.exports = {
  publicPath: '/subapp/sub-vue', // ! https://cli.vuejs.org/zh/config/#publicpath
  transpileDependencies: ['common'],
  chainWebpack: config => config.resolve.symlinks(false),
  configureWebpack: {
    output: {
      // 构建一个可被其他模块导入使用的库时
      library: `${name}-[name]`, // 值的作用取决于libraryTarget
      libraryTarget: 'umd', // 以何种方式导出，默认var, window/global/this/commonjs/amd/umd
      // amd (define, require), commong(exports, require), umd(兼容2者， 并支持全局变量)
      jsonpFunction: `webpackJsonp_${name}` // 异步加载chunk的函数，当单页有多个webpack实例时，请使用不同的标识符
    }
  },
  devServer: {
    port: process.env.VUE_APP_PORT,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
