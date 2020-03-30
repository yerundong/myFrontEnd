// Page() 注册一个页面。
Page({
  data: {},
  // 以下是页面的生命周期
  /**
   * @method 监听页面加载
   */
  onLoad() {
    let exportData = this.selectComponent('#comp');
    console.log('exportData', exportData);
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
    
  }
})