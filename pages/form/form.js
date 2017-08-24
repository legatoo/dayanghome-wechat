// form.js

Page({

    /**
     * 页面的初始数据
     */
    data: {
        provinceId: 0,
        cityId: 0,
        index: 0,
        districts: [
            '城关区',
            '七里河区',
            '西固区',
            '安宁区',
            '红古区',
            '永登县',
            '皋兰县',
            '榆中县'
        ],
        appointmentDay: new Date().toISOString().slice(0, 10),
        hourBegin: 0,
        hourEnd: 0,
        hourIndex: [0, 1],
        hourRange: [[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    bindDateChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            appointmentDay: e.detail.value
        })
    },

    bindProvinceChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            provinceId: e.detail.value
        })
    },

    bindCityChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            cityId: e.detail.value
        })
    },

    bindMultiPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            hourIndex: e.detail.value,
            hourBegin: this.data.hourRange[0][e.detail.value[0]],
            hourEnd: this.data.hourRange[1][e.detail.value[1]],
        })
        console.log("时段变为", this.data.hourBegin, this.data.hourEnd)
    },

    listenSubmit: function (e) {
        console.log('button is clicked');

    }

})