function priceCalculation(originalPrice, price, productPriceType, rebatePercentage) {

// console.log("获取的价格相关")
//   console.log(originalPrice)
//   console.log(price)
//   console.log(productPriceType)
//   console.log(rebatePercentage)
 
//   console.log("")
  switch (productPriceType){
    case "PPT_DOLLAR" :
      return price + "元(原价" + originalPrice + "元)";
    break;
    case "PPT_PERCENT_MULTIPLE_ITEMS":

      return ((1-rebatePercentage)*10)+"折";
      break;
    case "PPT_PERCENT_SINGLE_ITEM":

      return (originalPrice * (1 - rebatePercentage)).toFixed(2) + "元(原价" + originalPrice + "元 " + ((1 - rebatePercentage)*10)+"折)";
      break;
    case "PPT_FULL_PRICE":

      return originalPrice+"元";
      break;


 }





return "";
}

module.exports = {
  priceCalculation: priceCalculation
  
}