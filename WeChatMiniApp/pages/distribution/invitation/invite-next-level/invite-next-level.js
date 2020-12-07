const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        skin: app.data.skin,
        selectBrand: "MLFS.QAD",
        inviteButtonType: "",
        barndList: [],
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;

        app.loginInfoReadyCallback = res => {
            console.log("登陆成功后 触发roleKvtList更新")
            that.setData({
                roleKvtList: app.data.roleKvtList
            })

        }

        wx.hideShareMenu();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        var that = this
        wx.getSetting({
            complete(res) {
                console.log("getSetting complete", res);
                if (res.authSetting['scope.userInfo']) {

                    wx.getUserInfo({
                        success: res => {
                            console.log("获取用户信息成功", res);
                            that.setData({
                                userInfo: res.userInfo,
                                inviteButtonType: "",
                                inviteButtonName: "生成邀请",
                            })

                        },
                        complete(res) {
                            that.getInvitableList()
                        }
                    })

                } else {
                    that.setData({
                        inviteButtonType: "getUserInfo",
                        inviteButtonName: "登录",
                    })
                    that.getInvitableList()
                }

            }
        })

    },

    getInvitableList() {
        var that = this

        let barndList = []
        let roleKvtList = app.data.roleKvtList || that.data.roleKvtList
        let title = ""

        console.log("roleKvtList=", roleKvtList)


        for (let i = 0; i < roleKvtList.kvt.length; i++) {
            if (roleKvtList.kvt[i].key == "MLFS.QAD") {
                switch (roleKvtList.kvt[i].value) {
                    case "brand":
                        title = "俏安朵代理商邀请"
                        barndList.push({
                            brand: "MLFS.QAD",
                            image: "/image/qadLogo.jpg",
                            title: title
                        })
                        break;

                    case "wholesaler":
                        title = "俏安朵经销商邀请"
                        barndList.push({
                            brand: "MLFS.QAD",
                            image: "/image/qadLogo.jpg",
                            title: title
                        })
                        break;
                }
            } else if (roleKvtList.kvt[i].key == "MLFS.YBK") {
                switch (roleKvtList.kvt[i].value) {

                    case "brand":
                        title = "优布客代理商邀请"
                        barndList.push({
                            brand: "MLFS.YBK",
                            image: "/image/ybkLogo.jpg",
                            title: title
                        })
                        break;
                    case "wholesaler":
                        title = "优布客朵经销商邀请"
                        barndList.push({
                            brand: "MLFS.YBK",
                            image: "/image/ybkLogo.jpg",
                            title: title
                        })
                        break;
                }
            }
        }

        if (barndList.length > 0) {
            that.setData({
                selectBrand: barndList[0].brand
            })
        }

        if (barndList.length == 1 && that.data.userInfo) {
            console.log("检测到品牌为1,直接生成邀请")
            that.initiateInvitationRequest()
        } else {
            console.log("barndList.length=", barndList.length)
            console.log("that.data.userInfo=", that.data.userInfo)
        }
        console.log("最终 barndList=", barndList)

        that.setData({
            barndList: barndList
        })
    },


    /**
     * 用户点击右上角分享
     */
    onShareAppMessage(value) {

        console.log("触发转发", value)

        var that = this;

        console.log("当前用户数据", that.data.userInfo)

        var activityType;
        var imageUrl;
        switch (that.data.selectBrand) {
            case "MLFS.QAD":
                activityType = that.data.userInfo.nickName + "邀请您加入俏安朵销售大家庭！"
                imageUrl = '/image/qadLogo.jpg'

                console.log('that.data.selectBrand=', that.data.selectBrand)
                break;

            case "MLFS.YBK":

                activityType = that.data.userInfo.nickName + "邀请您加入优布客销售大家庭！"
                imageUrl = '/image/ybkLogo.jpg'

                console.log('that.data.selectBrand=', that.data.selectBrand)
                break;

            default:


                break;
        }
        //   console.log('that.data.selectBrand=', that.data.selectBrand)

        return {
            title: activityType,
            imageUrl: imageUrl,
            path: '/pages/distribution/index/index?' + "userToken=" + app.data.userToken +
                "&brand=" + that.data.selectBrand + "&type=inviter" + "&inviterId=" + that.data.inviterId


        }

    },

    selectBrand(value) {
        console.log(value)
        var that = this
        if (that.data.selectBrand != value.currentTarget.dataset.brand) {
            that.setData({
                selectBrand: value.currentTarget.dataset.brand,

            })

            if (that.data.userInfo) {
                that.setData({
                    selectBrand: value.currentTarget.dataset.brand,
                    inviteButtonType: "",
                    inviteButtonName: "生成邀请",
                })
            } else {

                that.setData({
                    selectBrand: value.currentTarget.dataset.brand,
                    inviteButtonType: "getUserInfo",
                    inviteButtonName: "登录",
                })
            }
        }
    },


    getUserInfo: function(e) {
        console.log("获取用户信息权限", e);
        var that = this
        if (e.detail.errMsg == "getUserInfo:ok") {
            app.globalData.userInfo = e.detail.userInfo
            this.setData({
                inviteButtonType: "",
                userInfo: e.detail.userInfo,

                inviteButtonName: "生成邀请",
            })

            if (that.data.barndList.length == 1) {
                console.log("检测到品牌数为1")
                that.initiateInvitationRequest()
            }

        }

    },
    judgeRequestInitiation() {
        var that = this

        if (that.data.inviteButtonName == "生成邀请") {
            that.initiateInvitationRequest()
        }
    },
    initiateInvitationRequest() {
      

    }



})