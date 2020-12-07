// components/suspension-ball/suspension-ball.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
    pattern: {
      type: Object,
      value: {
        color: '#3c3e49',
        selectedColor: '#007AFF',
        backgroundColor: '#fff',
        buttonColor: '#3c3e49'
      }
    },
    horizontal: {
      type: String,
      value: 'left'
    },
    vertical: {
      type: String,
      value: 'bottom'
    },
    direction: {
      type: String,
      value: 'horizontal'
    },
    content: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    fabShow: false,
    flug: true,
    showContent: false,
   
    contentWidth: '160px',
    contentWidthMin: '40px',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    

    show(){
      var that=this
      console.log("show this=",this)
    
     
      this.calculation()
     

    },
    open() {
      console.log("open this=", this)
      var that=this
      that.setData({
        showContent:!that.data.showContent
      })

      this.calculation()

    },
		/**
		 * 按钮点击事件
		 */
    taps(value) {
      console.log("taps=", value)
      this.triggerEvent("suspensionBallItemClick", value.currentTarget.dataset.item);
    
    },
		/**
		 * 获取 位置信息
		 */
    getPosition(types, paramA, paramB) {
     // console.log("this=",this)
    //  console.log("this.data", this.data)
      if (types === 0) {
        return this.data.horizontal === paramA && this.data.vertical === paramB;
      } else if (types === 1) {
        return this.data.direction === paramA && this.data.vertical === paramB;
      } else if (types === 2) {
        return this.data.direction === paramA && this.data.horizontal === paramB;
      } else {
     //   console.log("this.data.showContent && this.data.direction === paramA=", this.data.showContent && this.data.direction === paramA)
        return this.data.showContent && this.data.direction === paramA
          ? this.data.contentWidth
          : this.data.contentWidthMin;
        
      }
    },
    calculation(){
      var contentWidth = (this.data.content.length + 1)*90+30+"rpx";
      var contentWidthMin = 90 + 'rpx';


      this.setData({
        contentWidth: contentWidth,
        contentWidthMin: contentWidthMin,
      })
   
      this.setData({
        boxWidth: this.getPosition(3, 'horizontal'),
        boxHeight: this.getPosition(3, 'vertical'),
        leftBottom: this.getPosition(0, 'left', 'bottom'),
        rightBottom: this.getPosition(0, 'right', 'bottom'),
        leftTop: this.getPosition(0, 'left', 'top'),
        rightTop: this.getPosition(0, 'right', 'top'),
        flexDirectionStart: this.getPosition(1, 'vertical', 'top'),
        flexDirectionEnd: this.getPosition(1, 'vertical', 'bottom'),
        horizontalLeft: this.getPosition(2, 'horizontal', 'left'),
        horizontalRight: this.getPosition(2, 'horizontal', 'right')

      })
    }
  }
})
