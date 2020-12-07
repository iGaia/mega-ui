var app = getApp();
// pages/order/downline.js



Page({
  data: {
    skin: app.data.skin,
    membershipType: "",
    isReadAgreement: false,
    total: 108,
    addemt: 0,
  },
  onLoad: function(options) {

  },
  onReady: function(options) {

  },
  onShow: function(options) {
    console.log('app.data.activityMerchantCode', app.data.activityMerchantCode)
    var that = this
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
  test() {
    this.setLocalCache()
  },



  //微信支付
  createProductOrderByWX: function(e) {
   
  },




  radioChange(value) {


    var that = this
    if (that.data.isReadAgreement == true) {
      that.setData({
        isReadAgreement: false
      })

    } else {
      that.setData({
        isReadAgreement: true
      })
    }
  },



  intoAgreement(value) {


    console.log(value)
    switch (value.currentTarget.dataset.state) {
      case '0':
        wx.navigateTo({
          url: '../agreement/agreement'
        })
        break;
      case '1':

        wx.navigateTo({
          url: '../rules_for_members/rules_for_members'
        })
        break;
    }


  },
 

  cardButtonClick(value) {
    console.log("cardButtonClick=", value)
    wx.navigateTo({
      url: '../membership-card-details/membership-card-details?state=base&brand=' + value.detail.currentTarget.dataset.brand + "&relationBrand=" + value.currentTarget.dataset.relationbrand
    })
  },
  setLocalCache() {
    var that = this

    var brand = {
      MLFS: {}
    }
    var userModel = {}
    wx.getStorage({
      key: 'userModel',
      success: function(res) {
        //   console.log("获取赠品模型成功", res)
        userModel = res.data
        brand = res.data.brand


        switch (app.data.activityMerchantCode) {
          case "MLFS.QAD":

            brand.MLFS.QAD.isVIP = true
            brand.MLFS.QAD.brandCode = app.data.activityMerchantCode
            brand.MLFS.QAD.isGiftSelected = false
            brand.MLFS.QAD.giftInfo = {
              addressOfReceiver: {}
            }
            brand.MLFS.QAD.cardInfo = {}

            break;
          case "MLFS.YBK":


            brand.MLFS.YBK.isVIP = true
            brand.MLFS.YBK.brandCode = app.data.activityMerchantCode
            brand.MLFS.YBK.isGiftSelected = false
            brand.MLFS.YBK.giftInfo = {
              addressOfReceiver: {}
            }
            brand.MLFS.YBK.cardInfo = {}


            break;
        }

      },
      fail(res) {
        userModel.cacheVersion = app.data.cacheVersion

        switch (app.data.activityMerchantCode) {
          case "MLFS.QAD":
            brand.MLFS.QAD = {
              role: "consumer",
              isVIP: true,
              brandCode: app.data.activityMerchantCode,
              isGiftSelected: false,
              giftInfo: {
                addressOfReceiver: {}
              },
              cardInfo: {}
            }
            break;
          case "MLFS.YBK":
            brand.MLFS.YBK = {
              role: "consumer",
              isVIP: true,
              brandCode: app.data.activityMerchantCode,
              isGiftSelected: false,
              giftInfo: {
                addressOfReceiver: {}
              },
              cardInfo: {}
            }

            break;
        }

      },
      complete(res) {

        //  console.log('目前brand=', brand)


        if (!brand.GJNXFXHHJLB) {
          brand.GJNXFXHHJLB = {}

        }
        if (!brand.GJNXFXHHJLB.HHJLB) {
          brand.GJNXFXHHJLB.HHJLB = []

        }

        //此处代码用于确保不会重复添加航海活动的数据
        let isRepeat = false
        for (let i = 0; i < brand.GJNXFXHHJLB.HHJLB.length; i++) {

          if (brand.GJNXFXHHJLB.HHJLB[i].relationBrand == app.data.activityMerchantCode) {
            //     console.error("航海活动有重复数据，则不再增加新数据")
            isRepeat = true
          }

        }

        if (isRepeat != true) {
          brand.GJNXFXHHJLB.HHJLB.push({
            isVIP: true,
            isAlreadyPurchased: false,
            relationBrand: app.data.activityMerchantCode,
            cardInfo: {

            }
          })
        }


        userModel.brand = brand
        wx.setStorageSync('userModel', userModel);
        console.log('userModel=', userModel)
        wx.redirectTo({
          url: 'complete?brand=' + that.data.brandUpperCase
        })

      }
    })



  },
  pay(signedOrderMessage) {
    
  }

});