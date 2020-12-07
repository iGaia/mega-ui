var app = getApp();
Page({

  data: {
    skin: app.data.skin,
    currentTab:0,
    topPictureList:[
      "https://c.vpimg1.com/upcb/2020/04/14/13/ias_158682871725457_570x273_90.jpg", "https://a.vpimg2.com/upload/flow/2020/04/26/86/15878958731664.jpg","https://c.vpimg1.com/upcb/2020/04/22/32/ias_158753658164932_570x273_90.jpg"
    ],
    longImage: [],

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    id: "",
    windowHeight: 1000,
    windowWidth: 1000,
    scrollheight: 0,


    autoplay: false,
  
    //以下是模板代码

    endTime: '2020-11-22 10:40:30',//2018/11/22 10:40:30这种格式也行
    tabSwiperCurrent: 0,
    tabSwiperItemContent: ["https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-2.d97b49b82261012756d25f969d7b9fb7.jpg",
      "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/320-320-4.492c848ada4a915211866ee7bbc8424d.jpg",
      "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/340-340-3.236029194d247dd8b1c3f2e95c6d5f05.jpg"],
    imageTabSwiperCurrent: 0,
    imageTabSwiperItemContent: [
      "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-4.f9a7627eda63206ccaea4b09f4cc5b68.jpg",
      "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-2.d97b49b82261012756d25f969d7b9fb7.jpg",
      "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-1.42fefec9ae9323a022a4b9ec8fd1691c.jpg"
    ],
    swiperCurrent: 0,
    swiperItemContent: [
      "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-4.f9a7627eda63206ccaea4b09f4cc5b68.jpg",
      "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-2.d97b49b82261012756d25f969d7b9fb7.jpg",
      "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-1.42fefec9ae9323a022a4b9ec8fd1691c.jpg"
    ],
    show: true,
    isEnd: false,
    items: [],
    fallNum: 2,
    isTile: false,
    pattern: {
      color: '#7A7E83',
      backgroundColor: '#fff',
      selectedColor: '#007AFF',
      buttonColor: "#FF7159"
    },
    content: [
      // {
      //   iconPath: '/image/buy_with_confidence.png',
      //   selectedIconPath: '/image/buy_with_confidence.png',
      //   text: '回到顶部',
      //   active: false,
      //   openType:"none",
      //  url: ''
      // },
      // {
      //   iconPath: '/image/buy_with_confidence.png',
      //   selectedIconPath: '/image/buy_with_confidence.png',
      //   text: '回到顶部',
      //   active: false,
      //   openType:"none",
      //  url: ''
      // },
      {
        iconPath: '/image/buy_with_confidence.png',
        selectedIconPath: '/image/buy_with_confidence.png',
        text: '分享',
        active: false,
        openType:"share",
        url: ''
      },
      {
        iconPath: '/image/buy_with_confidence.png',
        selectedIconPath: '/image/buy_with_confidence.png',
        text: '联系客服',
        active: false,
        openType:"contact",
        url: ''
      }
    ],

    dataList:
    [{
      "componentName": "Banner",
      "type": 1,
      "edit": false,
      "details": {
        "imgs": [{
          "fit": "fill",
          "src": "https://img.yzcdn.cn/upload_files/2020/06/28/Fp1Z17bG0gi6MfytHbX5cZ8eKCGb.jpg",
          "link": "link1"
        }, {
          "src": "http://img.yzcdn.cn/upload_files/2020/04/15/FuiG2B9w5I6K9zLWwWIR9-bozI9q.jpg",
          "link": "link1"
        }],
        "dotShow": true,
        "color1": "#ff0000",
        "color2": "#fff",
        "boxHeight": 380,
        "style": 1
      },
      "id": 0
    }, {
      "componentName": "titleComponents",
      "type": 3,
      "edit": false,
      "details": {
        "titleFontSize": "17.5px",
        "describeFontSize": "12.5px",
        "style": 1,
        "color1": "#333",
        "color2": "#fff",
        "text": "图片列表",
        "text2": ""
      },
      "id": 1
    }, {
      "componentName": "imageList",
      "type": 4,
      "edit": false,
      "details": {
        "style": "1",
        "color2": "#fff",
        "radius": 10,
        "imgs": [{
          "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596879930384&di=eac658feab756d74d50279f7a998f71e&imgtype=0&src=http%3A%2F%2Fbbsimg.res.flyme.cn%2Fforum%2F201512%2F17%2F014758mlw1j471jvh47ng7.png",
          "link": ""
        }]
      },
      "id": 2
    }, {
      "componentName": "Coupon",
      "type": 51,
      "edit": false,
      "details": {
        "style": 1
      },
      "id": 3
    }, {
      "componentName": "productList",
      "type": 52,
      "edit": false,
      "details": {
        "fontSize": "12px",
        "style": 0,
        "color1": "#333",
        "color2": "#fff",
        "limit": {
          "title": true,
          "text": true,
          "price": true,
          "button": true,
          "quantitySold": true,
          "company": true
        },
        "imgs": [{
          "src": "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-1.42fefec9ae9323a022a4b9ec8fd1691c.jpg",
          "title": "商品标题",
          "text": "商品描述",
          "price": 221,
          "button": "马上抢",
          "quantitySold": 222,
          "company": "单位",
          "link": ""
        }, {
          "src": "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-2.d97b49b82261012756d25f969d7b9fb7.jpg",
          "title": "商品标题",
          "text": "商品描述",
          "price": 221,
          "button": "马上抢",
          "quantitySold": 222,
          "company": "单位",
          "link": ""
        }, {
          "src": "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-3.41b0f5c126e8aa3be736b41a65b13472.jpg",
          "title": "商品标题",
          "text": "商品描述",
          "price": 221,
          "button": "马上抢",
          "quantitySold": 222,
          "company": "单位",
          "link": ""
        }]
      },
      "id": 4
    }, {
      "componentName": "carousel",
      "type": 56,
      "edit": false,
      "details": {
        "boxHeight": 367,
        "style": 0,
        "color1": "#333",
        "color2": "#F21D1D",
        "imgs": [{
          "src": "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-1.42fefec9ae9323a022a4b9ec8fd1691c.jpg",
          "title": "商品标题",
          "text": "商品描述",
          "price": 221,
          "button": "马上抢",
          "quantitySold": 222,
          "company": "单位",
          "link": ""
        }, {
          "src": "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-2.d97b49b82261012756d25f969d7b9fb7.jpg",
          "title": "商品标题",
          "text": "商品描述",
          "price": 221,
          "button": "马上抢",
          "quantitySold": 222,
          "company": "单位",
          "link": ""
        }, {
          "src": "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-3.41b0f5c126e8aa3be736b41a65b13472.jpg",
          "title": "商品标题",
          "text": "商品描述",
          "price": 221,
          "button": "马上抢",
          "quantitySold": 222,
          "company": "单位",
          "link": ""
        }]
      },
      "id": 5
    }, {
      "componentName": "group",
      "type": 58,
      "edit": false,
      "details": {
        "style": 0,
        "list": [{
          "name": "配饰",
          "list": [{
            "src": "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-3.41b0f5c126e8aa3be736b41a65b13472.jpg",
            "title": "商品标题",
            "text": "商品描述",
            "price": 221,
            "button": "马上抢",
            "quantitySold": 222,
            "company": "单位",
            "link": ""
          }, {
            "src": "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-3.41b0f5c126e8aa3be736b41a65b13472.jpg",
            "title": "商品标题",
            "text": "商品描述",
            "price": 221,
            "button": "马上抢",
            "quantitySold": 222,
            "company": "单位",
            "link": ""
          }, {
            "src": "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-3.41b0f5c126e8aa3be736b41a65b13472.jpg",
            "title": "商品标题",
            "text": "商品描述",
            "price": 221,
            "button": "马上抢",
            "quantitySold": 222,
            "company": "单位",
            "link": ""
          }, {
            "src": "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-3.41b0f5c126e8aa3be736b41a65b13472.jpg",
            "title": "商品标题",
            "text": "商品描述",
            "price": 221,
            "button": "马上抢",
            "quantitySold": 222,
            "company": "单位",
            "link": ""
          }]
        }, {
          "name": "包包",
          "list": [{
            "src": "https://imgs.juanpao.com/2019%2F06%2F15%2F15605812215d049465e5868.png",
            "title": "商品标题",
            "text": "商品描述",
            "price": 221,
            "button": "马上抢",
            "quantitySold": 222,
            "company": "单位",
            "link": ""
          }, {
            "src": "https://imgs.juanpao.com/2019%2F06%2F15%2F15605812215d049465e5868.png",
            "title": "商品标题",
            "text": "商品描述",
            "price": 221,
            "button": "马上抢",
            "quantitySold": 222,
            "company": "单位",
            "link": ""
          }, {
            "src": "https://imgs.juanpao.com/2019%2F06%2F15%2F15605812215d049465e5868.png",
            "title": "商品标题",
            "text": "商品描述",
            "price": 221,
            "button": "马上抢",
            "quantitySold": 222,
            "company": "单位",
            "link": ""
          }]
        }]
      },
      "id": 6
    }, {
      "componentName": "countDown",
      "type": 59,
      "edit": false,
      "details": {
        "style": 0,
        "imgs": [{
          "src": "http://5b0988e595225.cdn.sohucs.com/images/20190503/f79d3cebc9a94908965f5ab1fd78447d.jpeg",
          "title": "商品标题",
          "text": "商品描述",
          "price": 221,
          "button": "马上抢",
          "quantitySold": 222,
          "company": "单位",
          "link": ""
        }]
      },
      "id": 7
    }, {
      "componentName": "divider",
      "type": 102,
      "edit": false,
      "details": {
        "style": "1",
        "color1": "#eee",
        "color2": "#fff",
        "boxHeight": 10,
        "paddingTopBottom": 5
      },
      "id": 8
    }, {
      "componentName": "floatingButton",
      "type": 103,
      "edit": false,
      "details": {
        "color2": "#ff7159",
        "positionLeft": 295,
        "positionTop": 550,
        "opacity": 0.9,
        "functionPoint": "goTop",
        "imgs": [{
          "src": "data:image/png;base64,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",
          "link": "link1"
        }]
      },
      "id": 9
    }, {
      "componentName": "Announcement",
      "type": 106,
      "edit": false,
      "details": {
        "color1": "#fff",
        "color2": "#f00",
        "imgs": [{
          "src": "../../../../public/image/icon/white_trumpet.svg",
          "text": "即日起到本月底，全场商品满499减50，满699减100！"
        }]
      },
      "id": 10
    }, {
      "componentName": "searchBar",
      "type": 108,
      "edit": false,
      "details": {
        "text": "请输入",
        "color1": "#fff",
        "color2": "#fff",
        "color3": "#333"
      },
      "id": 11
    }, {
      "componentName": "titleComponents",
      "type": 3,
      "edit": false,
      "details": {
        "titleFontSize": "17.5px",
        "describeFontSize": "12.5px",
        "style": 2,
        "color1": "#333",
        "color2": "#fff",
        "text": "掌柜推荐",
        "text2": "RECOMMENDED"
      },
      "id": 12
    }, {
      "componentName": "carousel",
      "type": 56,
      "edit": false,
      "details": {
        "boxHeight": 367,
        "style": 0,
        "color1": "#333",
        "color2": "#F21D1D",
        "imgs": [{
          "src": "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-1.42fefec9ae9323a022a4b9ec8fd1691c.jpg",
          "title": "商品标题",
          "text": "商品描述",
          "price": 221,
          "button": "马上抢",
          "quantitySold": 222,
          "company": "单位",
          "link": ""
        }, {
          "src": "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-2.d97b49b82261012756d25f969d7b9fb7.jpg",
          "title": "商品标题",
          "text": "商品描述",
          "price": 221,
          "button": "马上抢",
          "quantitySold": 222,
          "company": "单位",
          "link": ""
        }, {
          "src": "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-3.41b0f5c126e8aa3be736b41a65b13472.jpg",
          "title": "商品标题",
          "text": "商品描述",
          "price": 221,
          "button": "马上抢",
          "quantitySold": 222,
          "company": "单位",
          "link": ""
        }]
      },
      "id": 13
    }, {
      "componentName": "titleComponents",
      "type": 3,
      "edit": false,
      "details": {
        "titleFontSize": "17.5px",
        "describeFontSize": "12.5px",
        "style": 2,
        "color1": "#333",
        "color2": "#fff",
        "text": "新款发现",
        "text2": "DISCOUNTED"
      },
      "id": 14
    }, {
      "componentName": "productList",
      "type": 52,
      "edit": false,
      "details": {
        "fontSize": "12px",
        "style": 4,
        "color1": "#333",
        "color2": "#fff",
        "limit": {
          "title": true,
          "text": true,
          "price": true,
          "button": true,
          "quantitySold": true,
          "company": true
        },
        "imgs": [{
          "src": "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-1.42fefec9ae9323a022a4b9ec8fd1691c.jpg",
          "title": "商品标题",
          "text": "商品描述",
          "price": 221,
          "button": "马上抢",
          "quantitySold": 222,
          "company": "单位",
          "link": ""
        }, {
          "src": "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-2.d97b49b82261012756d25f969d7b9fb7.jpg",
          "title": "商品标题",
          "text": "商品描述",
          "price": 221,
          "button": "马上抢",
          "quantitySold": 222,
          "company": "单位",
          "link": ""
        }, {
          "src": "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-3.41b0f5c126e8aa3be736b41a65b13472.jpg",
          "title": "商品标题",
          "text": "商品描述",
          "price": 221,
          "button": "马上抢",
          "quantitySold": 222,
          "company": "单位",
          "link": ""
        }]
      },
      "id": 15
    }, {
      "componentName": "titleComponents",
      "type": 3,
      "edit": false,
      "details": {
        "titleFontSize": "17.5px",
        "describeFontSize": "12.5px",
        "style": 2,
        "color1": "#333",
        "color2": "#eeede9",
        "text": "新款发现",
        "text2": "DISCOUNTED"
      },
      "id": 16
    }, {
      "componentName": "carousel",
      "type": 56,
      "edit": false,
      "details": {
        "boxHeight": 367,
        "style": 1,
        "color1": "#333",
        "color2": "#eeede9",
        "imgs": [{
          "src": "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-1.42fefec9ae9323a022a4b9ec8fd1691c.jpg",
          "title": "商品标题",
          "text": "商品描述",
          "price": 221,
          "button": "马上抢",
          "quantitySold": 222,
          "company": "单位",
          "link": ""
        }, {
          "src": "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-2.d97b49b82261012756d25f969d7b9fb7.jpg",
          "title": "商品标题",
          "text": "商品描述",
          "price": 221,
          "button": "马上抢",
          "quantitySold": 222,
          "company": "单位",
          "link": ""
        }, {
          "src": "https://file.yzcdn.cn/mall-cloud/cnzoom/goods-image/710-710-3.41b0f5c126e8aa3be736b41a65b13472.jpg",
          "title": "商品标题",
          "text": "商品描述",
          "price": 221,
          "button": "马上抢",
          "quantitySold": 222,
          "company": "单位",
          "link": ""
        }]
      },
      "id": 17
    }, {
      "componentName": "titleComponents",
      "type": 3,
      "edit": false,
      "details": {
        "titleFontSize": "17.5px",
        "describeFontSize": "12.5px",
        "style": 2,
        "color1": "#333",
        "color2": "#eeede9",
        "text": "宝贝分类",
        "text2": "超级in的时尚潮流穿搭"
      },
      "id": 18
    }, {
      "componentName": "category",
      "type": 57,
      "edit": false,
      "details": {
        "imgs": [{
          "src": "https://img.yzcdn.cn/upload_files/2020/04/20/FrVdOMYsSz4Y3SJaI3_4nCIrbY0H.jpg",
          "link": "link1"
        }, {
          "src": "https://img.yzcdn.cn/upload_files/2020/04/20/FrVdOMYsSz4Y3SJaI3_4nCIrbY0H.jpg",
          "link": "link1"
        }, {
          "src": "https://img.yzcdn.cn/upload_files/2020/04/20/FrVdOMYsSz4Y3SJaI3_4nCIrbY0H.jpg",
          "link": "link1"
        }, {
          "src": "https://img.yzcdn.cn/upload_files/2020/04/20/FrVdOMYsSz4Y3SJaI3_4nCIrbY0H.jpg",
          "link": "link1"
        }, {
          "src": "https://img.yzcdn.cn/upload_files/2020/04/20/FrVdOMYsSz4Y3SJaI3_4nCIrbY0H.jpg",
          "link": "link1"
        }, {
          "src": "https://img.yzcdn.cn/upload_files/2020/04/20/FrVdOMYsSz4Y3SJaI3_4nCIrbY0H.jpg",
          "link": "link1"
        }],
        "dotShow": true,
        "color1": "#fff",
        "color2": "#f00",
        "boxHeight": 380,
        "style": 1
      },
      "id": 19
    }, {
      "componentName": "divider",
      "type": 102,
      "edit": true,
      "details": {
        "style": "1",
        "color1": "#eee",
        "color2": "#fff",
        "boxHeight": 10,
        "paddingTopBottom": 5
      },
      "id": 20
    },{
          componentName: "titleComponents",
          type: 3,
          edit: false,
          details: {
            titleFontSize: '17.5px',
            describeFontSize: '12.5px',
            style: 2,
            color1: '#333',
            color2: '#eeede9',
            text: '关于我们',
            text2: '实惠生活优惠go,最美组装身上show。'
          }
        }, {
          componentName: "Application",
          type: 156,
          edit: false,
          details: {

          }
        }, {
          componentName: "navigation",
          type: 2,
          edit: true,
          details: {
            col: {
              1: '50%',
              2: '33.33%',
              3: '25%',
              4: '20%'
            },
            fontSize: '12px',
            imgs: [{
              src: 'https://img.yzcdn.cn/upload_files/2020/04/02/Fouk_bdysRVJXFyASTW_JTpLhvnP.png',
              fit: 'contain',
              text: '正品保证',
              link: ''
            }, {
              src: 'https://img.yzcdn.cn/upload_files/2020/04/02/FjjDKg6vujrMw0kXk6eTR3xmY8Bp.png',
              fit: 'contain',
              text: '店铺担保',
              link: ''
            }, {
              src: 'https://img.yzcdn.cn/upload_files/2020/04/02/FnoRhPDm_gVa_undR_cVx5Y-s6fu.png',
              fit: 'contain',
              text: '全程护航',
              link: ''
            }, {
              src: 'https://img.yzcdn.cn/upload_files/2020/04/02/FnvsDSC3IemS8_zgHiuPKlSLIiH_.png',
              fit: 'contain',
              text: '放心购买',
              link: ''
            }],
            color1: '#FFF',
            color2: '#f00',
            radius: 20,
            style: 3


          }}]


  },
  test() {
    return 2
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //   console.log("活动列表界面", options);
    var that = this;

    that.countDown()

    this._render();
  



  },
  login: function () {
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) { // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              //      console.log(res);
              app.globalData.userInfo = res.userInfo;
              //      console.log(res.userInfo)
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (value) {
    //  console.log("活动列表界面onReady=", value)
    var that = this

    // this.suspensionBall = this.selectComponent("#suspension-ball");
    // this.suspensionBall.show();


    console.log("此时 app.data.activityMerchantCode=", app.data.activityMerchantCode)
    switch (app.data.activityMerchantCode) {
      case "MLFS.QAD":
        that.setData({
          longImage: [
            "https://pic.imgdb.cn/item/5e96d06fc2a9a83be5a1cf41.jpg"
          ]
        })

        wx.setNavigationBarTitle({
          title: '俏安朵商城'
        })
        break;
      case "MLFS.YBK":
        that.setData({
          longImage: [

            "https://pic.imgdb.cn/item/5e96d06fc2a9a83be5a1cf45.jpg"
          ]


        })
        wx.setNavigationBarTitle({
          title: '优布客商城'
        })
        break;

      case "LVI.LVI":
        that.setData({
          longImage: [

            "https://pic.imgdb.cn/item/5e96e088c2a9a83be5ae8b6c.jpg"
          ]

        })
        wx.setNavigationBarTitle({
          title: 'LVI商城'
        })
        break;
      default:

        break;
    }





    if (app.invitedToJumpCallback) {
      //    console.log("app.js invitedToJumpCallback");
      app.invitedToJumpCallback()
      app.invitedToJumpCallback = res => {
        //     console.log("这是重置后的 invitedToJumpCallback")
      }
    } else {
      //    console.log("home onReady 此时app还没有invitedToJumpCallback",app)
    }






    app.getServerUserCacheReadyCallback = res => {
      //   console.log("服务器获取缓存 回调成功")

      that.judgementAuthority()
     
    }

    wx.getStorage({
      key: "userID",
      success(res) {
        that.setData({
          needHideMy: false
        })
      },
      fail(res) {

      }
    })

  },
  confirmEvent: function () {
    this.dialog.hideDialog();
  },

  bindGetUserInfo: function () {
    // wx.getLocation({
    //   type: 'wgs84',
    //   success: function(res) { // console.log(res);    
    //     var latitude = res.latitude;
    //     var longitude = res.longitude;
    //     //弹框      
    //     wx.showModal({
    //       title: '当前位置',
    //       content: "纬度:" + latitude + ",经度:" + longitude,
    //     })
    //   }
    // })
    // 用户点击授权后，这里可以做一些登陆操作
    //  this.login();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (value) {
    //  console.log("活动列表界面=", value)
    var that = this


    this.judgementAuthority()


    // 以下代码用于获取用户头像昵称地区等信息
    // if (app.globalData.userInfo) {
    //   //  console.log("有用户信息");

    // } else if (this.data.canIUse) {
    //   //  console.log("无用户信息");

    //   // 由于 getUserInfo 是网络请求
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     //  console.log("有回调");
    //     if (app.globalData.userInfo) {
    //       //   console.log("有用户信息2");

    //     } else {
    //       //   console.log("无用户信息");

    //       this.dialog = this.selectComponent("#dialog");
    //       this.dialog.showDialog();
    //     }
    //     // this.setData({
    //     //   userInfo: res.userInfo,
    //     //   hasUserInfo: true
    //     // })
    //   }
    // } else {
    //   console.log("else");
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }

 
    this.setList();
  },

  judgementAuthority() {
    //   console.log("触发 judgementAuthority")
    var that = this
    wx.getStorage({
      key: 'userModel',
      success: function (res) {
        console.log("获取模型成功", res)
        console.log("app.data.activityMerchantCode=", app.data.activityMerchantCode)

        that.setData({
          userModel: res.data
        })


        if (res.data.brand.MLFS) {


          switch (app.data.activityMerchantCode) {
            case "MLFS.QAD":
              that.setData({
                showMLFS: true
              })

              if (res.data.brand.MLFS.QAD) {

                if (res.data.brand.MLFS.QAD.isVIP) {
                  that.setData({
                    isVIP: res.data.brand.MLFS.QAD.isVIP
                  })
                }


              }
              // //以下逻辑在于禁止多会员
              // if (res.data.brand.MLFS.YBK && res.data.brand.MLFS.YBK.isVIP == true) {
              //   that.setData({
              //     isVIP: true
              //   })
              // }
              break;
            case "MLFS.YBK":
              that.setData({
                showMLFS: true
              })
              if (res.data.brand.MLFS.YBK) {

                if (res.data.brand.MLFS.YBK.isVIP) {
                  that.setData({

                    isVIP: res.data.brand.MLFS.YBK.isVIP
                  })
                }
              }
              // //以下逻辑在于禁止多会员
              // if (res.data.brand.MLFS.QAD && res.data.brand.MLFS.QAD.isVIP == true) {

              //   that.setData({
              //     isVIP: true
              //   })
              // }



              break;

            case "LVI.LVI":
              that.setData({
                showMLFS: false
              })



              break;

          }



        }

        if (!that.data.isVIP) {

          that.setData({

            isVIP: false
          })
        }




      },
      fail: function (res) {
        //      console.log("获取模型失败", res)

      },
    })


    // console.log("更新数据", app.data);
  },



  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    var that = this;

    var activityType;
    var imageUrl;
    switch (app.data.activityMerchantCode) {
      case "MLFS.QAD":

        activityType = "阳光海浪，俏安朵邀您帆船体验！"
        imageUrl = 'https://pic.imgdb.cn/item/5e86659f504f4bcb04e95a02.jpg'
        break;
      case "MLFS.YBK":

        activityType = "阳光海浪，优布客邀您帆船体验！"
        imageUrl = 'https://pic.imgdb.cn/item/5e86659f504f4bcb04e959fe.jpg'
        break;

      case "LVI.LVI":

        activityType = "阳光海浪，我们邀您帆船体验！"
        imageUrl = 'https://pic.imgdb.cn/item/5e967c1ac2a9a83be56079b2.jpg'
        break;
    }

    return {
      title: activityType,
      imageUrl: imageUrl,
      path: '/pages/shopping-mall/home/home?' + "userToken=" + app.data.userToken +
        "&brand=" + app.data.activityMerchantCode

    }

  },


  intoPay() {
    var that = this


    switch (app.data.activityMerchantCode) {
      case "MLFS.QAD":
        wx.navigateTo({
          url: '../order/pay'
        })
        break;
      case "MLFS.YBK":

        wx.navigateTo({
          url: '../order/pay'
        })
        break;

      case "LVI.LVI":

        console.log("userModel=", that.data.userModel)

        let userModel = that.data.userModel
        let isAlreadyPurchased = false
        let isRepeat = false
        try {


          if (userModel.brand.GJNXFXHHJLB) {

            if (userModel.brand.GJNXFXHHJLB.HHJLB) {
              //此处代码用于确保不会重复添加航海活动的数据

              console.log("触发此处 有航海活动数据")
              for (let i = 0; i < userModel.brand.GJNXFXHHJLB.HHJLB.length; i++) {

                if (userModel.brand.GJNXFXHHJLB.HHJLB[i].relationBrand == app.data.activityMerchantCode) {
                  console.log("航海活动有重复数据，则不再增加新数据")
                  if (userModel.brand.GJNXFXHHJLB.HHJLB[i].isAlreadyPurchased == true) {
                    console.log("航海活动已购买")
                    isAlreadyPurchased = true
                  }
                  isRepeat = true
                }
              }


            } else {
              console.log("触发此处 没有 HHJLB 航海活动数据")

            }

          } else {
            console.log("触发此处 没有 GJNXFXHHJLB 航海活动数据")
            userModel.brand.GJNXFXHHJLB = {}
            userModel.brand.GJNXFXHHJLB.HHJLB = []


          }


          if (isRepeat != true) {
            console.log("触发此处 没有LVI版本航海活动数据 现在加上")
            userModel.brand.GJNXFXHHJLB.HHJLB.push({
              isVIP: true,
              isAlreadyPurchased: false,
              relationBrand: app.data.activityMerchantCode,
              cardInfo: {

              }
            })
            wx.setStorageSync('userModel', userModel);
          }




          if (isAlreadyPurchased == true) {
            console.log("航海活动已购买 跳转到successful_payment")
            wx.navigateTo({
              url: '../activity/navigation_activity/successful_payment?brand=' + app.data.activityMerchantCode
            })
          } else {

            wx.navigateTo({
              url: '../activity/navigation_activity/choose_commodity?brand=' + app.data.activityMerchantCode
            })
          }



        } catch (e) {
          console.log("intoPay error", e)
          // Do something when catch error
        }

        // wx.navigateTo({
        //   url: '../order/pay'
        // })
        break;
    }


  },
 

  review() {

    wx.navigateTo({
      url: '../preview/image/image'
    })
  },
  preview() {


    wx.navigateTo({
      url: '../choice_of_gift/choice_of_gift'
    })
  },
  contactSeaNavigationCustomerService() {

    wx.showActionSheet({
      itemList: ['拨打电话', '扫码进群'],
      success(res) {
        console.log("showActionSheet success", res)
        switch (res.tapIndex) {
          case 0:
            wx.makePhoneCall({
              phoneNumber: '18101070512'
            })
            break;
          case 1:
            wx.navigateTo({
              url: '../show-qrcode/show-qrcode',
            })

            break;
        }

      },
      fail(res) {
        console.log("showActionSheet fail", res)
      }
    })
  },
  clickToJump(value) {

    console.log("clickToJump value=", value.currentTarget.dataset.name)
    switch (value.currentTarget.dataset.name) {



      case "首页":

        break;
      case "分类":
        wx.reLaunch({
          url: '../classify/classify'
        })
        break;
      case "购物车":
        wx.reLaunch({
          url: '../cart/cart'
        })
        break;
      case "我的":
        wx.reLaunch({
          url: '../my/my'
        })
        break;


      default:
        console.error("跳转错误，没有" + value.currentTarget.dataset.name)
        break;


    }

  },
  swiperTab: function (e) {
    var that = this;
    console.log("swiperTab e=", e)
    if (e.detail.source == "touch") {
      that.setData({
        currentTab: e.detail.current
      });

    }
  },
  setList() {
    this.setData({
      goodsList: [{ "id": 17, "bn": "G5561620313382", "name": "得力科学计算器多功能学生用函数计算机工程考试专用大学会计金融可爱便携大学生中学生中级会计复数统计学", "brief": "科学12位函数计算器 学习财务型", "price": "18.50", "mktprice": "25.00", "image_id": "70b77f674c9ec0c4c60f05da1e14a37c", "goods_cat_id": 8, "goods_type_id": 3, "brand_id": 29, "is_nomal_virtual": 1, "marketable": 1, "stock": 632, "weight": "120.00", "unit": "个", "intro": "<p style='overflow:hidden'><br/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/13/2d/68/5cc12595ae92d.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/43/47/8e/5cc12595b5236.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/b0/db/1a/5cc12595d18c9.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/08/de/b7/5cc12595e2252.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/fb/2b/4e/5cc12595e90b1.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/0e/3c/ce/5cc1259615f7c.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/fa/79/91/5cc125962313f.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/be/43/8a/5cc12596296a8.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/d4/0a/b0/5cc125963da63.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/aa/15/00/5cc1259646a97.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/29/ed/8b/5cc125967a37c.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/83/61/95/5cc12596810bb.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/78/41/f3/5cc1259687cd5.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/21/8c/c3/5cc125969e05e.jpg\"/></p><p style='overflow:hidden'><br/></p>", "spes_desc": "", "params": "a:1:{s:6:\"品牌\";s:6:\"得力\";}", "comments_count": 0, "view_count": 0, "buy_count": 978, "uptime": 1571718574, "downtime": null, "sort": 98, "is_recommend": 1, "is_hot": 2, "label_ids": [], "new_spec": null, "ctime": null, "utime": 1583059080, "isdel": null, "cat_name": "优选办公", "image_url": "https://demo.jihainet.com/static/uploads/images/2020/03/01/15830590755e5b908324b57.jpeg", "product": { "id": 30, "goods_id": 17, "barcode": null, "sn": "P5561620313420", "price": "18.50", "mktprice": "25.00", "marketable": 1, "stock": 425, "spes_desc": null, "is_defalut": 1, "image_id": "70b77f674c9ec0c4c60f05da1e14a37c", "isdel": null, "name": "得力科学计算器多功能学生用函数计算机工程考试专用大学会计金融可爱便携大学生中学生中级会计复数统计学", "bn": "G5561620313382", "image_path": "https://demo.jihainet.com/static/uploads/images/2020/03/01/15830590755e5b908324b57.jpeg", "total_stock": 621, "grade_price": [], "grade_info": [], "amount": "18.50", "promotion_list": [], "promotion_amount": 0 }, "album": ["https://demo.jihainet.com/static/uploads/images/2020/03/01/15830590755e5b908324b57.jpeg", "https://demo.jihainet.com/static/uploads/images/24/98/d0/croppedImg_1853052168.jpeg", "https://demo.jihainet.com/static/uploads/images/ca/6c/5b/croppedImg_205587981.jpeg", "https://demo.jihainet.com/static/uploads/images/ea/03/10/croppedImg_1797041167.jpeg", "https://demo.jihainet.com/static/uploads/images/e3/95/97/croppedImg_1043475139.jpeg", "https://demo.jihainet.com/static/uploads/images/d8/af/93/croppedImg_726440366.jpeg"], "isfav": "false", "brand": { "id": 29, "name": "得力", "logo": "" } }, { "id": 15, "bn": "G5561585655170", "name": "红木质签字笔水笔黑笔 金属黄铜中性笔 实木制高档商务男士高端笔礼物学生用 古风黑色签单笔定制刻字logo", "brief": "", "price": "27.00", "mktprice": "30.00", "image_id": "c80e0172909e2ffa62aef406c4f92918", "goods_cat_id": 8, "goods_type_id": 3, "brand_id": 0, "is_nomal_virtual": 1, "marketable": 1, "stock": 497, "weight": "30.00", "unit": "支", "intro": "<p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/7d/ce/79/5cc1183352866.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/ea/78/02/5cc118339e221.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/5b/d5/7b/5cc11833a5426.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/c8/08/c9/5cc11833c11d4.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/04/ac/8a/5cc1183401f2e.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/90/f1/ab/5cc118341ffd2.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/f7/f4/c6/5cc118342c695.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/29/b5/40/5cc1183443631.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/9d/f6/74/5cc118346e41f.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/70/7d/16/5cc118347daa3.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/4f/8a/bc/5cc11834855a6.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/0a/80/50/5cc11834a5360.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/0e/29/8e/5cc11834b1071.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/36/85/73/5cc11834cf94e.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/c1/a0/93/5cc11834e7193.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/7a/5a/f4/5cc1183513cb3.jpg\"/></p><p style='overflow:hidden'><br/></p>", "spes_desc": "", "params": "a:1:{s:6:\"品牌\";s:9:\"雅轩斋\";}", "comments_count": 2, "view_count": 0, "buy_count": 783, "uptime": 1571718574, "downtime": null, "sort": 98, "is_recommend": 1, "is_hot": 2, "label_ids": [], "new_spec": null, "ctime": null, "utime": 1571718513, "isdel": null, "cat_name": "优选办公", "image_url": "http://demo.jihainet.com/static/uploads/images/49/2f/8c/5cc1174b68aba.jpg", "product": { "id": 28, "goods_id": 15, "barcode": null, "sn": "P5561585655234", "price": "27.00", "mktprice": "30.00", "marketable": 1, "stock": 242, "spes_desc": null, "is_defalut": 1, "image_id": "c80e0172909e2ffa62aef406c4f92918", "isdel": null, "name": "红木质签字笔水笔黑笔 金属黄铜中性笔 实木制高档商务男士高端笔礼物学生用 古风黑色签单笔定制刻字logo", "bn": "G5561585655170", "image_path": "http://demo.jihainet.com/static/uploads/images/49/2f/8c/5cc1174b68aba.jpg", "total_stock": 465, "grade_price": [], "grade_info": [], "amount": "27.00", "promotion_list": { "28": { "name": "test", "type": 2 } }, "promotion_amount": "3.00" }, "album": ["http://demo.jihainet.com/static/uploads/images/49/2f/8c/5cc1174b68aba.jpg", "http://demo.jihainet.com/static/uploads/images/32/09/4f/5cc1174b71e68.jpg", "http://demo.jihainet.com/static/uploads/images/34/a9/61/5cc1174b7837a.jpg", "http://demo.jihainet.com/static/uploads/images/a8/52/65/5cc1174b8bfe0.jpg", "http://demo.jihainet.com/static/uploads/images/10/29/27/5cc1174b96f15.jpg"], "isfav": "false" }, { "id": 16, "bn": "G5561615304235", "name": "得力DL-2135计算器语音大按键太阳能银行财务专用计算机办公用品大号得力计算器多功能大屏12位显示键盘按键", "brief": "大气 操作便捷 大品牌 值的信赖", "price": "35.00", "mktprice": "46.00", "image_id": "171a563c636fc596a5f97a378dc2a378", "goods_cat_id": 8, "goods_type_id": 3, "brand_id": 29, "is_nomal_virtual": 1, "marketable": 1, "stock": 217, "weight": "110.00", "unit": "个", "intro": "<p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/8a/56/13/5cc123d0ebb8e.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/5e/aa/2a/5cc123d102b76.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/ad/93/13/5cc123d10b7d6.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/fb/12/7e/5cc123d1240be.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/fe/69/96/5cc123d13a5af.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/47/a2/39/5cc123d14a7ac.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/b2/fb/9e/5cc123d173946.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/08/e3/25/5cc123d17b93a.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/9d/0c/ce/5cc123d18f81f.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/cc/77/6e/5cc123d19c970.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/2e/47/9d/5cc123d1abe8f.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/8c/a2/d3/5cc123d1bd2b9.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/07/de/cf/5cc123d1c99fc.jpg\"/></p><p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/f2/dc/b1/5cc123d1d7782.jpg\"/></p><p style='overflow:hidden'><br/></p>", "spes_desc": "", "params": "a:1:{s:6:\"品牌\";s:6:\"得力\";}", "comments_count": 0, "view_count": 0, "buy_count": 374, "uptime": 1571718574, "downtime": null, "sort": 99, "is_recommend": 1, "is_hot": 2, "label_ids": [], "new_spec": null, "ctime": null, "utime": 1571718514, "isdel": null, "cat_name": "优选办公", "image_url": "http://demo.jihainet.com/static/uploads/images/5c/00/1c/5cc122c0377d6.jpg", "product": { "id": 29, "goods_id": 16, "barcode": null, "sn": "P5561615304283", "price": "35.00", "mktprice": "46.00", "marketable": 1, "stock": 129, "spes_desc": null, "is_defalut": 1, "image_id": "171a563c636fc596a5f97a378dc2a378", "isdel": null, "name": "得力DL-2135计算器语音大按键太阳能银行财务专用计算机办公用品大号得力计算器多功能大屏12位显示键盘按键", "bn": "G5561615304235", "image_path": "http://demo.jihainet.com/static/uploads/images/5c/00/1c/5cc122c0377d6.jpg", "total_stock": 208, "grade_price": [], "grade_info": [], "amount": "35.00", "promotion_list": [], "promotion_amount": 0 }, "album": ["http://demo.jihainet.com/static/uploads/images/5c/00/1c/5cc122c0377d6.jpg", "http://demo.jihainet.com/static/uploads/images/cd/1f/87/5cc122c0428c1.jpg", "http://demo.jihainet.com/static/uploads/images/bd/8c/3c/5cc122c048d73.jpg", "http://demo.jihainet.com/static/uploads/images/3a/ac/88/5cc122c06399a.jpg", "http://demo.jihainet.com/static/uploads/images/03/48/79/5cc122c06a857.jpg"], "isfav": "false", "brand": { "id": 29, "name": "得力", "logo": "" } }, { "id": 14, "bn": "G5561572302091", "name": "得力中性笔按动批发黑色水笔红笔签字笔0.5中性笔办公用品文具笔 学生用水笔", "brief": "", "price": "8.50", "mktprice": "10.00", "image_id": "d96f88213abc4c19795edb4cc15c23bd", "goods_cat_id": 8, "goods_type_id": 3, "brand_id": 29, "is_nomal_virtual": 1, "marketable": 1, "stock": 1000, "weight": "12.00", "unit": "支", "intro": "<p style='overflow:hidden'><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/65/fd/dd/5cc10e9a357ab.jpg\" alt=\"5cc10e9a357ab.jpg\"/><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/cd/ec/9f/5cc10e9a52f01.jpg\" alt=\"5cc10e9a52f01.jpg\"/><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/81/b4/9b/5cc10e9a5ecb7.jpg\" alt=\"5cc10e9a5ecb7.jpg\"/><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/57/1d/fa/5cc10e9a656a4.jpg\" alt=\"5cc10e9a656a4.jpg\"/><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/57/a8/7c/5cc10e9a758c6.jpg\" alt=\"5cc10e9a758c6.jpg\"/><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/ff/7e/86/5cc10e9aa44b5.jpg\" alt=\"5cc10e9aa44b5.jpg\"/><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/34/95/44/5cc10e9a95ba6.jpg\" alt=\"5cc10e9a95ba6.jpg\"/><img style='max-width: 100%;float:left' src=\"http://demo.jihainet.com/static/uploads/images/7b/c1/5c/5cc10e9aab7dc.jpg\" alt=\"5cc10e9aab7dc.jpg\"/></p>", "spes_desc": "", "params": "a:1:{s:6:\"品牌\";s:6:\"得力\";}", "comments_count": 1, "view_count": 0, "buy_count": 111, "uptime": 1571718574, "downtime": null, "sort": 99, "is_recommend": 1, "is_hot": 1, "label_ids": [], "new_spec": null, "ctime": null, "utime": 1571718534, "isdel": null, "cat_name": "优选办公", "image_url": "http://demo.jihainet.com/static/uploads/images/6c/0b/33/5cc10de3cd32f.jpg", "product": { "id": 27, "goods_id": 14, "barcode": null, "sn": "P5561572302165", "price": "8.50", "mktprice": "10.00", "marketable": 1, "stock": 948, "spes_desc": null, "is_defalut": 1, "image_id": "d96f88213abc4c19795edb4cc15c23bd", "isdel": null, "name": "得力中性笔按动批发黑色水笔红笔签字笔0.5中性笔办公用品文具笔 学生用水笔", "bn": "G5561572302091", "image_path": "http://demo.jihainet.com/static/uploads/images/6c/0b/33/5cc10de3cd32f.jpg", "total_stock": 995, "grade_price": [], "grade_info": [], "amount": "8.50", "promotion_list": [], "promotion_amount": 0 }, "album": ["http://demo.jihainet.com/static/uploads/images/6c/0b/33/5cc10de3cd32f.jpg", "http://demo.jihainet.com/static/uploads/images/5e/4d/32/5cc10de41d995.jpg", "http://demo.jihainet.com/static/uploads/images/17/92/16/5cc10de431d5a.jpg", "http://demo.jihainet.com/static/uploads/images/b0/95/01/5cc10de408aaf.jpg", "http://demo.jihainet.com/static/uploads/images/ca/29/93/5cc10de40ea13.jpg"], "isfav": "false", "brand": { "id": 29, "name": "得力", "logo": "" } }, { "id": 12, "bn": "G5554712717243", "name": "测试多规格商品", "brief": "", "price": "0.10", "mktprice": "2.00", "image_id": "9805346722b8180a7122bf4755170a58", "goods_cat_id": 7, "goods_type_id": 2, "brand_id": 15, "is_nomal_virtual": 1, "marketable": 1, "stock": 6080905, "weight": "0.00", "unit": "", "intro": "<p style='overflow:hidden'>test</p><p style='overflow:hidden'>sdfsdfsdfsdf</p>", "spes_desc": { "颜色": { "1": "黑色", "2": "白色", "3": "黄色" }, "规格": { "11": "规格一", "12": "规格二", "13": "规格三" } }, "params": "", "comments_count": 0, "view_count": 0, "buy_count": 79, "uptime": 1571718574, "downtime": 1558085745, "sort": 100, "is_recommend": 2, "is_hot": 2, "label_ids": [], "new_spec": "a:8:{i:1;a:1:{i:0;s:6:\"黑色\";}i:2;a:1:{i:0;s:6:\"白色\";}i:3;a:1:{i:0;s:6:\"黄色\";}i:4;a:1:{i:0;s:6:\"棕色\";}i:11;a:1:{i:0;s:9:\"规格一\";}i:12;a:1:{i:0;s:9:\"规格二\";}i:13;a:1:{i:0;s:9:\"规格三\";}i:14;a:1:{i:0;s:7:\"规格4\";}}", "ctime": null, "utime": 1571718534, "isdel": null, "cat_name": "办公用品", "image_url": "http://demo.jihainet.com/static/uploads/images//66/1e/93/5cac65a0c3470.jpg", "product": { "id": 17, "goods_id": 12, "barcode": null, "sn": "234-1", "price": "0.10", "mktprice": "2.00", "marketable": 1, "stock": 675627, "spes_desc": "颜色:黑色,规格:规格一", "is_defalut": 1, "image_id": "", "isdel": null, "name": "测试多规格商品", "bn": "G5554712717243", "image_path": "http://demo.jihainet.com/static/uploads/images//66/1e/93/5cac65a0c3470.jpg", "total_stock": 675654, "grade_price": [], "grade_info": [], "default_spes_desc": { "颜色": { "黑色": { "name": "黑色", "is_default": true }, "白色": { "name": "白色", "product_id": 18 }, "黄色": { "name": "黄色", "product_id": 19 } }, "规格": { "规格一": { "name": "规格一", "is_default": true }, "规格二": { "name": "规格二", "product_id": 20 }, "规格三": { "name": "规格三", "product_id": 23 } } }, "amount": "0.10", "promotion_list": [], "promotion_amount": 0 }, "album": ["http://demo.jihainet.com/static/uploads/images//66/1e/93/5cac65a0c3470.jpg"], "isfav": "false", "brand": { "id": 15, "name": "薇咔拉", "logo": "fcf3bc0c3842963e0ccd606312263f9c" } }]
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
  toDetails(value) {
    console.log("value", value.currentTarget.dataset.id)

    wx.navigateTo({
      url: '../goods/details/basics?id=' + value.currentTarget.dataset.id,
    })
  },


  //以下是模板内容

  _id: 0,
  _fallNum: 2,



  themeChange(value) {

    console.log("themeChange =", value)
    this.setData({
      skin: value.currentTarget.dataset.type
    })


  },







  _reRender() {
    this.setData({
      show: false,
      isEnd: false,
      items: [],
      fallNum: this._fallNum
    }, () => {
      this.setData({
        show: true
      }, () => {
        this._id = 0;
        this._render();
      });
    });
  },

  _render() {

    if (this.data.isEnd) {
      return;
    }

    wx.showLoading({
      title: '数据加载中'
    });

    this._getItems().then(({ isEnd, data }) => {
      wx.hideLoading();
      // 优化数据的添加
      let items = this.data.items;
      let index = items.length++;
      let newObj = {};
      data.forEach(item => {
        newObj[`items[${index++}]`] = item;
      });
      if (isEnd) newObj.isEnd = isEnd;
      this.setData(newObj);
    });
  },

  /**
   * 模拟获取数据
   */
  _getItems() {
    let colors = ['#f37b1d', '#fbbd08', '#39b54a', '#fadbd9', '#39b54a', '#8799a3', '#a5673f', '#333333', '#666666', '#ffffff', '#e8f4d9', '#fde6d2', '#cce6ff', '#d2f1f0'];
    let data = [];
    // 每次加载数据长度
    let dataLen = 13;
    // 数据加载次数（模拟数据完结）
    let dataTimes = 8;
    for (let i = 0; i < dataLen; i++) {
      data.push({
        id: this._id++,
        height: this._getHeight(),
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          isEnd: this._id >= dataLen * dataTimes,
          data
        });
      }, 250);
    });
  },

  _getHeight() {
    return this.data.isTile ? 300 : Math.floor(Math.random() * 350 + 200);
  },

  handleInputFallNum(e) {
    this._fallNum = parseInt(e.detail.value.trim());
  },

  handleChange() {
    if (typeof this._fallNum === 'number' && this._fallNum !== this.data.fallNum) {
      this._reRender();
    }
  },

  handleChangeTile() {
    this.setData({
      isTile: !this.data.isTile
    }, () => {
      this._reRender();
    });
  },
  tabSwiperBindchange(value) {
    console.log("tabSwiperBindchange =", value)
    this.setData({
      tabSwiperCurrent: value.detail.current
    })
  },
  tabSwiperTabCilck(value) {
    console.log("tabSwiperTabCilck =", value)
    this.setData({
      tabSwiperCurrent: value.currentTarget.dataset.current
    })
  },

  imageTabSwiperBindchange(value) {
    console.log("imageTabSwiperBindchange =", value)
    this.setData({
      imageTabSwiperCurrent: value.detail.current
    })
  },
  imageTabSwiperTabCilck(value) {
    console.log("imageTabSwiperTabCilck =", value)
    this.setData({
      imageTabSwiperCurrent: value.currentTarget.dataset.current
    })
  },
  swiperChangeClick(value) {

    console.log("swiperChangeClick value=", value)


    //  swiperCurrent

    var swiperCurrent = this.data.swiperCurrent

    switch (value.currentTarget.dataset.type) {
      case "last":

        swiperCurrent--
        if (swiperCurrent < 0) {
          swiperCurrent = 0
        }

        break;

      case "next":
        if (swiperCurrent < this.data.swiperItemContent.length - 1) {
          swiperCurrent++
        }



        break;
    }

    this.setData({
      swiperCurrent: swiperCurrent
    })


  },





  // 倒计时
  countDown: function () {
    var that = this;
    var nowTime = new Date().getTime();//现在时间（时间戳）
    var endTime = new Date(that.data.endTime).getTime();//结束时间（时间戳）
    var time = (endTime - nowTime) / 1000;//距离结束的毫秒数
    // 获取天、时、分、秒
    let day = parseInt(time / (60 * 60 * 24));
    let hou = parseInt(time % (60 * 60 * 24) / 3600);
    let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
    let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
    // console.log(day + "," + hou + "," + min + "," + sec)
  
    that.setData({
      day: that.timeFormat(day),
      hou: that.timeFormat(hou),
      min: that.timeFormat(min),
      sec: that.timeFormat(sec)
    })
    // 每1000ms刷新一次
    if (time > 0) {
      that.setData({
        countDown: true
      })
      setTimeout(this.countDown, 1000);
    } else {
      that.setData({
        countDown: false
      })
    }
  },
  //小于10的格式化函数（2变成02）
  timeFormat(param) {
    return param < 10 ? '0' + param : param;
  },
  //小于0的格式化函数（不会出现负数）
  timeFormin(param) {
    return param < 0 ? 0 : param;
  },

  

})