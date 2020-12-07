const rgbObject={
  "黑色":"#000",
  "白色": "#fff",
  "蓝色": "#2B3B54",
  "深咖": "#3B271E",
  "深灰": "#272C28",
  "浅绿": "#AEB7B2",
  "杏": "#BBB2AD",
  "浅银灰": "#C5C5C3",
  "浅粉": "#CAB8B8",
  "花灰": "#848484",
  "虾红": "#C69696",
  "浅杏": "#DFC1B6",
  "卡其绿": "#8B8064",
  "浅灰": "#A3A3A3",
  "暗红": "#97747A",
  "豆紫": "#7E758A",
  "卡其": "#D8CDB7",
  "咖啡": "#7D5850",
  "灰兰": "#445C74",
  "浅紫": "#CDB2C3"
}

const getRGB = colorList => {
  var rgbList=[]


  for (let i = 0; i < colorList.length;i++){
    if (rgbObject[colorList[i]]){
      rgbList.push(rgbObject[colorList[i]])
    }else{
      console.log("颜色表里没有" + colorList[i]+"这个颜色")
      rgbList.push(rgbObject['黑色'])
    }
  }
 

  return rgbList
}




module.exports = {
  getRGB: getRGB

}
