const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: app.data.skin,
    selectBrand: "",
    brandList: [],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

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
        console.log("获取userModel成功", res)
        var userModel = res.data
        var brandList = []

        if (userModel.brand.MLFS.QAD) {
          if (userModel.brand.MLFS.QAD.isVIP) {
            if (userModel.brand.MLFS.QAD.isVIP == true) {
              brandList.push({
                brand: userModel.brand.MLFS.QAD.brandCode,
                image: "/image/qadLogo.jpg",
                title: "俏安朵赠品",
                isGiftSelected: userModel.brand.MLFS.QAD.isGiftSelected
              })
            }
          }
        }


        if (userModel.brand.MLFS.YBK) {
          if (userModel.brand.MLFS.YBK.isVIP) {
            if (userModel.brand.MLFS.YBK.isVIP == true) {
              brandList.push({
                brand: userModel.brand.MLFS.YBK.brandCode,
                image: "/image/ybkLogo.jpg",
                title: "优布客赠品",
                isGiftSelected: userModel.brand.MLFS.YBK.isGiftSelected
              })
            }
          }
        }
        that.setData({
          brandList: brandList
        })

      }
    })



  },
  selectBrand(value) {


    console.log(value)
    var that = this
    console.log('that.data.brandList=', that.data.brandList)
    for (let i = 0; i < that.data.brandList.length; i++) {
      if (that.data.brandList[i].brand == value.currentTarget.dataset.brand) {

        if (that.data.brandList[i].isGiftSelected == true) {
          wx.navigateTo({
            url: '../view_gift/view_gift?brand=' + that.data.brandList[i].brand,
          })


        } else if (that.data.brandList[i].isGiftSelected == false) {

          wx.navigateTo({
            url: '../choice_of_gift/choice_of_gift?brand=' + that.data.brandList[i].brand,
          })


        } else {
          console.error("逻辑错误")
        }


      }
    }









  },
  copyInvitationCode() {

  }




})