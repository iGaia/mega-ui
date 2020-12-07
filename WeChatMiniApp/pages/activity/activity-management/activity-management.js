const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: app.data.skin,
    activityList: [
    ],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

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
    var that = this
    wx.getStorage({
      key: 'userModel',
      success: function (res) {
        console.log("获取userModel成功", res)
        var userModel = res.data
        var activityList = []

        if (userModel.brand.GJNXFXHHJLB.HHJLB) {
          for (let i = 0; i < userModel.brand.GJNXFXHHJLB.HHJLB.length;i++){

            let title=""
            let imgaSrc=""
            


            switch (userModel.brand.GJNXFXHHJLB.HHJLB[i].relationBrand){
              case "MLFS.QAD" :
                title = "俏安朵航海活动"
                imgaSrc = "/image/qadLogo.jpg"
                activityList.push({
                  brand: userModel.brand.GJNXFXHHJLB.HHJLB[i].relationBrand,
                  image: imgaSrc,
                  title: title,
                  isAlreadyPurchased: userModel.brand.GJNXFXHHJLB.HHJLB[i].isAlreadyPurchased
                })
              break;
              case "MLFS.YBK":
                title = "优布客航海活动"
                imgaSrc = "/image/ybkLogo.jpg"
                activityList.push({
                  brand: userModel.brand.GJNXFXHHJLB.HHJLB[i].relationBrand,
                  image: imgaSrc,
                  title: title,
                  isAlreadyPurchased: userModel.brand.GJNXFXHHJLB.HHJLB[i].isAlreadyPurchased
                })
                break;

              case "LVI.LVI":
                if (app.data.activityMerchantCode == "LVI.LVI"){
                  title = "国际女性飞行航海俱乐部航海活动"
                  imgaSrc = "https://pic.imgdb.cn/item/5e967c1ac2a9a83be56079b2.jpg"
                activityList.push({
                  brand: userModel.brand.GJNXFXHHJLB.HHJLB[i].relationBrand,
                  image: imgaSrc,
                  title: title,
                  isAlreadyPurchased: userModel.brand.GJNXFXHHJLB.HHJLB[i].isAlreadyPurchased
                })
              }
               
                break;

            }
          
            // if (userModel.brand.GJNXFXHHJLB.HHJLB[i].relationBrand=="MLFS.QAD"){
              
            //   title ="俏安朵航海活动"
            //   imgaSrc = "/image/qadLogo.jpg"
            // } else if (userModel.brand.GJNXFXHHJLB.HHJLB[i].relationBrand == "MLFS.YBK"){
            //   title = "优布客航海活动"
            //   imgaSrc = "/image/ybkLogo.jpg"
            // }
            // activityList.push({
            //   brand: userModel.brand.GJNXFXHHJLB.HHJLB[i].relationBrand,
            //   image: imgaSrc,
            //   title: title,
            //   isAlreadyPurchased: userModel.brand.GJNXFXHHJLB.HHJLB[i].isAlreadyPurchased 
            // })
          }
        }
        that.setData({
          activityList: activityList
        })

      }
    })



  },
  selectActivity(value) {


    console.log(value)
    var that = this
    console.log('that.data.activityList=', that.data.activityList)
    for (let i = 0; i < that.data.activityList.length; i++) {
      if (that.data.activityList[i].brand == value.currentTarget.dataset.brand) {

        if (that.data.activityList[i].isAlreadyPurchased == true) {
          wx.navigateTo({
            url: '../navigation_activity/successful_payment?brand=' + that.data.activityList[i].brand,
          })


        } else if (that.data.activityList[i].isAlreadyPurchased == false) {

          wx.navigateTo({
            url: '../navigation_activity/navigation_activity?brand=' + that.data.activityList[i].brand,
          })


        } else {
          console.error("逻辑错误")
        }


      }
    }









  },
  copyInvitationCode() {

  }




})