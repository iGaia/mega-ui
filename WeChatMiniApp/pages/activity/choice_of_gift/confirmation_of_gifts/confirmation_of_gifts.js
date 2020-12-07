const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    skin: app.data.skin,
    productList: [{
      id: "6317+3982",
      type: "productDetails",
      image: "https://pic.downk.cc/item/5e82e43d504f4bcb04f700ef.png",
      title: "女式夏季短袖居家",
      subtitle: "附赠女式加大扩腿七分裤"
    },
    {
      id: "3831+3833",
      type: "productDetails",
      image: "https://pic.downk.cc/item/5e82c7cb504f4bcb04e22f70.png",
      title: "女式夏季加大背心居家服",
      subtitle: "附赠女式夏季9分裤阔腿裤"
    },
    {
      id: "3996",
      type: "productDetails",
      image: "https://pic.downk.cc/item/5e82caeb504f4bcb04e468ea.png",
      title: "女式美背短袖加大居家裙",
      subtitle: "螺纹棉纯色短袖背心吊带美背女舒适修身内衣时尚居家睡裙"

    },
    {
      id: "6339",
      type: "productDetails",
      image: "https://pic.downk.cc/item/5e82cb38504f4bcb04e4a1e8.png",
      title: "女式夏季吊带蕾丝居家裙",
      subtitle: "新罗纹棉吊带蕾丝舒适百搭居家睡裙"
    }, {
      id: "3995",
      type: "productDetails",
      image: "https://pic.downk.cc/item/5e82cbd4504f4bcb04e51ea9.png",
      title: "女式夏季经典短袖居家裙",
      subtitle: "罗纹棉人棉基础短袖纯色背心打底居家睡裙"
    }, {
      id: "3936+6309",
      type: "productDetails",
      image: "https://pic.downk.cc/item/5e82e481504f4bcb04f74163.png",
      title: "女式夏季吊带蕾丝居家裙 ",
      subtitle: "附赠女式花苞短裤"
    }
    ],

    itemData: {},
    remark: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that=this
    console.log("onLoad options=", options);
    if (options.brand) {
      that.setData({
        brand: options.brand
      })
    }

    
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('productData', function (data) {
      console.log(data)
      that.setData({
        productData: data
      })
    })

  },
  onReady: function (options) {

    var that = this
    for (let i = 0; i < that.data.productList.length; i++) {
      if (that.data.productList[i].id == that.data.productData.id) {
        that.setData({
          itemData: that.data.productList[i],
        })
      
      }
    }
    console.log("加载");
    var addressList = wx.getStorageSync("addressList");
    if (addressList.length == 0) {
      wx.navigateTo({
        url: '../../address/address-detail/address-detail'
      })

    }


  },



  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function(options) {

    var that = this;
    var addressList = wx.getStorageSync("addressList");

    for (var i = 0; i < addressList.length; i++) {
      if (addressList[i].is_default == true) {

        console.log("addressList[i].region=", addressList[i].region)
        that.setData({
          address: addressList[i]
        })
        console.log('赠品信息界面,addressList[i]=' + addressList[i])
      }
    }

    that.setData({
      addemt: addressList.length
    })
    console.log("addressList.length", addressList.length)

  },



  confirmation() {

    var that = this
    

    wx.getStorage({
      key: 'userModel',
      success: function (res) {
        console.log("获取赠品模型成功", res)
        var userModel = res.data
        switch (that.data.brand) {

          case "MLFS.QAD":
            userModel.brand.MLFS.QAD.isGiftSelected = true
            userModel.brand.MLFS.QAD.giftInfo.addressOfReceiver = that.data.address
            userModel.brand.MLFS.QAD.giftInfo.remark = that.data.remark
            userModel.brand.MLFS.QAD.giftInfo.productData = that.data.productData
            userModel.brand.MLFS.QAD.giftInfo.commodityID = that.data.itemData.id
            break;

          case "MLFS.YBK":
            userModel.brand.MLFS.YBK.isGiftSelected = true
            userModel.brand.MLFS.YBK.giftInfo.addressOfReceiver = that.data.address
            userModel.brand.MLFS.YBK.giftInfo.remark = that.data.remark
            userModel.brand.MLFS.YBK.giftInfo.productData = that.data.productData
            userModel.brand.MLFS.YBK.giftInfo.commodityID = that.data.itemData.id
            break;
        }

      
        wx.setStorageSync('userModel', userModel);
        console.log("选择赠品成功后的用户信息", userModel)
        app.uploadUserCache(userModel)
        // that.setData({
        //   userModel: userModel
        // })
      }
    })


   


 
    wx.navigateBack({

    })
    wx.redirectTo({
      url: '../../view_gift/view_gift?brand='+that.data.brand
    })

  },
  remarkInput(value) {
    console.log(value)
    this.setData({
      remark: value.detail.value
    })
  },
  viewGiftDetail() {

    console.log('查看商品详情')
    var that = this
    wx.navigateTo({
      url: '../gift_detail/gift_detail?id=' + that.data.itemData.id +  '&permission=readOnly',
      
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        if (that.data.productData.id) {
          res.eventChannel.emit('productData', that.data.productData)
        }
      }
    })
  },
  toSetAddress(value){
    console.log(value)

   
    wx.navigateTo({
      url: value.currentTarget.dataset.type == 'edit' ? "../../address/address-list/address-list" :"../../address/address-detail/address-detail"     ,
    })


  }

})