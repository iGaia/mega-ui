// pages/cart/cart.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: app.data.skin,
    editStatus: false,
    isSelectAll:false,
    cartData: [],
 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

    // this.setData({
    //   cartData: {
    //     list: [{
    //         products: {
    //           image_path: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587544816186&di=3d00713bd8b3b5403b1c33d019bff135&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D583874135%2C70653437%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3607%26h%3D2408",
    //           title: "这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题",
    //           price: 23,
    //           isChecked: false
    //         }

    //       }, {
    //         products: {
    //           image_path: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587544816186&di=3d00713bd8b3b5403b1c33d019bff135&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D583874135%2C70653437%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3607%26h%3D2408",
    //           title: "这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题",
    //           price: 23,
    //           isChecked: false
    //         }
    //       }, {
    //         products: {
    //           image_path: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587544816186&di=3d00713bd8b3b5403b1c33d019bff135&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D583874135%2C70653437%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3607%26h%3D2408",
    //           title: "这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题",
    //           price: 23,
    //           isChecked: false
    //         }
    //       }, {
    //         products: {
    //           image_path: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587544816186&di=3d00713bd8b3b5403b1c33d019bff135&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D583874135%2C70653437%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3607%26h%3D2408",
    //           title: "这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题",
    //           price: 23,
    //           isChecked: false
    //         }
    //       }, {
    //         products: {
    //           image_path: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587544816186&di=3d00713bd8b3b5403b1c33d019bff135&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D583874135%2C70653437%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3607%26h%3D2408",
    //           title: "这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题",
    //           price: 23,
    //           isChecked: false
    //         }
    //       }, {
    //         products: {
    //           image_path: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587544816186&di=3d00713bd8b3b5403b1c33d019bff135&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D583874135%2C70653437%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3607%26h%3D2408",
    //           title: "这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题",
    //           price: 23,
    //           isChecked: false
    //         }
    //       }, {
    //         products: {
    //           image_path: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587544816186&di=3d00713bd8b3b5403b1c33d019bff135&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D583874135%2C70653437%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3607%26h%3D2408",
    //           title: "这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题",
    //           price: 23,
    //           isChecked: false
    //         }
    //       }, {
    //         products: {
    //           image_path: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587544816186&di=3d00713bd8b3b5403b1c33d019bff135&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D583874135%2C70653437%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3607%26h%3D2408",
    //           title: "这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题",
    //           price: 23,
    //           isChecked: false
    //         }
    //       }, {
    //         products: {
    //           image_path: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587544816186&di=3d00713bd8b3b5403b1c33d019bff135&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D583874135%2C70653437%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3607%26h%3D2408",
    //           title: "这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题",
    //           price: 23,
    //           isChecked: false
    //         }
    //       }, {
    //         products: {
    //           image_path: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587544816186&di=3d00713bd8b3b5403b1c33d019bff135&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D583874135%2C70653437%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3607%26h%3D2408",
    //           title: "这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题这是测试标题",
    //           price: 23,
    //           isChecked: false
    //         }
    //       },



    //     ]
    //   }
    // })
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


  editStatusChange(value) {

    var that = this
    if (that.data.editStatus == true) {
      that.setData({
        editStatus: false
      })
    } else {
      that.setData({
        editStatus: true
      })
    }

  },
  checkboxChange(value) {
    var that = this
    var cartData = that.data.cartData
    for (let i = 0; i < that.data.cartData.list.length; i++) {
      cartData.list[i].products.isChecked = false
    }
    for (let i = 0; i < value.detail.value.length; i++) {
      cartData.list[parseInt(value.detail.value[i])].products.isChecked = true
    }
    that.setData({
      cartData: cartData
    })

    if (value.detail.value.length==that.data.cartData.list.length){
      that.setData({
        isSelectAll: true
      })
    }else{
      that.setData({
        isSelectAll: false
      })
    }



   // console.log("cartData=", that.data.cartData)
  },
  selectAllClick(value){
    var that = this
    var cartData = that.data.cartData
    console.log("selectAllClick",value)
    if (that.data.isSelectAll==true){
      for (let i = 0; i < that.data.cartData.list.length; i++) {
        cartData.list[i].products.isChecked = false
      }
      that.setData({
        isSelectAll:false
      })
    }else{
      for (let i = 0; i < that.data.cartData.list.length; i++) {
        cartData.list[i].products.isChecked = true
      }
      that.setData({
        isSelectAll: true
      })
    }

    that.setData({
      cartData: cartData
    })
  },
  settlement(value){
    console.log("结账")
  },
  clickToJump(value) {

    console.log("clickToJump value=", value.currentTarget.dataset.name)
    switch (value.currentTarget.dataset.name) {
      case "首页":
        wx.reLaunch({
          url: '../home/home'
        })
        break;
      case "分类":
        // wx.reLaunch({
        //   url: '../classify/classify'
        // })
      

       switch(app.data.skin){
         
        case "defaule" :


        break;

        case "defaule" :


          break;

       }



        break;
      case "购物车":
       
        break;
      case "我的":
        wx.reLaunch({
          url: '../my/my'
        })
        break;


      default:
        console.error("跳转错误，没有" + value.currentTarget.dataset.name)
        break;


    }

  }
})