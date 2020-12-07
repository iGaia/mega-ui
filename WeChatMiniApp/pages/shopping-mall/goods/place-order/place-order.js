const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: app.data.skin,
    address: [],
    remark:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    const eventChannel = this.getOpenerEventChannel()

    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('localCreatTimeStamp', function (localCreatTimeStamp) {
      console.log('localCreatTimeStamp=', localCreatTimeStamp)

      wx.getStorage({
        key: 'orderStorage',
        success(res) {
          console.log("orderStorage=",res.data)
          let orderStorage = res.data
          for (let i = 0; i < orderStorage.length;i++){
            if (orderStorage[i].localCreatTimeStamp == localCreatTimeStamp){

               that.setData({
                 order: orderStorage[i],
                 localCreatTimeStamp: localCreatTimeStamp
               })
              console.log("order=", orderStorage[i])
            }

          }




        }
      })



      // var totalPrice = 0
      // for (let i = 0; i < data.productContent.length; i++) {
      //   totalPrice += data.productContent[i].num * data.productContent[i].price
      // }

      // that.setData({
      //   productData: data,
      //   totalPrice: totalPrice
      // })

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    var addressList = wx.getStorageSync("addressList");
    for (var i = 0; i < addressList.length; i++) {
      if (addressList[i].is_default == true) {

        console.log("addressList[i].region=", addressList[i].region)
        that.setData({
          address: addressList[i]
        })
      
      }
    }

    that.setData({
      addemt: addressList.length
    })
    console.log("addressList.length", addressList.length)


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  toSetAddress(value) {
    wx.navigateTo({
      url: value.currentTarget.dataset.type == 'edit' ? "../../address/address-list/address-list" : "../../address/address-detail/address-detail",
    })

  },
  createProductOrderByWX() {
    
  },
  pay(signedOrderMessage) {
   
  },
  remarkInput(value){
    console.log("remarkInput=",value)

     this.setData({
       remark: value.detail.value
     })
  
  }
 




})