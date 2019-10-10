const proxy =require("http-proxy-middleware");

module.exports=(app)=>{
    app.use(proxy("/api",{
        target:"https://m.youxiake.com",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
}