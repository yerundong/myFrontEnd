Page({
  data: {
    msg1: '123'
  },
  // 以下是页面的生命周期
  /**
   * @method 监听页面加载
   */
  onLoad() {
  },
  /**
     * @method 监听页面显示
     */
  onShow() {
  },
  /**
   * @method 监听页面初次渲染完成
   */
  onReady() {
  },
  wrap_tap_fn(e){
    console.log('冒泡');
  },
  tap_fn(e){
    console.log(e);
  },
  longpress_fn(e){
    console.log(e);
  },
})