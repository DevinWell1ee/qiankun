// 运行时publicpath
(function () {
  if (window.__POWERED_BY_QIANKUN__) {
    if (process.env.NODE_ENV === 'development') {
      console.log(process.env)
      // eslint-disable-next-line
      __webpack_public_path__ = `//localhost:${process.env.VUE_APP_PORT}${process.env.BASE_URL}`
      // eslint-disable-next-line no-undef
      console.log('publicpath---', __webpack_public_path__)
      return
    }
    // eslint-disable-next-line
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
  }
})()
