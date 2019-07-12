// App()：注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。
// 必须在 app.js 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。
// App()内部this指向唯一实例，getApp()也是取到这个this
App({
  // 以下是小程序的生命周期
  /**
   * @method 监听小程序启动之后触发 小程序初始化
   * 与wx.getLaunchOptionsSync一致
   */
  onLaunch(options) {
    // console.log('-----------onLaunch------------')
    // console.log(this)；
    // console.log(options)
    if (!wx.cloud) {
      // console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
  },
  /**
   * @method 监听小程序启动或切前台 小程序显示
   * 与 wx.onAppShow 一致
   */
  onShow(options) {
    // console.log('-----------onShow------------')
    // console.log(options)
  },
  /**
   * @method 监听小程序切后台 小程序隐藏
   * 等同于wx.onAppHide()
   */
  onHide(options) {
    console.log('-----------onHide------------')
    // console.log(options)
  },
  /**
   * @method 错误监听函数 
   * 等同于wx.onError()
   */
  onError(msg) {
    console.log('-----------onError------------')
    console.log(msg)
  },
  /**
   * @method 监听打开的页面不存在时触发
   * 与 wx.onPageNotFound 一致
   */
  onPageNotFound(res) {
    console.log('-----------onError------------')
    console.log(res)
  },
  // 全局数据
  globalData: {
    global_msg: 'hhh'
  }
})
