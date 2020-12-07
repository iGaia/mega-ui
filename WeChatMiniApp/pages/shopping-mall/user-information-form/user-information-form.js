const util = require('../../../utils/util.js')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: app.data.skin,
    phone: "",
    name: "",
    windowHeight: 1000,
    birthday: "",
    array: ['男', '女'],
    index: 0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    wx.getSystemInfo({
      success: function(res) {
        //    console.log("总高度",res.windowHeight);
        that.setData({
          windowHeight: res.windowHeight,

        })
      },
    });

    this.setData({
      userInfo: app.globalData.userInfo,
      hasUserInfo: true
    })





  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this
    var userInfoCache = wx.getStorageSync('userInfoCache') || {}

    console.log("onShow userInfoCache=", userInfoCache)
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
    if (userInfoCache.birthday) {
      that.setData({
        birthday: userInfoCache.birthday
      })
    }
    if (userInfoCache.sex) {
      that.setData({
        sex: userInfoCache.sex
      })
    }

    if (!userInfoCache.name && !userInfoCache.phone){

      var addressList = wx.getStorageSync('addressList') || []
       
      for (var i = 0; i < addressList.length; i++) {
        //   console.log(addressList[i].id, "对比", that.data.id);
        if (addressList[i].is_default == true) {
          //   console.log("捕获到数据记录");
          that.setData({
            phone: addressList[i].phone,
            name: addressList[i].consigneeName
          })
         
        }
      }

    }


  },
  
  bindPickerChange(value){
    console.log("bindPickerChange，value", value)
   var that=this
    that.setData({
        index: parseInt(value.detail.value),

      sex: that.data.array[parseInt(value.detail.value)]
      })

  },
  



  formSubmit: function(value) {
    console.log("formSubmit=", value)

    console.log(value)

    var userInfoCache = {}
    if (value.detail.value.phone) {
      userInfoCache.phone = value.detail.value.phone
    }

    if (value.detail.value.name) {
      userInfoCache.name = value.detail.value.name
    }
    if (value.detail.value.birthday) {
      userInfoCache.birthday = value.detail.value.birthday
    }
    if (value.detail.value.sex) {
      userInfoCache.sex = value.detail.value.sex
    }
    

    wx.setStorageSync('userInfoCache', userInfoCache);


    console.log('userInfoCache=', userInfoCache)
    // wx.navigateBack({

    // })
  },

  bindDateChange: function(e) {
    var that = this;
    that.setData({
      birthday: e.detail.value
    })

  },
  phoneNumberChange: function(e) {

  },
  confirmEvent: function() {

    this.dialog.hideDialog();
  },

  
  getPhoneNumber(e) {
    console.log(e)
    var that = this;
    // that.setData({
    //   phone: '15362458142'
    // })

  },
})