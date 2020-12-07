// pages/choice_of_gift/choice_of_gift.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: app.data.skin,

    selectId: -1,

    productData: {},
    itemData: {
      id: ""
    },
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
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    console.log("选择赠品界面onLoad参数=", options)

    if (options.brand) {
      that.setData({
        brand: options.brand
      })
      wx.setNavigationBarTitle({
        title: '选择赠品'
      })
    }

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function(options) {
    console.log("赠品列表界面", this.data)

  },
  next() {
    var that = this
    if (!that.data.productData.id) {
      wx.showToast({
        title: '请选择赠品',
        icon: 'none',
        duration: 2000
      })
      return
    }


    if (that.data.brand) {


      wx.navigateTo({
        url: 'confirmation_of_gifts/confirmation_of_gifts?brand=' + that.data.brand,

        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('productData', that.data.productData)
        }
      })

    }


  },


  viewDetails: function(e) {
    var that = this

    console.log("that.data.productData=", that.data.productData)

    if (this.data.brand) {
      wx.navigateTo({
        url: 'gift_detail/gift_detail?id=' + e.currentTarget.dataset.itemid + '&permission=edit',
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据

          if (that.data.productData.id) {
            res.eventChannel.emit('productData', that.data.productData)
          }


        }
      })
    } else {
      wx.navigateTo({
        url: 'gift_detail/gift_detail?id=' + e.currentTarget.dataset.itemid + '&permission=readOnly'
      })
    }




  },




})