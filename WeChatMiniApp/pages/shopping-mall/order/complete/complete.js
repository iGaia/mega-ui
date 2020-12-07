// pages/order/complete.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: app.data.skin,
    brandUpperCase: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this

    console.log("options=",options)
    that.setData({
      localCreatTimeStamp: options.localCreatTimeStamp,
    
    })



    this.setData({
      productList: [{
          id: "6317+3982",
          type: "productDetails",
          image: "https://pic.downk.cc/item/5e82e43d504f4bcb04f700ef.png",
          title: "女式夏季短袖居家",
          subtitle: "附赠女式加大扩腿七分裤",
          price: 0
        },
        {
          id: "3831+3833",
          type: "productDetails",
          image: "https://pic.downk.cc/item/5e82c7cb504f4bcb04e22f70.png",
          title: "女式夏季加大背心居家服",
          subtitle: "附赠女式夏季9分裤阔腿裤",
          price: 0
        },
        {
          id: "3996",
          type: "productDetails",
          image: "https://pic.downk.cc/item/5e82caeb504f4bcb04e468ea.png",
          title: "女式美背短袖加大居家裙",
          subtitle: "螺纹棉纯色短袖背心吊带美背女舒适修身内衣时尚居家睡裙",
          price: 0

        },
        {
          id: "6339",
          type: "productDetails",
          image: "https://pic.downk.cc/item/5e82cb38504f4bcb04e4a1e8.png",
          title: "女式夏季吊带蕾丝居家裙",
          subtitle: "新罗纹棉吊带蕾丝舒适百搭居家睡裙",
          price: 0
        }, {
          id: "3995",
          type: "productDetails",
          image: "https://pic.downk.cc/item/5e82cbd4504f4bcb04e51ea9.png",
          title: "女式夏季经典短袖居家裙",
          subtitle: "罗纹棉人棉基础短袖纯色背心打底居家睡裙",
          price: 0
        }, {
          id: "3936+6309",
          type: "productDetails",
          image: "https://pic.downk.cc/item/5e82e481504f4bcb04f74163.png",
          title: "女式夏季吊带蕾丝居家裙 ",
          subtitle: "附赠女式花苞短裤",
          price: 0
        }
      ]
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

  toChoose(value) {
    
    var url = ""
    console.log(value.currentTarget.dataset.id)

    switch (value.currentTarget.dataset.id) {
      case 0:
        wx.switchTab({
          url: '/pages/home/home'
        })
        break;
      case 1:
        var that = this
        wx.navigateTo({
          url: '../details/details?localCreatTimeStamp=' + that.data.localCreatTimeStamp,
         
        })
        break;
    }


  },
  toDetails(value){
    console.log("value", value.currentTarget.dataset.id)

    wx.redirectTo({
      url: '../../goods/details/basics?id=' + value.currentTarget.dataset.id,
    })
  }
})