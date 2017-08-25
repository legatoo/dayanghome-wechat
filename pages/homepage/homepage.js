//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  //事件处理函数
  jumptoabout: function () {
    wx.navigateTo({
      url: '../about/about'
    })
  },

  jumptoappointment: function () {
    wx.navigateTo({
      url: '../appointment/appointment'
    })
  },
  jumptocustomize: function () {
    wx.showToast({
      title: '尽请期待',
    })
  },

  jumptoaftersale: function () {
    wx.showToast({
      title: '即将上线',
    })
  },
  onLoad: function () {
    console.log('homepage')
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
