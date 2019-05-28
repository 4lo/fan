// pages/index/index.js
const api = require('../../config/config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onReady: function() {
  },

  login: function (e) {
    console.log(e.detail.value)
    wx.setStorage({
      key: 'user_email',
      data: e.detail.value.email,
    })
    wx.request({
      url: api.base_url + 'loginwx',
      data: {
        email: e.detail.value.email,
        password: e.detail.value.password
      },
      success(res) {
        console.log(res.data.user_name)
        wx.setStorage({
          key: 'user_name',
          data: res.data.user_name,
        })

        wx.switchTab({
          url: '../daily/daily',
        })
        
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})