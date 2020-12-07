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
    console.log("options=", options);

    var that = this
    if (options.brand) {
      that.setData({
        brand: options.brand
      })
    }

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

    var that = this;

    var commodityID = ""
    var color = ""
    wx.getStorage({
      key: 'userModel',
      success: function(res) {
        console.log("获取赠品模型成功", res)



        switch (that.data.brand) {
          case "MLFS.QAD":

            commodityID = res.data.brand.MLFS.QAD.giftInfo.commodityID
            color = res.data.brand.MLFS.QAD.giftInfo.color
            that.setData({
              remark: res.data.brand.MLFS.QAD.giftInfo.remark,
              productData: res.data.brand.MLFS.QAD.giftInfo.productData,
              address: res.data.brand.MLFS.QAD.giftInfo.addressOfReceiver

            })


            break;

          case "MLFS.YBK":

            commodityID = res.data.brand.MLFS.YBK.giftInfo.commodityID
            color = res.data.brand.MLFS.YBK.giftInfo.color
            console.log("res.data.brand.MLFS.YBK.giftInfo=", res.data.brand.MLFS.YBK.giftInfo)
            console.log("res.data.brand.MLFS.YBK.giftInfo.productData=", res.data.brand.MLFS.YBK.giftInfo.productData)

            that.setData({
              remark: res.data.brand.MLFS.YBK.giftInfo.remark,
              productData: res.data.brand.MLFS.YBK.giftInfo.productData,
              address: res.data.brand.MLFS.YBK.giftInfo.addressOfReceiver
            })


            break;

        }

     
      },
      complete(res) {

        for (let i = 0; i < that.data.productList.length; i++) {

          if (commodityID == that.data.productList[i].id) {
            that.setData({
              itemData: that.data.productList[i]
            })
            that.setData({
              'itemData.color': color
            })

          }

        }

      }
    })
  },



  remarkInput(value) {

    console.log(value)
    this.setData({
      remark: value.detail.value

    })
  }
})