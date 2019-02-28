const app = getApp();
Page({
  
    data: {

    },
    onLoad() {
        console.log('onload');
      wx.getLocation({
        type: 'wgs84',
        success: (res) => {
          const latitude = res.latitude // 纬度
          const longitude = res.longitude // 经度
        }
      })
    }
})