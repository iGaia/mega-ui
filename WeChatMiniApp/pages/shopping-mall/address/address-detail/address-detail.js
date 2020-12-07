//城市选择
var app = getApp();
var QQMapWX = require('../../../../utils/qqmap/qqmap-wx-jssdk.js');
Page({
  data: {
    skin: app.data.skin,
    region: [],
    type: "found",
    address: "",
    consigneeName: "",
    phone: "",
    id: "",
    windowHeight:1000


  },

  formSubmit: function(e) {
    console.log('formSubmit',e);
    var that = this;

    if (!e.detail.value.consigneeName||e.detail.value.consigneeName == "") {
      wx.showModal({
        title: '信息不全',
        content: "收货人不能为空"
      })
    } else if (!e.detail.value.phone ||e.detail.value.phone == "") {
      wx.showModal({
        title: '信息不全',
        content: "手机号不能为空"
      })
    } else {
      console.log("开始提交", e);
      // console.log("类型为", that.data.type);
      var addressList = wx.getStorageSync('addressList') || []
        console.log(addressList);

      if (that.data.type == "found") {
        // console.log("类型为创建");

        var isDefault=false;
        if (addressList.length==0){
          isDefault=true
        }

 
        var address = {
          consigneeName: e.detail.value.consigneeName,
          address: e.detail.value.address,
          phone: e.detail.value.phone,
          region: that.data.region,
          is_default: isDefault,
          id: Date.parse(new Date()) 

        }
        // console.log(address);
        addressList.unshift(address);
      } else {
        // console.log("类型为编辑");
        for (var i = 0; i < addressList.length; i++) {

          //   console.log(addressList[i].id, "对比", that.data.id);

          if (addressList[i].id == that.data.id) {
            //   console.log("捕获到数据记录");
            addressList[i].region = that.data.region,
              addressList[i].address = e.detail.value.address,
              addressList[i].consigneeName = e.detail.value.consigneeName,
              addressList[i].phone = e.detail.value.phone

          }
        }

      }

      wx.setStorageSync('addressList', addressList);
       console.log(wx.getStorageSync('addressList'))

      wx.navigateBack({

      })
    }


  },
  onLoad: function(options) {
    // 生命周期函数--监听页面加载
    //    console.log(options);
    var that = this;

    wx.getSystemInfo({
      success: function (res) {
        //    console.log("总高度",res.windowHeight);
        that.setData({
          windowHeight: res.windowHeight
        })
      },
    });


    var addressList = wx.getStorageSync("addressList");
    if (options.type == "edit") {
      
     
      // console.log(addressList);
      for (var i = 0; i < addressList.length; i++) {
        if (addressList[i].id == options.id) {

         
          that.setData({
            region: addressList[i].region,
            type: options.type,
            address: addressList[i].address,
            consigneeName: addressList[i].consigneeName,
            phone: addressList[i].phone,
            id: addressList[i].id

          })
        }
      }


    }else{
      if (addressList.length==0){

        var userInfoCache = wx.getStorageSync('userInfoCache') || {}
        if (userInfoCache.name) {
          that.setData({
            consigneeName: userInfoCache.name
          })
        }
        if (userInfoCache.phone) {
          that.setData({
            phone: userInfoCache.phone
          })
        }



      }
     
      





      this.getLocation('')
    }
   
    

  },
  bindRegionChange(e) {
     console.log('picker发送选择改变，携带值为', e.detail.value);
    var that = this;
    that.setData({
      region: e.detail.value
    })
  },
  getPhoneNumber(e) {
    console.log(e)
    var that = this;
    // that.setData({
    //   phone: '15362458142'
    // })

  },
  getLocation(e) {
    console.log("getLocation")
    var that = this;
    var qqmapsdk = new QQMapWX({
      key: 'RR7BZ-W4HWO-LYEWC-SM352-UCVSK-7TFKQ'
    });

    wx.getLocation({
      success(res) {
        console.log("获取地理位置成功", res)
        qqmapsdk.reverseGeocoder({
          //位置坐标，默认获取当前位置，非必须参数
          success: function(res) { //成功后的回调
            console.log("获取坐标成功", res);
          
            that.setData({
              region: [res.result.address_component.province, res.result.address_component.city, res.result.address_component.district],
              address: res.result.address_component.street_number
            })
          },
          fail: function(error) {
            console.error(error);
          },
          complete: function(res) {
            console.log(res);
            //     console.log("signInUnifiedReq=", signInUnifiedReq);


          }
        })
      },
      fail(res) {
           console.log("获取地理位置失败",res)
     
      },
      complete(res) {
        //获取地理位置结束后
        // 登录









      }
    })


  }

})