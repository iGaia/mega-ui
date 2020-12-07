// pages/activity/navigation_activity/successful_payment.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: app.data.skin,
    themeList: [],
    showSuccessButton:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this

    if (options.brand) {

      switch (options.brand) {
        case "MLFS.QAD":
          that.setData({
            brand: options.brand,
           
          })
          break;
        case "MLFS.YBK":
          that.setData({
            brand: options.brand,
          
          })
          break;
        case "LVI.LVI":
          that.setData({
            brand: options.brand,
           
          })
          break;
      }
    }

    if (options.type){

      if (options.type ="paySuccess"){
       that.setData({
         showSuccessButton:true
       })

      }
    }





  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this
    that.setData({
      themeList: [{
        phase: "第一期",
        title: "3月18-20日，美丽三亚 浪漫天涯-帆船冲浪之旅/三亚",
        isChecked: false,
        isAllowSelection: false,
        timeSequence: -1,
      }, {
        phase: "第二期",
        title: "3月28-30日，重回大航海时代-南海公海帆船之旅/三亚",
        isChecked: false,
        isAllowSelection: false,
        timeSequence: -1,
      },
      {
        phase: "第三期",
        title: "4月17-19日，上天入海 自由航行-VIP致臻体验之旅/三亚",
        isChecked: false,
        isAllowSelection: true,
        timeSequence: -1,
      },
      {
        phase: "第四期",
        title: "4月24-26日，上天入海 自由航行-VIP致臻体验之旅/三亚",
        isChecked: false,
        isAllowSelection: true,
        timeSequence: -1,
      },
      {
        phase: "第五期",
        title: "5月1-3日，阅尽千帆 仍是少年-VIP致臻自然之旅/三亚",
        isChecked: false,
        isAllowSelection: true,
        timeSequence: -1,
      },
      {
        phase: "第六期",
        title: "5月22-24日，速度与激情 赛帆驾驶体验/北京、秦皇岛",
        isChecked: false,
        isAllowSelection: true,
        timeSequence: -1,
      },
      {
        phase: "第七期",
        title: "6月12-14日，星空漂浮 夜航体验-音乐艺术梦想家/威海",
        isChecked: false,
        isAllowSelection: true,
        timeSequence: -1,
      },
      {
        phase: "第八期",
        title: "6月25-27日，粽情大海 亲子帆船体验-端午假期倾情推出/大连",
        isChecked: false,
        isAllowSelection: true,
        timeSequence: -1,
      },
      {
        phase: "第九期",
        title: "7月11-13日，掌舵未来 船长成长日记-纪念中国航海日/深圳",
        isChecked: false,
        isAllowSelection: true,
        timeSequence: -1,
      },
      {
        phase: "第十期",
        title: "7月25-27日，暑期亲子帆船训练营-人生智慧启迪/北京、秦皇岛",
        isChecked: false,
        isAllowSelection: true,
        timeSequence: -1,
      }
      ],
      showThemeList:[]


    })

    wx.getStorage({
      key: 'userModel',
      success: function(res) {
        console.log("成功获取界面 获取赠品模型成功", res)
        var showThemeList=[]

        if (res.data.brand.GJNXFXHHJLB) {
          if (res.data.brand.GJNXFXHHJLB.HHJLB) {
            for (let i = 0; i < res.data.brand.GJNXFXHHJLB.HHJLB.length; i++) {
              if (that.data.brand == res.data.brand.GJNXFXHHJLB.HHJLB[i].relationBrand) {

                for (let x = 0; x < res.data.brand.GJNXFXHHJLB.HHJLB[i].productInfo.phaseList.length; x++) {
                  that.setData({
                    ["themeList[" + parseInt(res.data.brand.GJNXFXHHJLB.HHJLB[i].productInfo.phaseList[x].id) + "].isChecked"]: true,
                    ["themeList[" + parseInt(res.data.brand.GJNXFXHHJLB.HHJLB[i].productInfo.phaseList[x].id) + "].DateOrder"]: x
                    
                  })
                  showThemeList.push(that.data.themeList[parseInt(res.data.brand.GJNXFXHHJLB.HHJLB[i].productInfo.phaseList[x].id)])
                }
                that.setData({
                  productList: res.data.brand.GJNXFXHHJLB.HHJLB[i].productInfo.productList,
                  contactsInfo: res.data.brand.GJNXFXHHJLB.HHJLB[i].contactsInfo,
                  showThemeList: showThemeList
                })
                console.log("themeList=", that.data.themeList)
                console.log("productList=", res.data.brand.GJNXFXHHJLB.HHJLB[i].productInfo.productList)
                break;
              }
            }




          }
        }


      }
    })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  toMyortoOrerComplete(){

    let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
    console.log("pages=", pages)
    var toOrderCompletecount=0
    var toMyCount=0
    var needToOrderComplete=false
    var needToMy = false
    for (let i = 0; i < pages.length;i++){
      if (pages[i].route =="pages/shopping-mall/order/complete"){
        needToOrderComplete=true
      }
      if (needToOrderComplete==true){
        toOrderCompletecount++
      }
      if (pages[i].route == "pages/shopping-mall/my/my") {
        needToMy = true
      }
      if (needToMy == true) {
        toMyCount++
      }
    }
    
    if (needToOrderComplete == true) {

      console.log("检测到有OrderComplete toOrderCompletecount-1=", toOrderCompletecount-1)

      wx.navigateBack({
        delta: toOrderCompletecount-1
      })
    } else if (needToMy == true) {
      console.log("检测到有My 跳转到我的界面 toMyCount=", toMyCount)
      wx.navigateBack({
        delta: toMyCount - 1
      })
    }else{
      wx.navigateBack({
        delta: 2
      })
    }

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
              url: '../../show-qrcode/show-qrcode',
            })

            break;
        }

      },
      fail(res) {
        console.log("showActionSheet fail", res)
      }
    })
  }

})