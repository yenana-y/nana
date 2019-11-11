const path =require('path');
///跨域配置项
module.exports={
    devServer:{
       proxy:{
          "/operation":{
              target:"https://m.kongfz.com",
              changeOrigin:true
          } 
       } 
    },
    ///别名配置
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@assets":path.join(__dirname,"./src/assets"),
                "@commom":path.join(__dirname,"./src/common"),
                "@components":path.join(__dirname,"./src/components"),
                "@lib":path.join(__dirname,"./src/lib"),
                "@pages ":path.join(__dirname,"./src/pages "),
                "@router":path.join(__dirname,"./src/router"),
                "@store":path.join(__dirname,"./src/store"),
                "@utils":path.join(__dirname,"./src/utils")
            }
        }
    }

}