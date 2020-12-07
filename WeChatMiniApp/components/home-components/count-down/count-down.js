// components/home-components/count-down/count-down.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object,
      observe(val) {
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    skin: 'a',
    endTime: '2020-11-22 10:40:30',//2018/11/22 10:40:30这种格式也行
  },
  lifetimes: {
    attached: function () {

      // 在组件实例进入页面节点树时执行
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  ready() {
    this.countDown()
  },
  /**
   * 组件的方法列表
   */
  methods: {



    // 倒计时
    countDown() {

      const that = this

      var nowTime = new Date().getTime();//现在时间（时间戳）
      var endTime = new Date('2020-11-22 10:40:30').getTime();//结束时间（时间戳）
      var time = (endTime - nowTime) / 1000;//距离结束的毫秒数
      // 获取天、时、分、秒
      let day = parseInt(time / (60 * 60 * 24));
      let hou = parseInt(time % (60 * 60 * 24) / 3600);
      let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
      let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
      // console.log(day + "," + hou + "," + min + "," + sec)

      that.setData({
        day: day < 10 ? '0' + day : day,
        hou: hou < 10 ? '0' + hou : hou,
        min: min < 10 ? '0' + min : min,
        sec: sec < 10 ? '0' + sec : sec,
      })

      that.data.setInter = setInterval(
        function () {

          var nowTime = new Date().getTime();//现在时间（时间戳）
          var endTime = new Date('2020-11-22 10:40:30').getTime();//结束时间（时间戳）
          var time = (endTime - nowTime) / 1000;//距离结束的毫秒数
          // 获取天、时、分、秒
          let day = parseInt(time / (60 * 60 * 24));
          let hou = parseInt(time % (60 * 60 * 24) / 3600);
          let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
          let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
          // console.log(day + "," + hou + "," + min + "," + sec)

          that.setData({
            day: day < 10 ? '0' + day : day,
            hou: hou < 10 ? '0' + hou : hou,
            min: min < 10 ? '0' + min : min,
            sec: sec < 10 ? '0' + sec : sec,
          })

          if (time > 0) {
            that.setData({
              countDown: true
            })

          } else {
            that.setData({
              countDown: false
            })
          }


        }
        , 1000)



      // var nowTime = new Date().getTime();//现在时间（时间戳）
      // var endTime = new Date('2020-11-22 10:40:30').getTime();//结束时间（时间戳）
      // var time = (endTime - nowTime) / 1000;//距离结束的毫秒数
      // // 获取天、时、分、秒
      // let day = parseInt(time / (60 * 60 * 24));
      // let hou = parseInt(time % (60 * 60 * 24) / 3600);
      // let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
      // let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
      // // console.log(day + "," + hou + "," + min + "," + sec)

      // that.setData({
      //   day: day < 10 ? '0' + day : day   ,
      //   hou: hou < 10 ? '0' + hou : hou   ,
      //   min: min < 10 ? '0' + min : min   ,
      //   sec: sec < 10 ? '0' + sec : sec   ,
      // })


      // // that.setData({
      // //   day: that.timeFormat(day) day < 10 ? '0' + day : day   ,
      // //   hou: that.timeFormat(hou),
      // //   min: that.timeFormat(min),
      // //   sec: that.timeFormat(sec)
      // // })



      // // 每1000ms刷新一次
      // if (time > 0) {
      //   that.setData({
      //     countDown: true
      //   })
      //   setTimeout(that.countDown(), 1000);
      // } else {
      //   that.setData({
      //     countDown: false
      //   })
      // }
    },
    //小于10的格式化函数（2变成02）
    timeFormat(param) {
      return param < 10 ? '0' + param : param;
    },
    //小于0的格式化函数（不会出现负数）
    timeFormin(param) {
      return param < 0 ? 0 : param;
    }
  }
})
