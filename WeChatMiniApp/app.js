//app.js
//原版的主题背景色 #008842
var QQMapWX = require('/utils/qqmap/qqmap-wx-jssdk.js');
var config = require('/config/config.js');
//航海俱乐部代码 HHJLB

//国际化
import locales from '/config/locales.js'
import T from '/config/wxapp-i18n.js'
 
// 数据注入
T.registerLocale(locales)
try {
  // 获取系统设置的语言格式
  var value = wx.getStorageSync('language')
  console.log("触发此处",value)
  if (value) {
    T.setLocale(value)
  } else {
    T.setLocale('zh')//默认显示繁体
  }
} catch (e) {
  T.setLocale('zh')//默认显示繁体
}
wx.T = T

App({
  data: {
    userToken: "",
    latitude: 0.0,
    longitude: 0.0,
    city: "",
    state: "",
    //cacheVersion: 1,
    coordinate: {
    },
    userProfile: {
    },
    sessionKey: "",
    sessionKeyTime: 0,
    os: "",
    userModel: {
    },
  },
  onLaunch: function(e) {
    for (var value in config) {
      // console.log('a', value);
      this.data[value] = config[value]
    }
    // wx.setNavigationBarColor({
    //   frontColor: '#ffffff',
    //   backgroundColor: '#ff0000',
    //   animation: {
    //     duration: 400,
    //     timingFunc: 'easeIn'
    //   }
    // })
   // console.log("this.data=", this.data)
   // console.log('app.js onLaunch', e)
    if (this.allowMultipleMerchants == true) {
      try {
        var activityMerchantCode = wx.getStorageSync('activityMerchantCode')

        if (activityMerchantCode) {
          //   console.log("activityMerchantCode=", activityMerchantCode)
          this.data.activityMerchantCode = activityMerchantCode
          // Do something with return value
        }
      } catch (e) {
        // Do something when catch error
      }
    }
    this.data.entryParameters = JSON.stringify(e)
    var that = this;
    if (e.query.brand) {
      // console.log("品牌参数", e.query)
      that.data.activityMerchantCode = e.query.brand
    }
    wx.getStorage({
      key: "userToken",
      success(res) {
        //  console.log("userToken=", res.data)
        if (res.data != "") {
          that.data.userToken = res.data

        }
      }
    })
    wx.getStorage({
      key: "userID",
      success(res) {
        console.log("userID=", res.data)
        if (res.data != "") {
          that.data.userID = res.data
          that.data.userProfile.userID = res.data
        }
      }
    })
    /////////////////////////
    //以下是用户数据模型
    wx.getStorage({
      key: 'userModel',
      success: function(res) {
        //   console.log("app.js 获取userModel成功", res)
        that.data.userModel = res.data
      }
    })
    /////////////////////////
    wx.getStorage({
      key: "login-address-city",
      success(res) {
        //console.log("获取login-address-city成功", res)
        that.data.city = res.data
        //        console.log("login-address-city=", res.data)
        if (res.data != "") {
          that.data.city = res.data
        }
      }
    })
    wx.getStorage({
      key: "login-address-state",
      success(res) {
        //  console.log("获取login-address-state成功", res)
        // console.log("login-address-state=", res.data)
        if (res.data != "") {
          that.data.state = res.data
        }
      }
    })

    //////////////////////
    wx.getSystemInfo({
      success: function(res) {
        //  console.log("系统信息", res);
        if (res.platform) {
          if (res.platform != "devtools") {
            that.data.os = res.platform
          } else {
            that.data.os = "iOS"
          }
        }
      },
    })
    // wx.getStorageInfo({
    //   success(res) {
    //     console.log("获取所有缓存信息", res)
    //   }
    // })
    if (e.query.userToken && e.query.brand) {
      this.userLogin("share", 0, e.query.userToken, 8, e.query.brand);
    } else {
      this.userLogin("notShare", "", "", "", "");
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
        //   console.log("已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框");
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log("获取用户信息成功", res);
              this.globalData.userInfo = res.userInfo
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
                  console.log("已经授权");
              }
            }
          })
        } else {
            console.log("没有授权");
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  onError(value) {
    console.error('小程序错误', value)
  },
  onShow(value) {
    //console.log("app.show的参数", value);

    var that = this
    if (value.query.brand) {
      // console.log("品牌参数", value.query)

      if (that.allowMultipleMerchants == true) {
        that.data.activityMerchantCode = value.query.brand
        try {
          wx.setStorageSync('activityMerchantCode', that.data.activityMerchantCode)
        } catch (e) {
          console.error("储存activityMerchantCode  错误", e)
        }
      }
      that.judgementScene(value)
    }


  },
  judgementScene(value) {
    var that = this
    //转发过来的情况下，判断分享场景
    console.log("触发judgementScene", value)
    switch (value.scene) {
      case 1007:
      case 1008:

        if (value.query.type) {
          if (value.query.type == "inviter") {
            //   console.log("创建跳转页面回调")

            that.invitedToJumpCallback = res => {
              //      console.log("app.js 接收到接受邀请的回调 回调成功")

              wx.navigateTo({
                url: '/pages/company/invitation/accept/accept',

                success: function(res) {
                  // 通过eventChannel向被打开页面传送数据
                  res.eventChannel.emit('invitationInfo', value.query)
                }
              })
            }

          } else {
            that.invitedToJumpCallback = res => {
              //     console.log("这是重置后的 invitedToJumpCallback")

            }
          }
        } else {

          that.invitedToJumpCallback = res => {
            // console.log("这是重置后的 invitedToJumpCallback")

          }

        }
        break;
      default:
        //   console.log("场景数值没有被过滤  触发此处", value.scene)

        that.invitedToJumpCallback = res => {
          console.log("app.js 接收到接受邀请的回调 但拒絕跳转")
        }
        break;
    }
  },


  onPageNotFound(res) {

    wx.switchTab({
      url: 'pages/shopping-mall/home/home'
    }) // 如果是 tabbar 页面，请使用 wx.switchTab
  },

  userLogin: function(type, shareid, token, referrerType, brand) {
   
  },
  modifyUserModelBrand() {
    var that = this
    var brand = {
      MLFS: {}
    }
    var userModel = {}
    wx.getStorage({
      key: 'userModel',
      success: function(res) {
        //  console.log("获取赠品模型成功", res)
        userModel = res.data
        brand = res.data.brand
      },
      fail(res) {
        userModel.cacheVersion = that.data.cacheVersion
        brand.MLFS.QAD = {
          role: "consumer"
        }
        brand.MLFS.YBK = {
          role: "consumer"
        }
      },
      complete(res) {
        //   console.log('目前brand=', brand)
        console.log("从服务器获取的roleKvtList=", that.data.roleKvtList)
        if (that.data.roleKvtList) {
          for (let i = 0; i < that.data.roleKvtList.kvt.length; i++) {
            switch (that.data.roleKvtList.kvt[i].key) {
              case "MLFS.QAD":
                if (!brand.MLFS.QAD) {
                  brand.MLFS.QAD = {}
                }
                brand.MLFS.QAD.role = that.data.roleKvtList.kvt[i].value
                //   console.log("brand=", brand)
                break;
              case "MLFS.YBK":
                if (!brand.MLFS.YBK) {
                  brand.MLFS.YBK = {}
                }
                brand.MLFS.YBK.role = that.data.roleKvtList.kvt[i].value
                //  console.log("brand=", brand)
                break;
              default:
                console.log("default roleKvtList.kvt[" + i + "].key=", that.data.roleKvtList.kvt[i].key)
                break;
            }
          }
        }

        userModel.brand = brand
        wx.setStorageSync('userModel', userModel);
        if (that.getServerUserCacheReadyCallback) {
          //     console.log("app.js 发起getServerUserCacheReadyCallback回调");
          that.getServerUserCacheReadyCallback()
        }
      }
    })
  },
  uploadUserCache(userModel) {
    var that = this
    //此处上传用户缓存
   
  },
  getServerUserCache() {
    var that = this
    //此处获取用户缓存
  
    
  }
})