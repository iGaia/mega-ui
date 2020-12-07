var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: app.data.skin,
    themeList: [],
    productList: [{
      id: '0',
      title: "纯享版",
      subtitle: "（一天行程）",
      priceDescription: "¥980/人",
      lineThroughTexe: "¥1980/人",
      price: 980,
      num: 1,
      isChecked: false
    }, {
      id: '1',
      title: "尊享版",
      subtitle: "（一天一晚行程）",
      priceDescription: "¥1980/人",
      lineThroughTexe: "¥2980/人",
      price: 1980,
      num: 1,
      isChecked: false
    }, {
      id: '2',
      title: "致臻版",
      subtitle: "（三天二晚行程）",
      priceDescription: "¥2980/人",
      lineThroughTexe: "¥3880/人",
      price: 2980,
      num: 1,
      isChecked: false
    }],
    activityPhase: [],

    num: 1,

    price: 0,

    activityPhase: [],
    currentTab: 0,
    currentTimeSequence: 0




  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    console.log("options=", options)
    if (options.brand) {

      switch (options.brand) {
        case "MLFS.QAD":
          that.setData({
            brand: options.brand,

          })
          break;
        case "MLFS.YBK":
          that.setData({
            brand: options.brand,

          })
          break;
        case "LVI.LVI":
          that.setData({
            brand: options.brand,

          })
          break;
      }

    }



    var userInfoCache = wx.getStorageSync('userInfoCache') || {}
    if (userInfoCache.name) {
      that.setData({
        name: userInfoCache.name
      })
    }
    if (userInfoCache.phone) {
      that.setData({
        phone: userInfoCache.phone
      })
    }





  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this

    that.setData({
      themeList: [{
          phase: "第一期",
          title: "3月18-20日，美丽三亚 浪漫天涯-帆船冲浪之旅/三亚",
          isChecked: false,
          isAllowSelection: false,
          timeSequence: -1,
        }, {
          phase: "第二期",
          title: "3月28-30日，重回大航海时代-南海公海帆船之旅/三亚",
          isChecked: false,
          isAllowSelection: false,
          timeSequence: -1,
        },
        {
          phase: "第三期",
          title: "4月17-19日，上天入海 自由航行-VIP致臻体验之旅/三亚",
          isChecked: false,
          isAllowSelection: true,
          timeSequence: -1,
        },
        {
          phase: "第四期",
          title: "4月24-26日，上天入海 自由航行-VIP致臻体验之旅/三亚",
          isChecked: false,
          isAllowSelection: true,
          timeSequence: -1,
        },
        {
          phase: "第五期",
          title: "5月1-3日，阅尽千帆 仍是少年-VIP致臻自然之旅/三亚",
          isChecked: false,
          isAllowSelection: true,
          timeSequence: -1,
        },
        {
          phase: "第六期",
          title: "5月22-24日，速度与激情 赛帆驾驶体验/北京、秦皇岛",
          isChecked: false,
          isAllowSelection: true,
          timeSequence: -1,
        },
        {
          phase: "第七期",
          title: "6月12-14日，星空漂浮 夜航体验-音乐艺术梦想家/威海",
          isChecked: false,
          isAllowSelection: true,
          timeSequence: -1,
        },
        {
          phase: "第八期",
          title: "6月25-27日，粽情大海 亲子帆船体验-端午假期倾情推出/大连",
          isChecked: false,
          isAllowSelection: true,
          timeSequence: -1,
        },
        {
          phase: "第九期",
          title: "7月11-13日，掌舵未来 船长成长日记-纪念中国航海日/深圳",
          isChecked: false,
          isAllowSelection: true,
          timeSequence: -1,
        },
        {
          phase: "第十期",
          title: "7月25-27日，暑期亲子帆船训练营-人生智慧启迪/北京、秦皇岛",
          isChecked: false,
          isAllowSelection: true,
          timeSequence: -1,
        }
      ],

    })
  },


  bindPickerChange(value) {
    var that = this
    that.setData({
      currentTab: 1,
      currentTimeSequence: value.currentTarget.dataset.id
    })

    for (let i = 0; i < that.data.themeList.length; i++) {
      if (that.data.activityPhase[that.data.currentTimeSequence] == i) {
        that.setData({
          ['themeList[' + i + '].isChecked']: true
        })
      } else {
        that.setData({
          ['themeList[' + i + '].isChecked']: false
        })
      }

    }




  },

  radioChange(value) {
    var that = this
    that.setData({
      ['themeList[' + parseInt(value.detail.value) + '].timeSequence']: that.data.currentTimeSequence,
      ['themeList[' + parseInt(value.detail.value) + '].isChecked']: true
    })

    var activityPhase = that.data.activityPhase

    activityPhase[that.data.currentTimeSequence] = parseInt(value.detail.value)
    var result = [];

    for (var i = 0; i < activityPhase.length; i++) {
      if (result.indexOf(activityPhase[i]) == -1) {

        result.push(activityPhase[i]);
      }
    }

    this.setData({
      currentTab: 0,
      activityPhase: result
    })

  },
  deselected() {
    var that = this
    var activityPhase = that.data.activityPhase
    activityPhase.splice(that.data.currentTimeSequence, 1)
    console.log('activityPhase=', activityPhase)
    this.setData({
      activityPhase: activityPhase
    })
    this.back()
  },
  getPhoneNumber(value) {
    console.log(value)
  },
  formSubmit(value) {
    var that = this
    //重要 下面这个判定逻辑要改
    if (that.data.productList[0].isChecked == false && that.data.productList[1].isChecked == false && that.data.productList[2].isChecked == false) {
      this.setData({
        last: "activityPackage"
      })
      wx.showToast({
        title: '请选择活动套餐',
        icon: 'none'
      })
      return
    }
    if (that.data.activityPhase.length == 0) {
      this.setData({
        last: "activityPhase"
      })
      wx.showToast({
        title: '请选择首选活动日期',
        icon: 'none'
      })
      return
    }
    if (value.detail.value.name == "") {
      this.setData({
        last: "contactInfo"
      })
      wx.showToast({
        title: '请填写活动联系人姓名',
        icon: 'none'
      })
      return
    }

    if (value.detail.value.phone == "") {
      this.setData({
        last: "contactInfo"
      })
      wx.showToast({
        title: '请填写活动联系人手机号',
        icon: 'none'
      })
      return
    }
    that.setData({
      contactsInfo: {
        name: value.detail.value.name,
        phone: value.detail.value.phone,
        remarks: value.detail.value.remarks
      }
    })



    that.createProductOrderByWX()

    // var tempActivityPhase = []


    // for (let i = 0; i < that.data.activityPhase.length; i++) {
    //   tempActivityPhase.push({
    //     id: that.data.activityPhase[i],
    //     name: that.data.themeList[that.data.activityPhase[i]].phase
    //   })
    // }
    // that.setData({
    //   tempActivityPhase: tempActivityPhase
    // })
    // that.setLocalCache()
  },

  choosePackage(value) {
    console.log(value)

    var that = this
    that.setData({
      'productList[0].isChecked': false,
      'productList[1].isChecked': false,
      'productList[2].isChecked': false
    })

    if (value.detail.value.length > 0) {
      for (let i = 0; i < value.detail.value.length; i++) {
        that.setData({
          ['productList[' + value.detail.value[i] + '].isChecked']: true
        })
      }
    }
    this.calculatedPrice()
  },
  /*点击减号*/
  bindMinus(value) {

    console.log(value.currentTarget.dataset.id)
    var that = this
    var num = that.data.productList[parseInt(value.currentTarget.dataset.id)].num;

    if (num > 1) {
      num--;
    }

    that.setData({
      ['productList[' + value.currentTarget.dataset.id + '].num']: num,

    })

    this.calculatedPrice()
  },
  /*点击加号*/
  bindPlus(value) {

    console.log(value.currentTarget.dataset.id)
    var that = this

    var num = that.data.productList[parseInt(value.currentTarget.dataset.id)].num;

    num++;

    that.setData({
      ['productList[' + value.currentTarget.dataset.id + '].num']: num,

    })

    this.calculatedPrice()
  },

  calculatedPrice() {
    var that = this
    console.log('触发价格计算', that.data.productList)


    var price = 0

    for (let i = 0; i < that.data.productList.length; i++) {

      if (that.data.productList[i].isChecked == true) {
        price += that.data.productList[i].price * that.data.productList[i].num
      }
    }

    that.setData({
      price: price
    })
  },
  catchTouchMove(value) {

    return false
  },
  back() {
    this.setData({
      currentTab: 0
    })
  },
//微信支付
  createProductOrderByWX: function(e) {
  },

  setLocalCache() {
    var that = this
    wx.getStorage({
      key: 'userModel',
      success: function(res) {
        console.log("获取赠品模型成功", res)
        let userModel = res.data

        if (userModel.brand.GJNXFXHHJLB) {

          if (userModel.brand.GJNXFXHHJLB.HHJLB) {

            for (let i = 0; i < userModel.brand.GJNXFXHHJLB.HHJLB.length; i++) {
              console.log("触发此处 userModel.brand.GJNXFXHHJLB.HHJLB[i].relationBrand=", userModel.brand.GJNXFXHHJLB.HHJLB[i].relationBrand)
              console.log("触发此处that.data.brand=" + that.data.brand)
              if (userModel.brand.GJNXFXHHJLB.HHJLB[i].relationBrand == that.data.brand) {
                console.log("触发此处relationBrand=" + userModel.brand.GJNXFXHHJLB.HHJLB[i].relationBrand)
                let tempProductList = []
                for (let x = 0; x < that.data.productList.length; x++) {
                  if (that.data.productList[x].isChecked == true) {
                    tempProductList.push({
                      id: that.data.productList[x].id,
                      title: that.data.productList[x].title,
                      price: that.data.productList[x].price,
                      num: that.data.productList[x].num
                    })
                  }
                }
                userModel.brand.GJNXFXHHJLB.HHJLB[i].isAlreadyPurchased = true
                userModel.brand.GJNXFXHHJLB.HHJLB[i].productInfo = {
                  phaseList: that.data.tempActivityPhase,
                  productList: tempProductList
                }

                userModel.brand.GJNXFXHHJLB.HHJLB[i].contactsInfo = that.data.contactsInfo
                console.log("触发此处 userModel", userModel)
                wx.setStorageSync('userModel', userModel);
                app.uploadUserCache(userModel)
                break;


              }



            }



          }
        }


      },
      complete() {
        wx.navigateBack({

        })

        wx.navigateTo({
          url: 'successful_payment?brand=' + that.data.brand + "&type=paySuccess"
        })
      }
    })


  },
  pay(signedOrderMessage) {
   
  }


})