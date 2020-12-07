const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        skin: app.data.skin,
        brand: "",
        isAccepted: false,
        inviter: {

        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this

        const eventChannel = this.getOpenerEventChannel()

        // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
        eventChannel.on('invitationInfo', function(data) {
            console.log("接受邀请 invitationInfo的参数=", data)

            let brandName = ""
            switch (data.brand) {
                case "MLFS.QAD":
                    brandName = "俏安朵"
                    break;

                case "MLFS.YBK":
                    brandName = "优布客"
                    break;

            }

            that.setData({
                brandName: brandName,
                brand: data.brand,
                userToken: data.userToken,
                inviterId: data.inviterId,
            })
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

        var that = this
        wx.getSetting({
            complete(res) {
                // console.log("getSetting complete", res);
                if (res.authSetting['scope.userInfo']) {

                    wx.getUserInfo({
                        success: res => {
                            //   console.log("获取用户信息成功", res);
                            that.setData({
                                userInfo: res.userInfo,
                                isNeedLogin: false

                            })
                            that.beInvitedRequest()
                        }
                    })
                } else {
                    that.setData({
                        isNeedLogin: true
                    })
                }
            }
        })

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        var that = this
    },

    getUserInfo: function(e) {

        console.log("获取用户信息权限", e);
        var that = this
        if (e.detail.errMsg == "getUserInfo:ok") {
            app.globalData.userInfo = e.detail.userInfo
            this.setData({
                isNeedLogin: false,
                userInfo: e.detail.userInfo,
            })
            that.beInvitedRequest()
        }
    },


    beInvitedRequest() {
        

    },
    back() {
        wx.navigateBack({
            delta: 1
        })
    }
})