// pages/choice_of_gift/gift_detail/gift_detail.js
const app = getApp()

var getRGB = require('../../../../utils/get-rgb.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: app.data.skin,
    // 产品图片轮播
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,


    isNeedPreview: false,
    previewSrc: '',
    permission: 'readOnly'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    console.log('gift_detail.onLoad.options=', options)

    var that = this;

    that.setProductData(options.id)
    if (options.permission) {
      that.setData({
        permission: options.permission
      })
      if (options.permission == "readOnly") {
        ///重要   
        wx.setNavigationBarTitle({
          title: '赠品浏览'
        })
      }



    } else {

    }

  },
  onReady: function (options) {
   var that=this
    const eventChannel = this.getOpenerEventChannel()
  
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('productData', function (data) {
      console.log("gift_detail界面接收到了productData",data)

      if (that.data.productData.id == data.id){
        that.setData({
          productData: data
        })
      }


    })


  },


  setProductData(value) {
    var that = this

    switch (value) {
      case "6317+3982":
        that.setData({
          background: [
            ["https://pic.downk.cc/item/5e82d8b5504f4bcb04ee5b8b.jpg", "https://pic.downk.cc/item/5e82d8b5504f4bcb04ee5b89.jpg"],
            ["https://pic.downk.cc/item/5e82dc5c504f4bcb04f130ae.jpg","https://pic.downk.cc/item/5e82dc5c504f4bcb04f130b1.jpg"]
          ],
          // Number
          productData: {
            id: "6317+3982",
            name: "6317+3982",
            productContent: [{
              id: 0,
              name: "居家服",
              selectColor: "",
              colorList: ['黑色', '白色', '浅杏', '卡其', '卡其绿', '浅灰', '咖啡', '豆紫', '虾红', '暗红', '灰兰'],
              colorRGBList: getRGB.getRGB(['黑色', '白色', '浅杏', '卡其', '卡其绿', '浅灰', '咖啡', '豆紫', '虾红', '暗红', '灰兰'])
            }, {
              id: 1,
              name: "居家裤",
              selectColor: "",
              colorList: ['黑色', '咖啡', '卡其绿', '豆紫', '暗红', '灰兰', '卡其', '浅灰', '虾红'],
              colorRGBList: getRGB.getRGB(['黑色', '咖啡', '卡其绿', '豆紫', '暗红', '灰兰', '卡其', '浅灰', '虾红'])
            }]
          },
          quantityDescription: "一套",
          proposalWeight: '100～135 斤',
          giftName: "女式夏季短袖居家+女式加大扩腿七分裤",
          giftDescribe: "女夏新罗纹棉无痕半袖短袖纯色打底舒适百搭居家服+女式夏季螺纹棉加肥加大阔腿裤居家裤"
        });
        break;
      case "3831+3833":
        that.setData({
          background: [
            ["https://pic.downk.cc/item/5e82c3fb504f4bcb04df7485.jpg"],
            ["https://pic.downk.cc/item/5e82c3fb504f4bcb04df7487.jpg"]
          ],
          productData: {
            id: "3831+3833",
            name: "3831+3833",
            productContent: [{
              id: 0,
              name: "居家服",
              selectColor: "",
              colorList: ['黑色', '白色', '杏', '浅粉', '浅银灰'],
              colorRGBList: getRGB.getRGB(['黑色', '白色', '杏', '浅粉', '浅银灰'])
            }, {
              id: 1,
              name: "居家裤",
              selectColor: "",
              colorList: ['黑色', '杏', '浅粉', '浅银灰', '花灰'],
              colorRGBList: getRGB.getRGB(['黑色', '杏', '浅粉', '浅银灰', '花灰'])
            }]
          },
          quantityDescription: "一套",
          proposalWeight: '100～135 斤',
          giftName: "女式夏季加大背心居家服+女式夏季9分裤阔腿裤",
          giftDescribe: "女夏宽罗纹棉坎肩纯色背心打底居家百搭小圆领舒适居家服+女式夏季款螺纹棉大阔腿裤带口袋居家裤"
        });
        break;
      case '3996':
        that.setData({
          background: [
            ["https://pic.downk.cc/item/5e82c5ff504f4bcb04e1057b.jpg"],
            ["https://pic.downk.cc/item/5e82c5ff504f4bcb04e10580.jpg"],
            ["https://pic.downk.cc/item/5e82c5ff504f4bcb04e10582.jpg"]
          ],
          productData: {
            id: "3996",
            name: "3996",
            productContent: [{
              id: 0,
              name: "居家裙",
              selectColor: "",
              colorList: ['黑色', '白色', '浅杏', '卡其', '卡其绿', '浅灰', '咖啡', '豆紫', '虾红', '暗红', '灰兰'],
              colorRGBList: getRGB.getRGB(['黑色', '白色', '浅杏', '卡其', '卡其绿', '浅灰', '咖啡', '豆紫', '虾红', '暗红', '灰兰'])
            }]
          },
          quantityDescription: "一件",
          proposalWeight: '100～135 斤',
          giftName: "女式美背短袖加大居家裙",
          giftDescribe: "女夏新款螺纹棉纯色短袖背心吊带美背女舒适修身内衣时尚居家睡裙"
        });
        break;
      case "6339":
        that.setData({
          background: [
            ["https://pic.downk.cc/item/5e82c635504f4bcb04e12b6b.jpg"],
            ["https://pic.imgdb.cn/item/5e82c635504f4bcb04e12b67.jpg"],
            ["https://pic.downk.cc/item/5e82c635504f4bcb04e12b69.jpg"]
          ],

          productData: {
            id: "6339",
            name: "6339",
            productContent: [{
              id: 0,
              name: "居家裙",
              selectColor: "",
              colorList: ['黑色', '白色', '暗红', '咖啡', '卡其绿', '豆紫', '虾红'],
              colorRGBList: getRGB.getRGB(['黑色', '白色', '暗红', '咖啡', '卡其绿', '豆紫', '虾红'])
            }]
          },
          quantityDescription: "一件",
          proposalWeight: '100～135 斤',
          giftName: "女式夏季吊带蕾丝居家裙",
          giftDescribe: "女夏新罗纹棉吊带蕾丝舒适百搭居家睡裙"
        });
        break;
      case '3995':
        that.setData({
          background: [
            ["https://pic.downk.cc/item/5e82c663504f4bcb04e148fb.jpg"],
            ["https://pic.downk.cc/item/5e82c663504f4bcb04e148f6.jpg"]
          ],

          productData: {
            id: "3995",
            name: "3995",
            productContent: [{
              id: 0,
              name: "居家裙",
              selectColor: "",
              colorList: ['黑色', '深灰', '蓝色', '深咖'],
              colorRGBList: getRGB.getRGB(['黑色', '深灰', '蓝色', '深咖'])
            }]
          },
          quantityDescription: "一件",
          proposalWeight: '100～135 斤',
          giftName: "女式夏季经典短袖居家裙",
          giftDescribe: "女夏经典罗纹棉人棉基础短袖纯色背心打底居家睡裙"
        });
        break;
      case "3936+6309":
        that.setData({
          background: [
            ["https://pic.downk.cc/item/5e82e120504f4bcb04f4ca4b.jpg","https://pic.downk.cc/item/5e82e286504f4bcb04f5d0d6.jpg"],
            ["https://pic.downk.cc/item/5e82e120504f4bcb04f4ca4e.jpg","https://pic.downk.cc/item/5e82e286504f4bcb04f5d0d9.jpg"]
          ],
          productData: {
            id: "3936+6309",
            name: "3936+6309",
            productContent: [{
              id: 0,
              name: "居家服",
              selectColor: "",
              colorList: ['黑色', '灰兰', '豆紫', '暗红', '咖啡', '花灰', '白色'],
              colorRGBList: getRGB.getRGB(['黑色', '灰兰', '豆紫', '暗红', '咖啡', '花灰', '白色'])
            }, {
              id: 1,
              name: "居家裤",
              selectColor: "",
              colorList: ['黑色', '杏', '卡其', '灰兰', '咖啡', '暗红', '豆紫', '浅灰'],
              colorRGBList: getRGB.getRGB(['黑色', '杏', '卡其', '灰兰', '咖啡', '暗红', '豆紫', '浅灰'])
            }]
          },
          quantityDescription: "一套",
          proposalWeight: '100～135 斤',
          giftName: "女式圆领坎肩打底衫居家服+女式花苞短裤",
          giftDescribe: "女夏新罗纹棉无痕坎肩小纽扣T恤短袖纯色打底舒适百搭+女式螺纹棉花苞居家睡裤"
        });
        break;
    }
  },


  clickChoose(e) {
    console.log('按钮点击内容', e)
    var that = this;

    switch (e.currentTarget.dataset.style) {
      case "color":

        if (that.data.permission == 'edit') {
          if (that.data.productData.productContent[e.currentTarget.dataset.productcontentindex].selectColor == e.currentTarget.dataset.color) {
            that.setData({
              ['productData.productContent[' + e.currentTarget.dataset.productcontentindex + '].selectColor']: "",
            })
          } else {
            that.setData({
              ['productData.productContent[' + e.currentTarget.dataset.productcontentindex + '].selectColor']: e.currentTarget.dataset.color,
            })
          }
        }
        break;
    }




  },
  addShopCart: function(e) { //添加到购物车
    var that = this
    for (let i = 0; i < that.data.productData.productContent.length; i++) {
      if (that.data.productData.productContent[i].selectColor == "") {
        wx: wx.showToast({
          title: '请选择' + that.data.productData.productContent[i].name + '颜色',
          icon: 'none',
          duration: 2000,

        })

        that.setData({
          intoView: 'productContent' + that.data.productData.productContent[i].id
        })

        return
      }

    }



    let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
    let prevPage = pages[pages.length - 2];


    if (prevPage.route == "pages/choice_of_gift/choice_of_gift") {


      prevPage.setData({
        selectId: that.data.productData.id,
        productData: that.data.productData
      })
      console.log('prevPage', prevPage)
      wx.navigateBack({
        delta: 1 // 返回上一级页面。
      })
    } else if (prevPage.route == "pages/choice_of_gift/confirmation_of_gifts/confirmation_of_gifts") {

    }
  },
  cancelPreview() {
    var that = this
    console.log(that)
    that.setData({
      isNeedPreview: false
    })

  },
  previewImage(value) {
    console.log(value)

    this.setData({
      previewSrc: value.currentTarget.dataset.src,
      isNeedPreview: true
    })

  },
  cancelClick() {

    wx.navigateBack({
      delta: 1
    })

  }

})