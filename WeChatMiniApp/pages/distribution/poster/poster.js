// pages/distribution/poster/poster.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    genPoster() {
        this.aposter.genPoster({
          autoHeight: true,
          productImg: 'http://img14.360buyimg.com/n1/jfs/t11389/290/2985708817/209753/ef3ac542/5cdcc7afNa56599fc.jpg', // short image
          // productImg: '../FnUlFbaDgNLRqj4AVUlqQLJEEG_W.jpg', // long image
          // productImg: '../1587027293110.jpg', // large width image
          title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
          price: '￥99',
          avatar: 'http://img14.360buyimg.com/n1/jfs/t11389/290/2985708817/209753/ef3ac542/5cdcc7afNa56599fc.jpg',
          nickname: 'Feynman',
          motto: '推荐你使用acanvas，享编程乐趣',
          qrCode: 'http://img14.360buyimg.com/n1/jfs/t11389/290/2985708817/209753/ef3ac542/5cdcc7afNa56599fc.jpg',
          genQrCode: true,
          showLoading: true
        });
        },
        onLoad: function() {
            this.aposter = this.selectComponent('#aposterid');
    
        
        },
})