//app.js
App({
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null,

    provinceList: [
      {
        provinceId: 610000,
        provinceName: "陕西"
      },
      {
        provinceId: 620000,
        provinceName: "甘肃"
      },
      {
        provinceId: 630000,
        provinceName: "青海"
      },
      {
        provinceId: 640000,
        provinceName: "宁夏"
      },
      {
        provinceId: 650000,
        provinceName: "新疆"
      }
    ],

    cityMap: {
      610000: [
        {
          cityId: 610100,
          cityName: '西安市'
        },
        {
          cityId: 610200,
          cityName: '铜川市'
        },
        {
          cityId: 610300,
          cityName: '宝鸡市'
        },
        {
          cityId: 610400,
          cityName: '咸阳市'
        },
        {
          cityId: 610500,
          cityName: '渭南市'
        },
        {
          cityId: 610600,
          cityName: '延安市'
        },
        {
          cityId: 610700,
          cityName: '汉中市'
        },
        {
          cityId: 610800,
          cityName: '榆林市'
        },
        {
          cityId: 610900,
          cityName: '安康市'
        },
        {
          cityId: 611000,
          cityName: '商洛市'
        }
      ],
      620000: [
        {
          cityId: 620100,
          cityName: '兰州市'
        },
        {
          cityId: 620200,
          cityName: '嘉峪关市'
        },
        {
          cityId: 620300,
          cityName: '金昌市'
        },
        {
          cityId: 620400,
          cityName: '白银市'
        },
        {
          cityId: 620500,
          cityName: '天水市'
        },
        {
          cityId: 620600,
          cityName: '武威市'
        },
        {
          cityId: 620700,
          cityName: '张掖市'
        },
        {
          cityId: 620800,
          cityName: '平凉市'
        },
        {
          cityId: 620900,
          cityName: '酒泉市'
        },
        {
          cityId: 621000,
          cityName: '庆阳市'
        },
        {
          cityId: 621100,
          cityName: '定西市'
        },
        {
          cityId: 621200,
          cityName: '陇南市'
        },
        {
          cityId: 622900,
          cityName: '临夏自治州'
        },
        {
          cityId: 623000,
          cityName: '甘南自治州'
        }
      ],
      630000: [
        {
          cityId: 630100,
          cityName: '西宁市'
        },
        {
          cityId: 632100,
          cityName: '海东市'
        },
        {
          cityId: 632200,
          cityName: '海北市'
        },
        {
          cityId: 632300,
          cityName: '黄南自治州'
        },
        {
          cityId: 632500,
          cityName: '海南自治州'
        },
        {
          cityId: 632600,
          cityName: '果洛自治州'
        },
        {
          cityId: 632700,
          cityName: '玉树自治州'
        },
        {
          cityId: 632800,
          cityName: '海西自治州'
        }
      ],
      640000: [
        {
          cityId: 640100,
          cityName: '银川市'
        },
        {
          cityId: 640200,
          cityName: '石嘴山'
        },
        {
          cityId: 640300,
          cityName: '吴忠市'
        },
        {
          cityId: 640400,
          cityName: '固原市'
        },
        {
          cityId: 640500,
          cityName: '中卫市'
        }
      ],
      650000: [
        {
          cityId: 650100,
          cityName: '乌鲁木齐'
        },
        {
          cityId: 650200,
          cityName: '克拉玛依'
        },
        {
          cityId: 652100,
          cityName: '吐鲁番'
        },
        {
          cityId: 652200,
          cityName: '哈密'
        },
        {
          cityId: 652300,
          cityName: '昌吉'
        },
        {
          cityId: 652700,
          cityName: '博尔塔拉'
        },
        {
          cityId: 652800,
          cityName: '巴音郭楞'
        },
        {
          cityId: 652900,
          cityName: '阿克苏'
        },
        {
          cityId: 653000,
          cityName: '克孜勒苏'
        },
        {
          cityId: 653100,
          cityName: '喀什'
        },
        {
          cityId: 653200,
          cityName: '和田'
        },
        {
          cityId: 654000,
          cityName: '伊犁'
        },
        {
          cityId: 654200,
          cityName: '塔城'
        },
        {
          cityId: 654300,
          cityName: '阿勒泰'
        },
        {
          cityId: 659001,
          cityName: '石河子'
        },
        {
          cityId: 659002,
          cityName: '阿拉尔'
        },
        {
          cityId: 659003,
          cityName: '图木舒克'
        },
        {
          cityId: 659004,
          cityName: '五家渠'
        },
        {
          cityId: 659005,
          cityName: '北屯'
        },
        {
          cityId: 659006,
          cityName: '铁门关'
        }
      ]

    }
  }
})