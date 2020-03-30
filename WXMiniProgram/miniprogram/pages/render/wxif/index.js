Page({
  data: {
    flag:1
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
  add(){
    this.data.flag ++;
    this.setData({
      flag: this.data.flag++
    })
    console.log(this.data.flag);
  }
})