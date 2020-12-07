// pages/order/details/details.js
var util = require('../../../../utils/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: app.data.skin,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this

  
    if (options.localCreatTimeStamp){



      wx.getStorage({
        key: 'orderStorage',
        success(res) {
          console.log(res.data)
          let orderStorage = res.data
          for (let i = 0; i < orderStorage.length; i++) {
            if (orderStorage[i].localCreatTimeStamp == options.localCreatTimeStamp) {

              
            
              that.setData({
                order: orderStorage[i],
                localCreatTimeStamp: orderStorage[i].localCreatTimeStamp,
                orderTime: util.formatTime(new Date(orderStorage[i].localCreatTimeStamp)),
              })
              console.log("order=", orderStorage[i])
            }

          }
        },fail(res){
          wx.navigateBack({

          })
        }
      })


    }else{
      wx.navigateBack({
        
      })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})