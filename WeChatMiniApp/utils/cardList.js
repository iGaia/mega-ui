function getCardList(that, isHideNumber) {

  var cardList = []
  wx.getStorage({
    key: 'userModel',
    success: function(res) {
      console.log("在外部js中获取赠品模型成功", res)
      var userModel = res.data
      if (userModel.brand.MLFS) {
        if (userModel.brand.MLFS.QAD) {
          if (userModel.brand.MLFS.QAD.cardInfo) {
            if (userModel.brand.MLFS.QAD.cardInfo.cardName) {
              cardList.push(conversionCardData(userModel.brand.MLFS.QAD.cardInfo, isHideNumber))
            }
          }
        }

        if (userModel.brand.MLFS.YBK) {
          if (userModel.brand.MLFS.YBK.cardInfo) {
            if (userModel.brand.MLFS.YBK.cardInfo.cardName) {
              
              cardList.push(conversionCardData(userModel.brand.MLFS.YBK.cardInfo, isHideNumber))

            }
          }
        }
      }

      if (userModel.brand.GJNXFXHHJLB) {
        if (userModel.brand.GJNXFXHHJLB.HHJLB) {
          for (let i = 0; i < userModel.brand.GJNXFXHHJLB.HHJLB.length; i++) {
            console.log("cardList增加HHJLB元素")
            if (userModel.brand.GJNXFXHHJLB.HHJLB[i].cardInfo) {
              if (userModel.brand.GJNXFXHHJLB.HHJLB[i].cardInfo.cardName) {

                cardList.push(conversionCardData(userModel.brand.GJNXFXHHJLB.HHJLB[i].cardInfo, isHideNumber))

              }
            }
          }
        }
      }
      console.log("cardList=", cardList)

    },
    complete(res) {
      that.setData({
        cardList: cardList
      })
    }
  })


}

function conversionCardData(value, isHideNumber) {
  console.log("触发conversionCardData")
   
  var returnValue = value

  if (value.cardEndTime == 0) {
    returnValue.cardEndTime = "终身有效"
  } else if (value.cardEndTime > 0) {
    returnValue.cardEndTime = formatTimeDate(new Date(value.cardEndTime))
  } else {
    returnValue.cardEndTime = ""
  }

  switch (returnValue.cardBrand) {
    case "MLFS.QAD":
      returnValue.relationBrand = "MLFS.QAD"
      returnValue.backgroundColorClass ="tCBGCoral"
      returnValue.cardBrand ="MLFS.QAD"
      break;

    case "MLFS.YBK":
      returnValue.relationBrand = "MLFS.YBK"
      returnValue.backgroundColorClass = "tCBGCoral"
      returnValue.cardBrand = "MLFS.YBK"
      break;
    case "MLFS.QAD-GJNXFXHHJLB.HHJLB":
      returnValue.relationBrand = "MLFS.QAD"
      returnValue.backgroundColorClass = "tCBGBlue"
      returnValue.cardBrand = "GJNXFXHHJLB.HHJLB"
      break;
    case "MLFS.YBK-GJNXFXHHJLB.HHJLB":
      returnValue.relationBrand = "MLFS.YBK"
      returnValue.backgroundColorClass = "tCBGBlue"
      returnValue.cardBrand = "GJNXFXHHJLB.HHJLB"
      break;
      default :

      console.log("触发此处", returnValue.cardBrand)
      break

  }
  
  if (isHideNumber==true){
  //  console.log("触发此处")
  //  returnValue.cardNumber = value.cardNumber.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
    var tempCardNumber = returnValue.cardNumber
    function hideCardNumber(number) {
      var count = ""
      for (let i = 0; i < number.length - 5;i++){
        count+="x"
      }
      count = count.substr(0, count.split('').length - 2) +"**"
      return number.substr(0, 3) + count + number.substr(number.split('').length - 2, number.split('').length) 
    }
 
    returnValue.cardNumber = hideCardNumber(value.cardNumber)
  }
  
  console.log("returnValue=", returnValue)
  return returnValue
}

const formatTimeDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
module.exports = { //必须在这里暴露接口，以便被外界访问，不然就不能访问
  getCardList: getCardList,
  conversionCardData: conversionCardData

}