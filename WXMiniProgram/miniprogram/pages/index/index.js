const app = getApp()

Page({
  data: {

  },

  onLoad() {
    wx.navigateTo({ url: '/pages/component/home/index'})
  },
  jump(e){
    console.log(e.target.dataset.url)
    // navigateTo redirectTo
    wx.navigateTo({ url: e.target.dataset.url})
  }
})
