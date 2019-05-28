const api = require('../../config/config.js');
Page({
  data: {
    user_name: wx.getStorageSync('user_name'),
    user_email: wx.getStorageSync("user_email")
  },



  add_friend: function(e) {
    wx.request({
      url: api.base_url + 'add_friend',
    })
    
  }
  
});