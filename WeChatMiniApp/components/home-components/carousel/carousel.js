// components/home-components/carousel/carousel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object,
      observer(val) {
       
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    imageTabSwiperTabCilck(value) {
      console.log(value)
      this.setData({
        current: value.currentTarget.dataset.current
      })

    },
    swiperChange(value){
      console.log(value)
      this.setData({
        current:value.detail.current
      })
    }
  }
})
