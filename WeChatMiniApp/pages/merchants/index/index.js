// pages/merchants/index/index.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
        var that = this;


    //检查是否已经是VIP

    if (app.globalData.userInfo) {
      // console.log("用户界面触发1");
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      //    console.log("用户界面触发2");
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        that.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      //  console.log("用户界面触发3");
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
    },

    clickToJump(value) {
        console.log("clickToJump value=", value)


        switch (value.currentTarget.dataset.name) {
            case "base-info":
                wx.navigateTo({
                    url: '../base-info/base-info'
                })
                break;
            case "commodity-management":
                wx.navigateTo({
                    url: '../commodity-management/commodity-management'
                })
                break;
            case "order-list":
                wx.navigateTo({
                    url: '../order/list/list'
                })
                break;
            case "fund-management":
                wx.navigateTo({
                    url: '../fund-management/fund-management'
                })
                break;
            case "shop-setting":
                wx.showToast({
                    title: '触发此处',
                })
                wx.navigateTo({
                    url: '../shop-setting/shop-setting'
                })
                break;
            case "activity-management":
                wx.showToast({
                    title: '触发此处',
                })
                wx.navigateTo({
                    url: '../activity-management/index/index'
                })
                break;
        }


    }
})