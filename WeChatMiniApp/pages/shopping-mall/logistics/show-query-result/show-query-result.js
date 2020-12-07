const app = getApp();
Page({

  data: {
    skin: app.data.skin,
    // 列表数据

    list: [{

      name: "客户签收人:徐剑 已签收 感谢使用圆通快递",
      dates: "2016-08-30"
    }, {

      name: "北京市通州区梨园公司北京市通州区梨园公司",
      dates: "2016-08-30"
    }, {

      name: "【北京市通州区梨园公司】已收入【北京市通州区梨园公司】已收入",
      dates: "2016-08-30"
    }, {

      name: "北京朝阳区十里堡公司】取件人：小四 已收件",
      dates: "2016-08-30"
    }]
  },

  onLoad: function(options) {
    var that = this
    // 页面初始化 options为页面跳转所带来的参数

    const eventChannel = this.getOpenerEventChannel()

    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('queryData', function(data) {
      console.log(data.replace(/\n/g, "<br/>"))

      var newData = data.split(/[\n]/)

      console.log(newData.length)
      var list = []
      for (let i = 0; i < newData.length; i++) {
        console.log("newData=", newData[i].split(" "))
        let newDataSplit = newData[i].split(" ")
        list.push({
            dates: newDataSplit[0] +" "+ newDataSplit[1],
            name: newData[i].replace(newDataSplit[0] + " " + newDataSplit[1], "")
          }

        )
      }
      that.setData({
        list: list
      })

    })

    eventChannel.on('code', function(data) {
      that.setData({
        code: data
      })

    })

  },

  onReady: function() {

    // 页面渲染完成

  },

  onShow: function() {

    // 页面显示

  },

  onHide: function() {

    // 页面隐藏

  },

  onUnload: function() {

    // 页面关闭

  }

})