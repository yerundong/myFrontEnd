Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg2: 'lalala'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },
  /**
   * @overview 监听组件事件 
   * @method  
  */
  comp1Tap(e){
    console.log(e);
  },
  cusFn(e){
    console.log(e);
    console.log('this is cusEvent');
  }
})