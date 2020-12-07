// pages/distribution/level/level.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: app.data.skin,
    statusCash: '79',
    statusLevel: '中级',
    userRole: '【 普通分销员 】',
    statusInfo: [
      { imageURL: '', ratioInvite: 7, ratioTitle: '推广佣金比' },
      { imageURL: '', ratioInvite: 10, ratioTitle: '邀请佣金比' }
    ],
    ruleList: [
      { imageURL: '', text1: '规则介绍', text2: '成为分销员后即是该等级' },
      { imageURL: '', text1: '权益介绍', text2: '佣金比例是5%，邀请佣金比例是10%' },
      // { imageURL: '', text1: '规则介绍', text2: '成为分销员后即是该等级' },
      // { imageURL: '', text1: '权益介绍', text2: '佣金比例是5%，邀请佣金比例是10%' },
      // { imageURL: '', text1: '规则介绍', text2: '成为分销员后即是该等级' },
      // { imageURL: '', text1: '权益介绍', text2: '佣金比例是5%，邀请佣金比例是10%' }
    ],
    stautsLevel: "中级"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    this.getLevelInfo()


  },

  getLevelInfo() {


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