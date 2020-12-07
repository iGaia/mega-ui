// pages/goods/search/search.js

var app = getApp()
Page({
  data: {
    skin: app.data.skin,
    keywrod: '',
   
  },
  //事件处理函数
  closeSearch: function () {
    wx.navigateBack()
  },
  clearKeyword: function () {
    this.setData({
      keyword: ''
    
    });
  },
  onLoad: function () {


  },

  onKeywordConfirm(event) {
    this.searchGoods(event.detail.value);
  },

  searchGoods(value) {
    
  },

 
})