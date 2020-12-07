// pages/order/complete.js
var app = getApp();
var util = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: app.data.skin,
    brandUpperCase: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   var that=this
   
    switch (app.data.activityMerchantCode) {
      case "MLFS.QAD":
        that.setData({
          membershipType: "俏安朵",
          brandUpperCase: "MLFS.QAD"
        })
        break;
      case "MLFS.YBK":
        that.setData({
          membershipType: "优布客",
          brandUpperCase: "MLFS.YBK"
        })
        break;
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.createMembershipNumber()
   // this.getMembershipCardNumber()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  createMembershipNumber() {
   

  },






  getMembershipCardNumber() {

  },
  setNavigationData(userModel, serverData) {
    console.log("userModel=", userModel)
    console.log("serverData=", serverData)
    for (let i = 0; i < userModel.brand.GJNXFXHHJLB.HHJLB.length; i++) {
      if (serverData.value.indexOf(userModel.brand.GJNXFXHHJLB.HHJLB[i].relationBrand) > -1) {

        userModel.brand.GJNXFXHHJLB.HHJLB[i].cardInfo.cardBrand = serverData.value
        userModel.brand.GJNXFXHHJLB.HHJLB[i].cardInfo.cardId = serverData.id
        userModel.brand.GJNXFXHHJLB.HHJLB[i].cardInfo.cardName = serverData.key.split("-")[0]
        if (serverData.key.split("-")[1]) {
          userModel.brand.GJNXFXHHJLB.HHJLB[i].cardInfo.cardSubName = serverData.key.split("-")[1]
        } else {
          userModel.brand.GJNXFXHHJLB.HHJLB[i].cardInfo.cardSubName = ""
        }
        userModel.brand.GJNXFXHHJLB.HHJLB[i].cardInfo.cardEndTime = serverData.time
        userModel.brand.GJNXFXHHJLB.HHJLB[i].cardInfo.cardNumber = serverData.value2



      } else {

        // console.log("userModel.brand.GJNXFXHHJLB.HHJLB[i].relationBrand =", userModel.brand.GJNXFXHHJLB.HHJLB[i].relationBrand)
        // console.log("serverData  serverData.value =", serverData.value)

        // console.log("(serverData.value.indexOf(userModel.brand.GJNXFXHHJLB.HHJLB[i].relationBrand)=", serverData.value.indexOf(userModel.brand.GJNXFXHHJLB.HHJLB[i].relationBrand))

      }
    }

    return userModel

  },


  toChoose(value) {
    var url = ""
    console.log(value.currentTarget.dataset.id)

    switch (value.currentTarget.dataset.id) {

       case 0:

        wx.showToast({
          title: '此处需要重新实现',
        })

      //   url = "../gift-management/gift-management"
      //   wx.navigateTo({
      //     url: url
      //   })
        break;
      case 1:

      wx.showToast({
        title: '此处需要重新实现',
      })

        // var that = this
        // console.log("intoNavigationActivitie userModel=", that.data.userModel)
        // if (that.data.userModel) {
        //   if (that.data.userModel.brand.GJNXFXHHJLB.HHJLB) {

        //     if (that.data.userModel.brand.GJNXFXHHJLB.HHJLB.length > 1) {
        //       wx.navigateTo({
        //         url: '../activity/activity-management/activity-management',
        //       })

        //     } else if (that.data.userModel.brand.GJNXFXHHJLB.HHJLB.length == 1) {
        //       wx.navigateTo({
        //         url: '../activity/navigation_activity/navigation_activity?brand=' + that.data.userModel.brand.GJNXFXHHJLB.HHJLB[0].relationBrand,
        //       })
        //     }
        //   }
        // }



        
        break;
      case 2:
        // url = '../my/my'
        // wx.redirectTo({
        //   url: url
        // })
        break;
    }

   
  }
})