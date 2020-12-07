let T = {}
T.locale = null
T.locales = {}
 
T.registerLocale = function (locales) {
    T.locales = locales;
}
 
T.setLocale = function (code) {
    T.locale = code
}
 
T._ = function (list) {
    const locale = T.locale
    const locales = T.locales

   
    console.log("locale=",locale)
    console.log("locales=",locales)




    // if (locale && locales[locale] && locales[locale][line]) {
    //     line = locales[locale][line]
    // }
    let data={}
    if (list && locale && locales[locale] ) {
        

            for(let i=0;i<list.length;i++){
                if(locales[locale][list[i]]){
                    data[list[i]]=locales[locale][list[i]]
                }
            }
       
            console.log("data=",data)
    }
    
    



 
    return data
}
 
export default T