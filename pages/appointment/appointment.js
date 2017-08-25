// form.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    provinces: app.globalData.provinceList,
    cities: app.globalData.cityMap,
    chineseName: '',
    gender: 0,
    mobile: '',
    provinceId: 620000,
    cityId: 620100,
    provinceIndex: 1,
    cityIndex: 0,
    appointmentDay: new Date().toISOString().slice(0, 10),
    hourBegin: 0,
    hourEnd: 0,
    hourIndex: [0, 1],
    hourRange: [[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  bindDateChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      appointmentDay: e.detail.value
    })
  },

  bindProvinceChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      provinceIndex: e.detail.value,
      provinceId: this.data.provinces[e.detail.value].provinceId,
      cityIndex: 0,
      cityId: this.data.cities[this.data.provinces[e.detail.value].provinceId][0].cityId
    })
  },

  bindCityChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      cityIndex: e.detail.value,
      cityId: this.data.cities[this.data.provinceId][e.detail.value].cityId
    })
  },

  bindMultiPickerChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      hourIndex: e.detail.value,
      hourBegin: this.data.hourRange[0][e.detail.value[0]],
      hourEnd: this.data.hourRange[1][e.detail.value[1]],
    })
    //console.log("时段变为", this.data.hourBegin, this.data.hourEnd)
  },

  listenSubmit: function (e) {
    console.log('button is clicked');
  }

})