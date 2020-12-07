// pages/logistics/query-bill/query-bill.js

var utilMd5 = require('../../../../utils/md5.js');

var util = require('../../../../utils/util.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: app.data.skin,
    array: ['圆通速递', '百世快运'],
    servicesCompanyName:"",
    index: 0,
    code: ""
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
  bindInput(value){
  
    this.setData({
      code: value.detail.value
    })

    if (value.detail.value.substring(0, 2)=="YT"){
      this.setData({
        index: 0,
        servicesCompanyName: this.data.array[0]
      })
      return
    } 


  },
  bindPickerChange(value){

   this.setData({
     index: parseInt(value.detail.value),
     servicesCompanyName: this.data.array[parseInt(value.detail.value)]
   })
   

  //   if (parseInt(value.detail.value)==0){
  //    this.setData({
  //      code:"YT2052676440555"
  //    })
  //  }

  //   if (parseInt(value.detail.value) == 1) {
  //     this.setData({
  //       code: "18223409691"
  //     })
  //   }

  },

  query() {

  }
})