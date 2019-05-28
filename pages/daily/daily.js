const api = require('../../config/config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookList: [],           // 书籍列表数组
    indicatorDots: false,   // 是否显示轮播指示点
    autoplay: false,        // 是否自动播放轮播
    interval: 5000,         // 轮播间隔
    duration: 1000,         // 轮播播放延迟
    circular: true,         // 是否采用衔接滑动
    sideMargin: '100rpx',   // 幻灯片前后边距
    showLoading: true       // 是否显示loading态
  },

  /**
   * 打开书籍详情页面
   */
  goDetail: function (ev) {

    let info = ev.currentTarget.dataset;

    let navigateUrl = '../detail/detail?';

    for (let key in info) {
      info[key] = encodeURIComponent(info[key]);
      navigateUrl += key + '=' + info[key] + '&';
    }

    navigateUrl = navigateUrl.substring(0, navigateUrl.length - 1);

    wx.navigateTo({
      url: navigateUrl
    });
  },

  /**
   * 获取所有书籍列表
   */
  getBookList: function () {

    let that = this;

    wx.request({
      url: api.base_url + 'daily',
      
      success: function (res) {
        let data = res.data;
        console.log(data);
        setTimeout(function () {
          that.setData({
            bookList: data,
            showLoading: false
          });
        }, 800);
      },
      error: function (err) {
        console.log(err);
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    that.getBookList();
    console.log(that.data.bookList)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('current page is onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('current page is onShow');
  },

  /**
   * 设置页面转发信息
   */
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