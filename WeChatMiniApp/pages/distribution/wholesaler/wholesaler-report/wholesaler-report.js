var util = require('../../../../utils/util.js');


import * as echarts from '../../../../ec-canvas/echarts';

const app = getApp();

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
    data: ['经销商A', '经销商B', '经销商C', '经销商D', '经销商E']
  },
  series: [{
    name: '访问来源',
    type: 'pie',
    radius: '55%',
    center: ['50%', '50%'],
    data: [{
        value: 335,
        name: '经销商A'
      },
      {
        value: 310,
        name: '经销商B'
      },
      {
        value: 234,
        name: '经销商C'
      },
      {
        value: 135,
        name: '经销商D'
      },
      {
        value: 1548,
        name: '经销商E'
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

  data: {
    skin: app.data.skin,
    ec: {
      onInit: initLineChart
    },
    ec2: {
      onInit: pieLineChart
    },
    listData: [],
    status: "read",
    selectionType: "全选",
    checkboxGroupAll:true,
    isScreeningMode:false
  },

  onReady() {
    var that = this
    var listDataItem = {
      time: {
        exactDate: "2-8",
        time: "12:34"
      },
      userId: 1212121,
      memberID: {
        top: (123456 + '').slice(0, 3),
        last: (123456 + '').slice(3)
      },
      transactionAmount: (89).toFixed(2),
      costPrice: (23.07).toFixed(2),
      commission: (54.54).toFixed(2),
      isDisplay: true

    }
    var listData = [];

    for (let i = 0; i < 10; i++) {
     
      listData.push({
        id:i,
        time: {
          exactDate: "2-8",
          time: "12:34"
        },
        userId: 1212121,
        memberID: {
          top: (123456 + '').slice(0, 3),
          last: (123456 + '').slice(3)
        },
        transactionAmount: (89).toFixed(2),
        costPrice: (23.07).toFixed(2),
        commission: (54.54).toFixed(2),
        isDisplay: true

      })
    }
    that.setData({
      listData: listData
    })

    this.setData({
      startTime: util.formatTimeDate(new Date(new Date().getTime() - 86400000 * 30)),
      endTime: util.formatTimeDate(new Date(new Date().getTime())),
      selectedStartTime: util.formatTimeDate(new Date(new Date().getTime() - 86400000 * 7)),
      selectedEndTime: util.formatTimeDate(new Date(new Date().getTime()))
    });

    console.log('startTime=', this.data.startTime)
    console.log('endTime=', this.data.endTime)
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
        checkboxGroupAll:false,
        selectionType: "全选"
      })
    

    } else {
      console.log("true")
      that.setData({
        ["listData[" + value.currentTarget.dataset.id + "].isDisplay"]: true
      })


    }
    console.log("that.data.listData=", that.data.listData)
  }

});