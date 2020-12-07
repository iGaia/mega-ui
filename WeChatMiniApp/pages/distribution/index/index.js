// pages/distribution/index/index.js

const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        roleKvtList: [],
        skin: app.data.skin,
        portraitImgURL: '',
        levelImgURL: '',
        inviteImgURL: '',
        userName: '微信昵称',
        userLevel: '初级分销员',
        totalCash: '0.00',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        interfaceText: {}
    },


    onShow: function (options) {



    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this
        that.setLang()

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
        }







        app.loginInfoReadyCallback = res => {
            console.log("登陆成功后 触发roleKvtList更新")
            that.setData({
                roleKvtList: app.data.roleKvtList
            })

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
    },

    clickJump(value) {

        console.log("clickJump value=", value)

        let url = ""

        switch (value.currentTarget.dataset.type) {
            case "invitation":
                url = "../invitation/invite-next-level/invite-next-level"
                break;

            case "brand":
                url = "../brand/brand-report/brand-report"
                break;

            case "wholesaler":
                url = "../wholesaler/wholesaler-report/wholesaler-report"
                break;

            case "retailer":
                url = "../retailer/retailer-report/retailer-report"
                break;

            case "declaration":
                url = "../publicity/declaration/declaration"
                break;

            case "rule":
                url = "../publicity/rule/rule"
                break;

            case "poster":
                url = "../poster/poster"
                break;

            case "distribution-center":
                url = "../distribution-center/distribution-center"
                break;

            case "accumulative-customer":
                url = "../accumulative-customer/accumulative-customer"
                break;

            case "level":
                url = "../level/level"
                break;
            case "team":
                url = "../team/team"
                break;
            case "approval":
                url = "../approval/approval"
                break;
            case "detail":
                url = "../detail/detail"
                break;
            case "manage":
                url = "../manage/manage"
                break;
        }

        wx.navigateTo({
            url: url,
        })
    },
    setLang() {
        const t = wx.T._
        console.log("触发setLang", t)

        let textList = ['login', "'login'", "accumulatedProfit","withdrawAvailable","myCustomers", "myTeam", "myOrders", "dataAnalysis", "vip", "vipRules", "manifesto", "个客户", "个订单"]
        let interfaceText = t(textList)

        this.setData({
            interfaceText: interfaceText
        })






    }
})