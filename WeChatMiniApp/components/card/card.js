// components/card/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cardName: {
      type: String,
      value: '卡片名称卡片名称卡片名称' // 默认值
    },
    // 显示按钮
    isShowButton: {
      type: Boolean,
      value: true
    },
    // 按钮名称
    buttonName: {
      type: String,
      value: ''
    },
    backgroundColorClass:{
      type: String,
      value: 'tCBGCoral'
    },
    brandUpperCase:{
      type: String,
      value: ''
    },
    cardSubName:{
      type: String,
      value: ''
    },
    cardEndTime:{
      type: String,
      value: ''
    },
    cardNumber: {
      type: String,
      value: ''
    },

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    cardButtonClick(value){
      console.log('cardButtonClick=', value)
      this.triggerEvent("cardButtonClick",value);
    }
  }
})
