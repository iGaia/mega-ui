var app = getApp();

const cardList = require("../../../utils/cardList.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: app.data.skin,
    cardBrand:"",
    state:'base'
  },
  test(value){
    console.log("brand", this.data.brand)
    console.log("relationBrand", this.data.relationBrand)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log("卡片详情界面接收到的参数", options)
    if(options.state){
      that.setData({
        state:options.state
      })
    }

  

    switch (options.brand) {
      case "MLFS.QAD":

        wx.setNavigationBarTitle({
          title: '俏安朵VIP会员卡详情'
        })
        break;

      case "MLFS.YBK":

        wx.setNavigationBarTitle({
          title: '优布客VIP会员卡详情'
        })
        break;

      case "GJNXFXHHJLB.HHJLB":

        wx.setNavigationBarTitle({
          title: '航海俱乐部优惠卡详情'
        })
        break;

    }

   

    if (that.data.state =="query"){

      cardList.getCardList(that, false)

      that.setData({
        brand: options.brand,
        relationBrand: options.relationBrand


      })

      console.log("brand", that.data.brand)
      console.log("relationBrand", that.data.relationBrand)
    }else{

      switch (options.brand) {
        case "MLFS.QAD":
          that.setData({
            brand: "MLFS.QAD",
            cardName: "俏安朵VIP会员卡",
            cardBackgroundColor: "tCBGCoral"
          })
          break;

        case "MLFS.YBK":
          that.setData({
            brand: "MLFS.YBK",
            cardName: "优布客VIP会员卡",
            cardBackgroundColor: "tCBGCoral"
          })
          break;

        case "GJNXFXHHJLB.HHJLB":
       
          console.log("options.relationBrand=", options.relationBrand)
      

          that.setData({
            brand: "GJNXFXHHJLB.HHJLB",
            cardName: "航海俱乐部优惠",
            cardBackgroundColor: "tCBGBlue"
          })

          break;

      }


    }


  

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  back(){
    wx.navigateBack({
      delta: 1
    })
  }
})