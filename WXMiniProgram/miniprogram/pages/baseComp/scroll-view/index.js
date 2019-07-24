Page({
  data: {
    toView: 'red',
    scrollTop: 20,
    scrollList: [{
      color: 'red'
    }, {
      color: 'green'
    }, {
      color: 'yellow'
    }],
  },
  upper(e) {
    console.log('upper')
  },
  lower(e) {
    console.log('lower')
  },
  scroll(e) {
    console.log('scroll')
  },
  tapTOred(e) {
    this.setData({
      toView: 'red'
    });
    console.log(this.data.toView);
  },
  tapMove(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
    console.log(this.data.scrollTop);
  }
})