const { override, fixBabelImports,addWebpackAlias,addDecoratorsLegacy } = require('customize-cra');
const path = require("path")
module.exports = override(
    //按需加载
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: 'css',
    }),
    //路径别名配置
    addWebpackAlias({
        "@":path.join(__dirname,"./src"),
        "@actions":path.join(__dirname,"./src/actions"),
        "@api":path.join(__dirname,"./src/api"),
        "@common":path.join(__dirname,"./src/common"),
        "@components":path.join(__dirname,"./src/components"),
        "@lib":path.join(__dirname,"./src/lib"),
        "@pages":path.join(__dirname,"./src/pages"),
        "@router":path.join(__dirname,"./src/router"),
        "@store":path.join(__dirname,"./src/store"),
        "@utils":path.join(__dirname,"./src/utils"),
    }),
    //配置装饰器
    addDecoratorsLegacy()
);