var WxAutoImage = require('../../js/WxAutoImage.js');
var app = getApp()
Page({
    data: {
    },
    onLoad: function () {
        var that = this
    },
    cusImageLoad: function (e) {
        var that = this;
        //这里看你在wxml中绑定的数据格式 单独取出自己绑定即可
        that.setData(WxAutoImage.wxAutoImageCal(e));
        console.log("-----> ", this.data);
    },

})