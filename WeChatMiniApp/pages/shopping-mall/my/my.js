const app = getApp();
const cardList = require("../../../utils/cardList.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {    
    skin: app.data.skin,
    intent1: '跳转至活动界面',
    intent2: '跳转至表单界面',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    currentTab: 0,
    selectOptions: [{
      id: '000',
      value: 'consumer',
      name:"消费者"
    }, {
      id: '001',
        value: 'retailer',
        name: "经销商"
    }, {
      id: '002',
        value: 'wholesaler',
        name: "代理商"
    }, {
      id: '003',
        value: 'brand',
        name: "供应商"
    }],
    role: "consumer",
    tabs: [{
      id: 0,
      name: "商家",
      isShow: false
    }, {
      id: 1,
      name: "资料",
      isShow: true
    }, {
      id: 2,
      name: "卡券",
      isShow: false
    }],
    tabsCount: 0,
    isAllowInvitation:false
    

  },
  // test(){
  //   wx.getUserInfo({
  //     success: function (res) {
  //       console.log("登录res=",res)
  //       var userInfo = res.userInfo
  //       var nickName = userInfo.nickName
  //       var avatarUrl = userInfo.avatarUrl
  //       var gender = userInfo.gender //性别 0：未知、1：男、2：女
  //       var province = userInfo.province
  //       var city = userInfo.city
  //       var country = userInfo.country
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  
    // 获取用户信息
    wx.getSetting({
      success: res => {
        // console.log(res.authSetting)

        if (res.authSetting['scope.userInfo']) {
          //console.log("有授权");
        } else {
          // console.log("没有授权");
          this.dialog = this.selectComponent("#dialog");
          this.dialog.showDialog();

        }
      }
    })
  },


  getUserInfo: function(e) {
    console.log("获取用户信息权限",e);
    if (e.detail.errMsg == "getUserInfo:ok") {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })

    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;


    //检查是否已经是VIP

 //  console.log("app.globalData=",app.globalData)


    that.judgementAuthority()
    if (app.globalData.userInfo) {
      // console.log("用户界面触发1");
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
        //  console.log("用户界面触发2");
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        that.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
        console.log("用户界面触发3");
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    cardList.getCardList(that,false)
  
  },


  hideDialog: function() {
    this.dialog.hideDialog();
  },

  bindGetUserInfo: function(e) {
    //    console.log("用户点击用户信息授权同意或拒绝按钮",e);
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
    this.login();
  },
  login: function() {
    var that = this;
    wx.getSetting({
      success: function(res) {
        //     console.log("wx.getSetting",res);
        if (res.authSetting['scope.userInfo']) { // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          //        console.log("已经授权，可以直接调用 getUserInfo 获取头像昵称");
          wx.getUserInfo({
            success: function(res) {
                    console.log(res);
              app.globalData.userInfo = res.userInfo;
              //      console.log(res.userInfo)
              that.setData({
                userInfo: res.userInfo,
                hasUserInfo: true
              })
            }
          })
        } else {

        }
      }
    })
  },
  readRulesForMembers() {
    wx.navigateTo({
      url: '../rules_for_members/rules_for_members'
    })
  },

  intoMembershipCardDetails(value) {
    console.log("点击会员卡的参数",value)

    wx.navigateTo({
      url: '../membership-card-details/membership-card-details?state=query&brand=' + value.currentTarget.dataset.brand + "&relationBrand=" + value.currentTarget.dataset.relationbrand
    })

  },
  swiperTab: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage() {
  //   var that = this;

  //   var activityType;
  //   var imageUrl;
  //   switch (app.data.activityMerchantCode) {
  //     case "MLFS.QAD":
  //       activityType = "阳光海浪，俏安朵邀您帆船体验！"
  //       imageUrl = 'https://pic.downk.cc/item/5e63bfbb98271cb2b8fcda05.jpg'
  //       break;
  //     case "MLFS.YBK":
  //       activityType = "阳光海浪，优布客邀您帆船体验！"
  //       imageUrl = 'https://pic.downk.cc/item/5e57ae6f6127cc0713023a90.png'
  //       break;
  //   }


  //   return {
  //     title: activityType,
  //     imageUrl: imageUrl,
  //     path: '/pages/home/home?shareid=' + that.data.id + "&userToken=" + app.data.userToken +
  //       "&brand=" + app.data.activityMerchantCode

  //   }

  // },
  // showPopup(e) {


 
  // },
  // change(value) {

  //   console.log("权限", value)

    
  //   this.setData({
  //     role: value.detail.value,
  //   })

  //   if (this.data.role == "retailer" || this.data.role == "wholesaler" || this.data.role == "brand") {
  //     this.setData({
  //       brandUpperCase: app.data.activityMerchantCode
  //     })
  //   }



  //   this.judgementAuthority()
  // },

  judgementAuthority() {
    var that = this
    // that.setData({
    //   'tabs[0].isShow': false,

    //   'tabs[2].isShow': false
    // })
    
    // if (that.data.role == "retailer" || that.data.role == "wholesaler" || that.data.role == "brand") {
    //   that.setData({
    //     'tabs[0].isShow': true,
    //   })
    // }

    wx.getStorage({
      key: 'userModel',
      success: function(res) {
        console.log("获取赠品模型成功", res)
        if (res.data.brand.MLFS) {
          if (res.data.brand.MLFS.QAD) {
            that.setData({
              'tabs[2].isShow': true,
              isVIP: res.data.brand.MLFS.QAD.isVIP,
           
            
            })
            
            if (res.data.brand.MLFS.QAD.role){
              if (res.data.brand.MLFS.QAD.role !="consumer"){
                that.setData({
                  'tabs[0].isShow': true,
                })
                if (res.data.brand.MLFS.QAD.role == 'wholesaler' || res.data.brand.MLFS.QAD.role == 'brand'){
                  console.log("触发允许邀请下一级")
                  that.setData({
                    isAllowInvitation: true,
                  })
                } else {
                  console.log("不触发允许邀请下一级", res.data.brand.MLFS.QAD.role == 'brand')
                }
              }
            }
          } 
           if (res.data.brand.MLFS.YBK) {
            that.setData({
              'tabs[2].isShow': true,
              isVIP: res.data.brand.MLFS.YBK.isVIP,
            
           
            })

            if (res.data.brand.MLFS.YBK.role) {
              if (res.data.brand.MLFS.YBK.role != "consumer") {
                that.setData({
                  'tabs[0].isShow': true,
                })
              }
              if (res.data.brand.MLFS.YBK.role == 'wholesaler' || res.data.brand.MLFS.YBK.rolerole == 'brand') {
                console.log("触发允许邀请下一级")
                that.setData({
                  isAllowInvitation: true,
                })
              }else{
                console.log("不触发允许邀请下一级", res.data.brand.MLFS.YBK.role)
              }
            }
          }
        }

       
          that.setData({
            userModel: res.data
          })
        


      },
      complete(res) {
        let count = 0;
        for (let i = 0; i < that.data.tabs.length; i++) {

          if (that.data.tabs[i].isShow) {
            count++;
          }
        }
        count = count - 1

        that.setData({
          tabsCount: count
        })

       




      }
    })
  },
  intoNavigationActivitie(){

    var that=this
    console.log("intoNavigationActivitie userModel=", that.data.userModel)
    if (that.data.userModel){
      if (that.data.userModel.brand.GJNXFXHHJLB.HHJLB) {

        if (that.data.userModel.brand.GJNXFXHHJLB.HHJLB.length > 1) {
          wx.navigateTo({
            url: '../activity/activity-management/activity-management',
          })

        } else if (that.data.userModel.brand.GJNXFXHHJLB.HHJLB.length == 1) {
          wx.navigateTo({
            url: '../activity/navigation_activity/navigation_activity?brand=' + that.data.userModel.brand.GJNXFXHHJLB.HHJLB[0].relationBrand,
          })

        }


      }
    }
  },
  clickToJump(value){

    console.log("clickToJump value=", value.currentTarget.dataset.name)
    switch (value.currentTarget.dataset.name){
      case "我的订单":
      wx.navigateTo({
        url: '../order/list/list?query='+"全部",
      })
      break;
      case "待付款":
        wx.navigateTo({
          url: '../order/list/list?query=' +"待付款",
        })
        break;
      case "待发货":
        wx.navigateTo({
          url: '../order/list/list?query=' + "待发货",
        })
        break;
      case "待收货":
        wx.navigateTo({
          url: '../order/list/list?query=' + "待收货",
        })
        break;
      case "待评价":
        wx.navigateTo({
          url: '../order/list/list?query=' + "待评价",
        })
        break;
      case "退换货":
        wx.navigateTo({
          url: '../order/list/list?query=' + "退换货",
        })
        break;
      case "个人信息":
      console.log("触发此处")
        wx.navigateTo({
          url: '../user-information-form/user-information-form'
        })
        break;
      case "地址管理":

        wx.navigateTo({
          url: '../address/address-list/address-list'
        })


        break;
      case "赠品管理":
        wx.navigateTo({
          url: '../gift-management/gift-management'
        })
        break;
      case "航海报名":
      //需要着重判断
        // wx.navigateTo({
        //   url: 'ssssssssssssss'
        // })
        break;
      case "加盟邀请":
      //如果无权限则提示用无法邀请加盟
        wx.navigateTo({
          url: '../company/invitation/invite_next_level/invite_next_level'
        })
        break;
      case "合作宣言":
        wx.navigateTo({
          url: '../publicity/declaration/declaration'
        })
        break;
      case "VIP活动规则":
        wx.navigateTo({
          url: '../publicity/rule/rule'
        })
        break;
      case "大数据分析":
      //这里要着重判断
        // wx.navigateTo({
        //   url: 'ssssssssssssss'
        // })
        break;
        

      case "首页":
        wx.reLaunch({
          url: '../home/home'
        })
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
      case "运单查询":
        wx.reLaunch({
          url: '../logistics/query-bill/query-bill'
        })
        break;
        case "分销模块":
          wx.navigateTo({
            url: '../../distribution/index/index'
          })
          break;
  
          case "店铺管理":
            wx.navigateTo({
              url: '/pages/merchants/index/index'
            })
            break;
        
     

    default :
        console.error("跳转错误，没有" + value.currentTarget.dataset.name)
    break;


    }

  }

})