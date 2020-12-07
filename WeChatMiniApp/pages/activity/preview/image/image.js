// pages/preview/image/image.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: app.data.skin,
    currentTab:0,
    longImage: [
      "https://pic.downk.cc/item/5e5cad5798271cb2b8a0a38c.jpg",
      "https://pic.downk.cc/item/5e5cad5798271cb2b8a0a389.jpg",
 
      "https://pic.downk.cc/item/5e5cad5798271cb2b8a0a384.jpg",
      "https://pic.downk.cc/item/5e5cad5798271cb2b8a0a381.jpg",
      "https://pic.downk.cc/item/5e5cad5798271cb2b8a0a37d.jpg",
      "https://pic.downk.cc/item/5e5cad5f98271cb2b8a0a60c.jpg",
      "https://pic.downk.cc/item/5e5cad5f98271cb2b8a0a607.jpg",
      "https://pic.downk.cc/item/5e5cad5f98271cb2b8a0a601.jpg",
      "https://pic.downk.cc/item/5e5cad5f98271cb2b8a0a5fc.jpg",
      "https://pic.downk.cc/item/5e5cad5f98271cb2b8a0a5f9.jpg",
      "https://pic.downk.cc/item/5e5cad6d98271cb2b8a0acc7.jpg",
      "https://pic.downk.cc/item/5e5cad6d98271cb2b8a0acbf.jpg",
      "https://pic.downk.cc/item/5e5cad6d98271cb2b8a0acb6.jpg",
      "https://pic.downk.cc/item/5e5cad6d98271cb2b8a0acb0.jpg",
      "https://pic.downk.cc/item/5e5cad6d98271cb2b8a0aca9.jpg",
      "https://pic.downk.cc/item/5e5cad7c98271cb2b8a0b122.jpg",
      "https://pic.downk.cc/item/5e5cad7c98271cb2b8a0b119.jpg"
     
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  swiperTab: function (e) {
    var that = this;
    console.log("swiperTab e=",e)
    if (e.detail.source == "touch"){
      that.setData({
        currentTab: e.detail.current
      });

    }
  },
})