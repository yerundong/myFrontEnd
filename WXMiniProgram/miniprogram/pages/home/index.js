Page({
  data: {

  },

  onLoad() {
    // wx.navigateTo({ url: '/pages/behaviors/index'})
  },
  jump(e){
    console.log(e.target.dataset.url)
    // navigateTo redirectTo
    wx.navigateTo({ url: e.target.dataset.url})
  }
})
