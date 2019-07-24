Page({
  data: {
    x: 0,
    y: 0,
    scale: 1
  },
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
  tap(e) {
    this.setData({
      x: 30,
      y: 30
    });
  },
  /**
   * @overview 拖动 
   * @method  
  */
  onChange(e) {
    console.log('onChange');
    console.log(e.detail)
  },
  /**
   * @overview 改变大小 
   * @method  
  */
  onScale(e) {
    console.log('onScale');
    console.log(e.detail)
  },
  cscale(e){
    console.log(e.target.dataset.scale);
    this.setData({
      scale: e.target.dataset.scale,
    });
  }
})