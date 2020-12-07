// pages/classify/filter-query.js

var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: app.data.skin,
    page: 1,
    limit: 10,
    current: 1,
    id: '',
    searchData: {
      where: {},
      limit: 10,
      page: 1,
      order: {
        key: 'sort',
        sort: 'asc'
      }
    },
    searchKey: '请输入关键字搜索', //关键词
    screents: true,
    screentc: false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // console.log(" filter-query   options=", options)

    if (options.id) {
      this.setData({
        id: parseInt(options.id)
      });
    }
    // this.getCategoryInfo();
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
    this.setList()
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



  listGridChange() {
    var that = this
    if (this.data.current == 0) {
      console.log("listGridChange1")
      this.setData({
        current: 1
      })

    } else {
      console.log("listGridChange2")
      this.setData({
        current: 0
      })
    }
  },
  setList() {



    this.setData({
      specialSummary: [{
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


  clickToJump(value) {
    console.log("clickToJump value", value)
    // if (this.data.brand) {
    wx.navigateTo({
      url: '../goods/details/basics?id=' + value.currentTarget.dataset.itemid + '&permission=edit',
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        // console.log("value.currentTarget.dataset.item=", value.currentTarget.dataset.item)
        // if (value.currentTarget.dataset.item.id) {
        //   console.log("传递productData")
        //   res.eventChannel.emit('productData', value.currentTarget.dataset.item)
        // }
      }
    })
    // } else {
    //   wx.navigateTo({
    //     url: '../goods/details/basics?id=' + value.currentTarget.dataset.itemid + '&permission=readOnly'
    //   })
    // }

  },
  searchBarConfirmEvent(value) {
    console.log("use searchBarConfirmEvent= value", value)

    this.getSearchResult(value.detail.value.detail.value)
  },
  getSearchResult(value) {
   

    





  }
})