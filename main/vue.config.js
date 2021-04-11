module.exports = {
  transpileDependencies: ['common'], // ! https://cli.vuejs.org/zh/config/#transpiledependencies
  chainWebpack: config => {
    config.plugin('html')
      .tap((args) => {
        args[0].title = 'qiankun-example'
        return args
      })
  }
}
