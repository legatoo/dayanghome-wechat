function returnHome() {
    wx.redirectTo({
        url: '../homepage/homepage'
    })
}

// success.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log("start timer");
        setTimeout(returnHome, 2000);
    }

})