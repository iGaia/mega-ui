// pages/distribution/team/team.js
const app = getApp();

var util = require('../../../utils/util.js');

import * as echarts from '../../../ec-canvas/echarts';

var staticData = require('./staticData.js');



var lineOption = {
    color: [
        "#3fb1e3",
        "#6be6c1",
        "#626c91",
        "#a0a7e6",
        "#c4ebad",
        "#96dee8"
    ],

    legend: {
        data: ['浏览', '购买'],
        orient: 'horizontal',
        top: 'bottom'
        // left: 'left',
    },
    grid: {
        containLabel: false
    },
    tooltip: {
        show: true,
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['03-01', '03-02', '03-03', '03-04', '03-05', '03-06', '03-07'],
        // show: false
    },
    yAxis: [{
        x: 'center',
        type: 'value',
        name: "浏览人数",
        nameTextStyle: {
            color: "#37A2DA"
        },
        axisLine: {
            lineStyle: {
                color: '#37A2DA',

            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                type: 'dashed'
            }
        }
        // show: false
    }, {
        x: 'center',
        type: 'value',
        name: "购买人数",
        nameTextStyle: {
            color: "#67E0E3"
        },
        axisLine: {
            lineStyle: {
                color: '#67E0E3',

            }
        },
        splitLine: {

            lineStyle: {
                type: 'dashed'
            }
        }
        // show: false
    }],
    series: [{
        name: '浏览',
        type: 'line',
        smooth: true,
        yAxisIndex: 0,
        data: [1245, 1345, 3457, 3657, 4554, 5552, 6221]
    }, {
        name: '购买',
        type: 'line',
        smooth: true,
        yAxisIndex: 1,
        data: [12, 50, 65, 75, 89, 92, 142]
    }]
};

var pieOption = {
    color: [
        "#3fb1e3",
        "#6be6c1",
        "#626c91",
        "#a0a7e6",
        "#c4ebad",
        "#96dee8"
    ],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        type: 'scroll',
        orient: 'horizontal',
        top: 'bottom',
        data: ['代理商A', '代理商B', '代理商C', '代理商D', '代理商E']
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [{
            value: 335,
            name: '代理商A'
        },
        {
            value: 310,
            name: '代理商B'
        },
        {
            value: 234,
            name: '代理商C'
        },
        {
            value: 135,
            name: '代理商D'
        },
        {
            value: 1548,
            name: '代理商E'
        }
        ],
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};

function initLineChart(canvas, width, height) {

    console.log("canvas,width,height=", canvas, width, height)



    const chart = echarts.init(canvas, null, {
        width: width,
        height: height
    });
    canvas.setChart(chart);

    chart.setOption(lineOption);
    return chart;
}


function pieLineChart(canvas, width, height) {
    const chart = echarts.init(canvas, null, {
        width: width,
        height: height
    });
    canvas.setChart(chart);


    chart.setOption(pieOption);
    return chart;
}






Page({

    /**
     * 页面的初始数据
     */
    data: {
        skin: app.data.skin,
        portraitImgURL: '',
        userLevel: '团队长',
        userName: '微信昵称',
        teamNum: '20',
        teamList: [],
        swiperTabIndex: 0,
        scrollViewScroll: false,

        completionRate: 0,
        salesRecord: {},
        distributorDetail: [],

        ec: {
            onInit: initLineChart
        },
        ec2: {
            onInit: pieLineChart
        },
        listData: [],
        status: "read",
        selectionType: "全选",
        checkboxGroupAll: true,
        isScreeningMode: false


    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.DistributionGroupSummaryReq()


    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        let teamList = []
        for (let i = 0; i < 72; i++) {
            teamList.push({ portraitImgURL: '', userName: '吴松' + i, userLevel: '普通分销员', teamSize: Math.ceil(Math.random() * 40), userSale: Math.ceil(Math.random() * 1210) })
        }
        this.setData({
            teamList: teamList
        })

        var that = this

        var listData = [];

        let allTotalPrice = 0
        let allCommissionAmount = 0
        for (let i = 0; i < 10; i++) {

            listData.push({
                id: i,
                time: {
                    exactDate: "11-25",
                    time: "12:34"
                },
                orderId: Math.round(Math.random() * 1224) + 10086,
                memberID: {
                    top: (643314 + '').slice(0, 3),
                    last: (643314 + '').slice(3)
                },
                commissionPercentage: (8).toFixed(2),
                totalPrice: (89).toFixed(2),
                commissionAmount: (7.12).toFixed(2),
                isDisplay: true
            })
            allTotalPrice += 89
            allCommissionAmount += 7.12



        }
        that.setData({
            listData: listData,
            allTotalPrice: allTotalPrice,
            allCommissionAmount: allCommissionAmount
        })

        this.setData({
            startTime: util.formatTimeDate(new Date(new Date().getTime() - 86400000 * 30)),
            endTime: util.formatTimeDate(new Date(new Date().getTime())),
            selectedStartTime: util.formatTimeDate(new Date(new Date().getTime() - 86400000 * 137)),
            selectedEndTime: util.formatTimeDate(new Date(new Date().getTime()))
        });

        console.log('startTime=', this.data.startTime)
        console.log('endTime=', this.data.endTime)


        this.getChartAndTableData()




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
    onPullDownRefresh(value) {
        console.log("onPullDownRefresh value=", value)
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function (value) {
        console.log("onReachBottom value=", value)

        this.setData({
            scrollViewScroll: true
        })
    },

    tabCilck(value) {
        console.log("tabCilck value =", value)
        this.setData({
            swiperTabIndex: value.currentTarget.dataset.index
        })
    },

    swiperBindchange(value) {
        console.log("swiperBindchange value =", value)
        this.setData({
            swiperTabIndex: value.detail.current
        })
    },

    onPageScroll(value) {
        if (value.scrollTop == 0) {
            this.setData({
                scrollViewScroll: false
            })
        }

        //  console.log("onPageScroll value=",value)
    },
    DistributionGroupSummaryReq() {
        

    },


    bindDateChange(value) {
        var that = this
        console.log('触发bindDateChange')
        switch (value.currentTarget.dataset.type) {

            case 'star':
                that.setData({
                    selectedStartTime: value.detail.value

                })
                break;

            case 'end':
                that.setData({
                    selectedEndTime: value.detail.value

                })
                break;


        }

    },
    showCheckboxScreen(e) {
        console.log(e)
        this.setData({
            status: "edit",

        })
    },
    screen() {
        this.setData({
            status: "read"
        })
    },
    selectionTypeChange() {
        var that = this
        if (this.data.selectionType == "全选") {
            this.setData({
                selectionType: "反选"
            })
            for (let i = 0; i < that.data.listData.length; i++) {
                that.setData({
                    ["listData[" + i + "].isDisplay"]: true
                })

            }
        } else if (this.data.selectionType == "反选") {
            this.setData({
                selectionType: "全选"
            })
            for (let i = 0; i < that.data.listData.length; i++) {
                that.setData({
                    ["listData[" + i + "].isDisplay"]: false
                })

            }
        }


    },
    checkboxChange(value) {
        console.log("value.currentTarget.dataset.id=", value.currentTarget.dataset.id)

        var that = this

        if (that.data.listData[value.currentTarget.dataset.id].isDisplay == true) {
            console.log("false")
            that.setData({
                ["listData[" + value.currentTarget.dataset.id + "].isDisplay"]: false,
                checkboxGroupAll: false,
                selectionType: "全选"
            })


        } else {
            console.log("true")
            that.setData({
                ["listData[" + value.currentTarget.dataset.id + "].isDisplay"]: true
            })


        }
        console.log("that.data.listData=", that.data.listData)
    },
    catchTouchMove(value) {

        return false
    },

    getChartAndTableData() {
      


    }



})