// components/srarch-bar/srarch-bar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        height: {
            type: String,
            value: '8vh'
        }
      
    },

    /**
     * 组件的初始数据
     */
    data: {
        showClear:false,
        searchKey:""
    },

    /**
     * 组件的方法列表
     */
    methods: {
        bindinput(value){
           // console.log("searchBarBindinput",value)
           // console.log("searchBarBindinput",value.detail.value)

           if(value.detail.cursor==0){
             this.setData({
                showClear:false
             })
           }else{
            this.setData({
                showClear:true
             })
           }          
        },
        clear(value){
            this.setData({
                searchKey:"",
                showClear:false
             })
        },
        bindconfirm(value){
           
            this.triggerEvent("searchBarConfirmEvent",{value});
            console.log("bindconfirm value=",value)
        }
    }
})
