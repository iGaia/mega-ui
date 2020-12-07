// pages/distribution/accumulative-customer/accumulative-customer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      windowHeight: 0,
      currentTab: 0,
      bindUserNum: 17,
      unbindUserNum: 4,
      bindUserList: [
          { portraitImgURL: '', userName: '客户名称', remainDays: '6天', deal: '0.00', cash: '0.00' },
          { portraitImgURL: '', userName: '客户名称', remainDays: '6天', deal: '0.00', cash: '0.00' },
          { portraitImgURL: '', userName: '客户名称', remainDays: '6天', deal: '0.00', cash: '0.00' },
          { portraitImgURL: '', userName: '客户名称', remainDays: '6天', deal: '0.00', cash: '0.00' },
          { portraitImgURL: '', userName: '客户名称', remainDays: '6天', deal: '0.00', cash: '0.00' },
          { portraitImgURL: '', userName: '客户名称', remainDays: '6天', deal: '0.00', cash: '0.00' },
          { portraitImgURL: '', userName: '客户名称', remainDays: '6天', deal: '0.00', cash: '0.00' },
          { portraitImgURL: '', userName: '客户名称', remainDays: '6天', deal: '0.00', cash: '0.00' },
          { portraitImgURL: '', userName: '客户名称', remainDays: '6天', deal: '0.00', cash: '0.00' }
      ],
      unbindUserList: [
          { portraitImgURL: '', userName: '客户名称', remainDays: '6天', deal: '成交额: ￥0.00', cash: '佣金: 0.00' },
          { portraitImgURL: '', userName: '客户名称', remainDays: '6天', deal: '成交额: ￥0.00', cash: '佣金: 0.00' },
          { portraitImgURL: '', userName: '客户名称', remainDays: '6天', deal: '成交额: ￥0.00', cash: '佣金: 0.00' },
          { portraitImgURL: '', userName: '客户名称', remainDays: '6天', deal: '成交额: ￥0.00', cash: '佣金: 0.00' },
      ]
  },
  switchNav(e) {
      var index = e.target.dataset.current;
      this.setData({
          currentTab: index
      })
  },
  bindChange(e) {
      this.setData({
          currentTab: e.detail.current
      });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
      // get/set System Window Height
      var systemHeight = wx.getSystemInfoSync().windowHeight - 100 / 750 * wx.getSystemInfoSync().windowWidth;
      this.setData({
          windowHeight: 2 * systemHeight
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})