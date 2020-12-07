// components/home-components/group/group.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:{
      type: Object,
      observe (val) {
      
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeCurrent(value) {
      console.log("data=",this.data.data)

      console.log("触发 changeCurrent value=", value)

      this.setData({
        current:value.target.dataset.index
      })

    }
  }
})
