const api = require('../../config/config.js');
Page({
  data: {
    checkboxItems: []
  },
 
  onLoad: function() {
    let that = this;  
    let user_email;
    wx.getStorage({
      key: 'user_email',
      success: function (res) {
        user_email = res.data

        var checkboxItems = that.data.checkboxItems;
        wx.request({
          url: api.base_url + 'get_friend_wx',
          data: {
            user: user_email,
          },
          success: function (res) {
            var item;
            for (item in res.data) {
              checkboxItems.push({ name: res.data[item], value: item })
            };
            that.setData({
              checkboxItems: checkboxItems
            });
          }
        });
       },
    });
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    wx.setStorage({
      key: 'friend2eat',
      data: e.detail.value,
    })
    var checkboxItems = this.data.checkboxItems, values = e.detail.value;
    //console.log(values)
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems
    });
  },
  go_eating: function() {
    wx.navigateTo({
      url: '/pages/result/result',
    })
  }
});