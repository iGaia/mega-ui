// pages/distribution/detail/detail.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userLevel: '普通分销员',
        chooseTitle: ['今日', '昨日', '近一周', '近一月', '自定义'],
        tableTitle: ['交易单号', '订单金额', '佣金', '佣金比例', '状态'],
        totalCash: 1000,
        totalOrder: 500,
        distributorDetail: {},
        orderList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getDetailRequest()

    },

    getDetailRequest() {


    },






    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        var orderList = [];
        for (let i = 0; i < 120; i++) {
            orderList.push({ orderNum: Math.ceil(Math.random() * 1000000), orderCash: Math.ceil(Math.random() * 1000), orderCommission: Math.ceil(Math.random() * 1000), commissionRatio: Math.ceil(Math.random() * 1000) + '%', orderStatus: '已支付' })
        }
        this.setData({
            orderList: orderList
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})