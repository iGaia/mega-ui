
var app = getApp()
Page({
  data: {
    skin: app.data.skin,
    address: wx.getStorageSync("addressList"),
    radioindex: '',
    pro_id: 0,
    num: 2,
    cartId: 1
  },
  onLoad: function(options) {
   
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
  
  },

  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    console.log("onShow");
    var that = this;
    that.setData({
      address: wx.getStorageSync("addressList"),

    })
    console.log("addressList", wx.getStorageSync("addressList"));
  },
  setDefault: function(e) {
    var that = this;
   // console.log(e);
    var addressList = wx.getStorageSync("addressList");

    var addrId = e.currentTarget.dataset.id;
    for (var i = 0; i < addressList.length; i++) {
    //  console.log(addressList[i]);
      if (addressList[i].id == addrId) {
        addressList[i].is_default = true;
      } else {
        addressList[i].is_default = false;
      }

    }
    that.setData({
      address: addressList,

    })
    wx.setStorageSync("addressList", addressList);




  },
  delAddress: function(e) {
    var that = this;
    var addrId = e.currentTarget.dataset.id;
    wx.showModal({
      title: '提示',
      content: '你确认移除吗',
      success: function(res) {
       
        if (res.confirm) {
          var addressList = wx.getStorageSync("addressList");

          var addrId = e.currentTarget.dataset.id;
          for (var i = 0; i < addressList.length; i++) {
           // console.log(addressList[i]);
            if (addressList[i].id == addrId) {
              addressList.splice(i, 1);
            }
          }
          that.setData({
            address: addressList,
          })
          wx.setStorageSync("addressList", addressList);

        }
      
      }
    });

  },
  
  editAddress:function(e){
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '../address?type=edit&id=' + e.currentTarget.dataset.id,
    });
  }


})