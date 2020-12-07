// pages/classify/classify.js


var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: app.data.skin,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.getClassifyData()


  
    //  this.getClassifyData()
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

  },




  switchCate(value) {
    console.log("switchCate=", value)
    var that = this;

    // if (this.data.currentCategory.id == value.currentTarget.dataset.id) {
    //   return false;
    // }

  

    that.setData({
      currentCategoryID: value.currentTarget.dataset.id
    })

    



  },

  goodsClick(value) {
    console.log("goodsClick", value)
    // wx.navigateTo({
    //   url: '/pages/classify/filter-query?id=' + value.currentTarget.dataset.id
    // });

    if (value.currentTarget.dataset.id){
       wx.navigateTo({
         url: '/pages/shopping-mall/goods/details/basics?id=' + value.currentTarget.dataset.id
      });
    }


  },

 
  getClassifyData() {
    
  },
  analysisClassifyData(specialSummary) {
    var that = this
    console.log("待解析的specialSummary=", specialSummary)



    var categoryList = []
    var categoryListAuxiliary = []

    for (let i = 0; i < specialSummary.length; i++) {

      if (categoryListAuxiliary.indexOf(specialSummary[i].categoryID)) {

        categoryList.push({
          category: specialSummary[i].category,
          categoryID: specialSummary[i].categoryID
        })

        categoryListAuxiliary.push(specialSummary[i].categoryID)

      }


    }



    console.log("categoryList=", categoryList)

 

    that.setData({
      categoryList: categoryList,
      currentCategoryID: categoryList[0].categoryID,
      specialSummary: specialSummary
    })

  }


})