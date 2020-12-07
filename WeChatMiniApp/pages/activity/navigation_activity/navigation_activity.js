// pages/activity/navigation_activity/navigation_activity.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: app.data.skin,

    postersSrc: "",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    if (options.brand) {

      switch (options.brand) {
        case "MLFS.QAD":
          that.setData({
            brand: options.brand,
            postersSrc: "https://pic.imgdb.cn/item/5e96d06fc2a9a83be5a1cf41.jpg"
          })
          break;
        case "MLFS.YBK":
          that.setData({
            brand: options.brand,
            postersSrc: "https://pic.imgdb.cn/item/5e96d06fc2a9a83be5a1cf45.jpg"
          })
          break;
        case "LVI.LVI":
          that.setData({
            brand: options.brand,
            postersSrc: "https://pic.imgdb.cn/item/5e96e088c2a9a83be5ae8b6c.jpg"
          })
          break;
      }
    }





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
    wx.getStorage({
      key: 'userModel',
      success: function(res) {
        console.log("获取赠品模型成功", res)


        if (res.data.brand.GJNXFXHHJLB) {

          if (res.data.brand.GJNXFXHHJLB.HHJLB) {

            for (let i = 0; i < res.data.brand.GJNXFXHHJLB.HHJLB.length; i++) {
              if (that.data.brand == res.data.brand.GJNXFXHHJLB.HHJLB[i].relationBrand) {
                that.setData({
                  isAlreadyPurchased: res.data.brand.GJNXFXHHJLB.HHJLB[i].isAlreadyPurchased
                })

              }


            }





          }
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },
  radioChange(value) {
    console.log('radioChange=', value)

  },
  choosePackage(value) {
    console.log(value)
    var that = this



    switch (value.currentTarget.dataset.package) {
      case "single":
        that.setData({
          activityPackage: 0
        })
        break;

      case "double":
        that.setData({
          activityPackage: 1
        })
        break;
    }

  },
  getPhoneNumber(value) {
    console.log(value)
  },

  intoPay(value) {
   let that=this

    wx.navigateTo({
      url: 'choose_commodity?brand='+that.data.brand,
    })

  },
  viewDetails() {
    let that = this
    wx.navigateTo({
      url: 'successful_payment?brand=' + that.data.brand,
    })

  },
  contactSeaNavigationCustomerService() {

    wx.showActionSheet({
      itemList: ['拨打电话', '扫码进群'],
      success(res) {
        console.log("showActionSheet success", res)
        switch (res.tapIndex) {
          case 0:
            wx.makePhoneCall({
              phoneNumber: '18101070512'
            })
            break;
          case 1:
            wx.navigateTo({
              url: '../../show-qrcode/show-qrcode',
            })

            break;
        }

      },
      fail(res) {
        console.log("showActionSheet fail", res)
      }
    })
  }
})