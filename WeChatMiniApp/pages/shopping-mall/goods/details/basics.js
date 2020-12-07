// pages/choice_of_gift/gift_detail/gift_detail.js
const app = getApp()

var getRGB = require('../../../../utils/get-rgb.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: app.data.skin,
    badgeCount: 0,
    isCollection: false,
    // 产品图片轮播
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    isNeedPreview: false,
    previewSrc: '',
    permission: 'readOnly',
    currentTab: 0,
    productImageIsScroll: false,
    pattern: {
      color: '#7A7E83',
      backgroundColor: '#fff',
      selectedColor: '#007AFF',
      buttonColor: "#FF7159"
    },
    content: [{
        iconPath: '/image/home.svg',
        selectedIconPath: '/image/home.svg',
        text: '首页',
        active: false,
        url: '/pages/shopping-mall/home/home'
      },
      {
        iconPath: '/image/my.svg',
        selectedIconPath: '/image/my.svg',
        text: '我的',
        active: false,
        url: '/pages/shopping-mall/my/my'
      }
    ],
    submitStatus: "pay",
    background: [
      ["https://pic.downk.cc/item/5e82e120504f4bcb04f4ca4b.jpg", "https://pic.downk.cc/item/5e82e286504f4bcb04f5d0d6.jpg"],
      ["https://pic.downk.cc/item/5e82e120504f4bcb04f4ca4e.jpg", "https://pic.downk.cc/item/5e82e286504f4bcb04f5d0d9.jpg"]
    ],
    showActionSheet: false,
    actionSheetGroups: [
            { text: '分享连接', value: 0,openType:"share" },
            { text: '发送到朋友圈', value: 1 }
        ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log('gift_detail.onLoad.options=', options)

    var that = this;

    //  that.setProductData(options.id)
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

    this.suspensionBall = this.selectComponent("#suspension-ball");
    this.suspensionBall.show();


    wx.getSetting({
      success: function (res) {
        console.log(res)
        //不存在相册授权
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success: function () {
              that.setData({
                canWrite: true
              })
            },
            fail: function (err) {
              that.setData({
                canWrite: false
              })
            }
          })
        } else {
          that.setData({
            canWrite: true
          });
        }
      }
    })

    that.setProductData("3996")

  },
  onReady: function (options) {
    var that = this

  },

  getGoodsInfo() {
   

    





  },


  setProductData(value) {
    var that = this

    switch (value) {
      case "6317+3982":
        that.setData({
          background: [
            ["https://pic.downk.cc/item/5e82d8b5504f4bcb04ee5b8b.jpg", "https://pic.downk.cc/item/5e82d8b5504f4bcb04ee5b89.jpg"],
            ["https://pic.downk.cc/item/5e82dc5c504f4bcb04f130ae.jpg", "https://pic.downk.cc/item/5e82dc5c504f4bcb04f130b1.jpg"]
          ],
          // Number
          productData: {
            id: "6317+3982",
            name: "6317+3982",
            stock: true,
            image: "https://pic.downk.cc/item/5e82e43d504f4bcb04f700ef.png",
            productContent: [{
              id: 0,
              name: "居家服",
              selectColor: "",
              colorList: ['黑色', '白色', '浅杏', '卡其', '卡其绿', '浅灰', '咖啡', '豆紫', '虾红', '暗红', '灰兰'],
              colorRGBList: getRGB.getRGB(['黑色', '白色', '浅杏', '卡其', '卡其绿', '浅灰', '咖啡', '豆紫', '虾红', '暗红', '灰兰']),
              image: "https://pic.downk.cc/item/5e82e43d504f4bcb04f700ef.png",
              num: 1,
              price: 0
            }, {
              id: 1,
              name: "居家裤",
              selectColor: "",
              colorList: ['黑色', '咖啡', '卡其绿', '豆紫', '暗红', '灰兰', '卡其', '浅灰', '虾红'],
              colorRGBList: getRGB.getRGB(['黑色', '咖啡', '卡其绿', '豆紫', '暗红', '灰兰', '卡其', '浅灰', '虾红']),
              image: "https://pic.downk.cc/item/5e82e43d504f4bcb04f700ef.png",
              num: 1,
              price: 0
            }]
          },
          image: "https://pic.downk.cc/item/5e82e43d504f4bcb04f700ef.png",
          quantityDescription: "一套",
          proposalWeight: '100～135 斤',
          giftName: "女式夏季短袖居家+女式加大扩腿七分裤",
          giftDescribe: "女夏新罗纹棉无痕半袖短袖纯色打底舒适百搭居家服+女式夏季螺纹棉加肥加大阔腿裤居家裤",
          stock: true
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
            stock: true,
            image: "https://pic.downk.cc/item/5e82c7cb504f4bcb04e22f70.png",
            productContent: [{
              id: 0,
              name: "居家服",
              selectColor: "",
              colorList: ['黑色', '白色', '杏', '浅粉', '浅银灰'],
              colorRGBList: getRGB.getRGB(['黑色', '白色', '杏', '浅粉', '浅银灰']),
              image: "https://pic.downk.cc/item/5e82c7cb504f4bcb04e22f70.png",
              num: 1,
              price: 0
            }, {
              id: 1,
              name: "居家裤",
              selectColor: "",
              colorList: ['黑色', '杏', '浅粉', '浅银灰', '花灰'],
              colorRGBList: getRGB.getRGB(['黑色', '杏', '浅粉', '浅银灰', '花灰']),
              image: "https://pic.downk.cc/item/5e82c7cb504f4bcb04e22f70.png",
              num: 1,
              price: 0
            }]
          },
          image: "https://pic.downk.cc/item/5e82c7cb504f4bcb04e22f70.png",
          quantityDescription: "一套",
          proposalWeight: '100～135 斤',
          giftName: "女式夏季加大背心居家服+女式夏季9分裤阔腿裤",
          giftDescribe: "女夏宽罗纹棉坎肩纯色背心打底居家百搭小圆领舒适居家服+女式夏季款螺纹棉大阔腿裤带口袋居家裤",
          stock: true
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
            stock: true,
            image: "https://pic.downk.cc/item/5e82caeb504f4bcb04e468ea.png",
            productContent: [{
              id: 0,
              name: "居家裙",
              selectColor: "",
              colorList: ['黑色', '白色', '浅杏', '卡其', '卡其绿', '浅灰', '咖啡', '豆紫', '虾红', '暗红', '灰兰'],
              colorRGBList: getRGB.getRGB(['黑色', '白色', '浅杏', '卡其', '卡其绿', '浅灰', '咖啡', '豆紫', '虾红', '暗红', '灰兰']),
              image: "https://pic.downk.cc/item/5e82caeb504f4bcb04e468ea.png",
              num: 1,
              price: 0
            }],

          },
          image: "https://pic.downk.cc/item/5e82caeb504f4bcb04e468ea.png",
          quantityDescription: "一件",
          proposalWeight: '100～135 斤',
          giftName: "女式美背短袖加大居家裙",
          giftDescribe: "女夏新款螺纹棉纯色短袖背心吊带美背女舒适修身内衣时尚居家睡裙",
          stock: true
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
            stock: true,
            image: "https://pic.downk.cc/item/5e82cb38504f4bcb04e4a1e8.png",
            productContent: [{
              id: 0,
              name: "居家裙",
              selectColor: "",
              colorList: ['黑色', '白色', '暗红', '咖啡', '卡其绿', '豆紫', '虾红'],
              colorRGBList: getRGB.getRGB(['黑色', '白色', '暗红', '咖啡', '卡其绿', '豆紫', '虾红']),
              image: "https://pic.downk.cc/item/5e82cb38504f4bcb04e4a1e8.png",
              num: 1,
              price: 0
            }]
          },
          image: "https://pic.downk.cc/item/5e82cb38504f4bcb04e4a1e8.png",
          quantityDescription: "一件",
          proposalWeight: '100～135 斤',
          giftName: "女式夏季吊带蕾丝居家裙",
          giftDescribe: "女夏新罗纹棉吊带蕾丝舒适百搭居家睡裙",
          stock: true
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
            stock: true,
            image: "https://pic.downk.cc/item/5e82cbd4504f4bcb04e51ea9.png",
            productContent: [{
              id: 0,
              name: "居家裙",
              selectColor: "",
              colorList: ['黑色', '深灰', '蓝色', '深咖'],
              colorRGBList: getRGB.getRGB(['黑色', '深灰', '蓝色', '深咖']),
              image: "https://pic.downk.cc/item/5e82cbd4504f4bcb04e51ea9.png",
              num: 1,
              price: 0
            }]
          },
          image: "https://pic.downk.cc/item/5e82cbd4504f4bcb04e51ea9.png",
          quantityDescription: "一件",
          proposalWeight: '100～135 斤',
          giftName: "女式夏季经典短袖居家裙",
          giftDescribe: "女夏经典罗纹棉人棉基础短袖纯色背心打底居家睡裙",
          stock: true
        });
        break;
      case "3936+6309":
        that.setData({
          background: [
            ["https://pic.downk.cc/item/5e82e120504f4bcb04f4ca4b.jpg", "https://pic.downk.cc/item/5e82e286504f4bcb04f5d0d6.jpg"],
            ["https://pic.downk.cc/item/5e82e120504f4bcb04f4ca4e.jpg", "https://pic.downk.cc/item/5e82e286504f4bcb04f5d0d9.jpg"]
          ],
          productData: {
            id: "3936+6309",
            name: "3936+6309",
            stock: true,
            image: "https://pic.downk.cc/item/5e82e481504f4bcb04f74163.png",
            productContent: [{
              id: 0,
              name: "居家服",
              selectColor: "",
              colorList: ['黑色', '灰兰', '豆紫', '暗红', '咖啡', '花灰', '白色'],
              colorRGBList: getRGB.getRGB(['黑色', '灰兰', '豆紫', '暗红', '咖啡', '花灰', '白色']),
              image: "https://pic.downk.cc/item/5e82e481504f4bcb04f74163.png",
              num: 1,
              price: 0
            }, {
              id: 1,
              name: "居家裤",
              selectColor: "",
              colorList: ['黑色', '杏', '卡其', '灰兰', '咖啡', '暗红', '豆紫', '浅灰'],
              colorRGBList: getRGB.getRGB(['黑色', '杏', '卡其', '灰兰', '咖啡', '暗红', '豆紫', '浅灰']),
              image: "https://pic.downk.cc/item/5e82e481504f4bcb04f74163.png",
              num: 1,
              price: 0
            }]
          },
          image: "https://pic.downk.cc/item/5e82e481504f4bcb04f74163.png",
          quantityDescription: "一套",
          proposalWeight: '100～135 斤',
          giftName: "女式圆领坎肩打底衫居家服+女式花苞短裤",
          giftDescribe: "女夏新罗纹棉无痕坎肩小纽扣T恤短袖纯色打底舒适百搭+女式螺纹棉花苞居家睡裤",
          stock: true
        });
        break;
      default:


        break;
    }


  },


  clickChoose(value) {
    console.log('按钮点击内容', value)
    var that = this;





    that.setData({
      ['productDetail.bycKVTList[' + value.currentTarget.dataset.index + '].metadata.selectValue']: value.currentTarget.dataset.value
    })

    console.log("productDetail=", that.data.productDetail)

    // switch (e.currentTarget.dataset.style) {
    //   case "color":

    //     if (that.data.permission == 'edit') {
    //       if (that.data.productData.productContent[e.currentTarget.dataset.productcontentindex].selectColor == e.currentTarget.dataset.color) {
    //         that.setData({
    //           ['productData.productContent[' + e.currentTarget.dataset.productcontentindex + '].selectColor']: "",
    //         })
    //       } else {
    //         that.setData({
    //           ['productData.productContent[' + e.currentTarget.dataset.productcontentindex + '].selectColor']: e.currentTarget.dataset.color,
    //         })
    //       }
    //     }
    //     break;
    // }




  },
  addShopCart: function (e) { //添加到购物车
    var that = this

  },
  showPopup(value) {
    var that = this
    this.popup = this.selectComponent("#popup");

    this.popup.show();

    this.setData({
      submitStatus: value.currentTarget.dataset.type
    })

    //此处去除所有选项的选定

    for (let i = 0; i < that.data.productDetail.bycKVTList.length; i++) {
      if (that.data.productDetail.bycKVTList[i].kvt.length > 1) {


        let metadata = that.data.productDetail.bycKVTList[i].metadata
        delete metadata.selectValue
        that.setData({
          ['productDetail.bycKVTList[' + i + '].metadata']: metadata
        })


      }
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

  swichNav: function (e) { //点击tab切换
    var that = this;
    if (that.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  black() {
    wx.navigateBack({

    })
  },
  suspensionBallItemClick(value) {
    console.log('suspensionBallItemClick', value)
    wx.reLaunch({
      url: value.detail.url
    })

  },
  swiperTab(value) {
    var that = this;
    console.log("swiperTab value=", value)
    if (value.detail.source == "touch") {
      that.setData({
        currentTab: value.detail.current
      });

    }
  },
  closePopup() {
    this.popup.close();
  },
  submit() {
    var that = this

    var selectValue = []
    console.log("that.data.productDetail=", that.data.productDetail)
    for (let i = 0; i < that.data.productDetail.bycKVTList.length; i++) {
      if (that.data.productDetail.bycKVTList[i].kvt.length > 1) {

        if (!that.data.productDetail.bycKVTList[i].metadata.selectValue) {
          wx: wx.showToast({
            title: '请选择' + that.data.productDetail.bycKVTList[i].metadata.description,
            icon: 'none',
            duration: 2000,

          })

          return
        }
        else {

          selectValue.push({
            description: that.data.productDetail.bycKVTList[i].metadata.description,
            value: that.data.productDetail.bycKVTList[i].metadata.selectValue
          })



        }

      }
    }


    console.log("当前submitStatus=", this.data.submitStatus)


    var localCreatTimeStamp = Date.parse(new Date())
    var newCart = {

      specialID: that.data.specialDetail.specialID,
      specialName: that.data.specialDetail.specialName,
      groupID: that.data.productDetail.groupID,
      merchantID: 1410655347970011,
      quantity: 1,
      localCreatTimeStamp: localCreatTimeStamp,
      image: that.data.productData.image,
      selectValue: selectValue

    }

    console.log("最终的Cart=", newCart)



    // 数量 选项

    // "groupID": 10000000000000000,
    //     "merchantID": 1410655347970011
    // },
    // "orderLine": [{
    //   "ranking": 1,
    //   "specialName": that.data.brandUpperCase,
    //   "specialID": 1555735654091,
    //   "price": 108,
    //   "groupID": 10000000000000000,
    //   "merchantID": 1410655347970011,
    //   "productPriceType": "PPT_FULL_PRICE",
    //   "quantity": 1,
    //   "unitPrice": 108
    // }],


    try {
      var value = wx.getStorageSync('orderStorage')
      var orderStorage = []
      if (value) {
        // Do something with return value
        orderStorage = value
      } else {

      }

      orderStorage.push(newCart)



      try {
        wx.setStorageSync('orderStorage', orderStorage)
      } catch (e) {

      }


    } catch (e) {
      // Do something when catch error
    }






    switch (this.data.submitStatus) {

      case "pay":
        wx.navigateTo({
          url: '/pages/shopping-mall/goods/place-order/place-order',
          success: function (res) {
            // 通过eventChannel向被打开页面传送数据
            res.eventChannel.emit('localCreatTimeStamp', localCreatTimeStamp)
          }
        })
        break;

      case "cart":
        this.popup.close();

        that.setData({
          badgeCount: that.data.badgeCount + 1
        })

        break;



    }




  },
  toCart(value) {
    wx.reLaunch({
      url: '/pages/shopping-mall/cart/cart'
    })
  },
  onReachBottom(e) {

    console.log("上拉触底", e);
    // console.log(e);
    var that = this;
    that.setData({
      productImageIsScroll: true,

    })
  },
  onPageScroll(e) {
    //  console.log("当前屏幕位置=",e);
    // console.log(e);

    if (e.scrollTop == 0) {
      console.log("当前屏幕位置  e=0", e);
      var that = this;
      that.setData({
        productImageIsScroll: false,

      })
    }
  },
  bindscrolltoupper(value) {
    console.log('bindscrolltoupper', value)
    this.setData({
      productImageIsScroll: false,

    })
  },
  bindscrolltolower(value) {
    console.log('bindscrolltolower', value)
    this.setData({
      //   productImageIsScroll: false,

    })
  },
  review() {
    this.setData({
      isCollection: !this.data.isCollection
    })
  },
 
  openActionSheet : function () {
    this.setData({
      showActionSheet: true
    })
  },
  closeActionSheet: function () {
    this.setData({
      showActionSheet: false
    })
  },
  actionSheetClick(value) {
    console.log(value)

   switch(value.detail.value){
     case 0  :
     break;
     case 1 :
      // wx.navigateTo({
      //   url: '../poster/poster',
      // })
     break;
   }
    this.closeActionSheet()
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

})