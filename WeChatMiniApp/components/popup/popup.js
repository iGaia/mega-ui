// components/popup/popup.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    position: {
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    popshow: false,
    hideanimation: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show () {
      this.setData({
        popshow:true
      })
    },
    notRegardAs(){
     // console.log("notRegardAs")
     
    },
    // Tohide popup page
    close () {
      console.log("close")
      let that = this;
   ///   this.$emit("close");
      this.setData({
        hideanimation: true
      })
   
      if (!that.data.position ) {
        that.setData({
          hideanimation: false
        })
       
      } else {
        setTimeout(() => {
          that.setData({
            popshow: false,
            hideanimation: false
          })

        }, 500)
      
      }
    }

  }
})
