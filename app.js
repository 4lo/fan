App({
    onLaunch: function () {
        console.log('App Launch')
    },
    onShow: function () {
        console.log('App Show')
    },
    onHide: function () {
        console.log('App Hide')
    },
    globalData: {
        hasLogin: false
    },
     onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: 'FAN',
      path: '/pages/index/index',
      imageUrl: '/images/logo.png',
      success: function (res) {
        // 转发成功
        console.log('转发成功');
      },
      fail: function (res) {
        // 转发失败
        console.log('转发失败')
      }
    }
  }
});