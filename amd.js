// 定义没有依赖的模块
define(function () {
    return 模块
})

// 定义有依赖的模块
define(['module1', 'module2'], function (module1, module2) {
    return 模块
})

// 引入使用模块
require(['module1', 'module2'], function (module1, module2) {
    // 使用 module1 module2
})

(function () {
    requirejs.config({
        baseUrl: "js/",// 基本的路径，出发点在根目录下
        path: {//配置路径
            jquery: "./lib/jquery.min",// 支持amd的模块
            angular: "./lib/angular"// 不支持amd的模块，配置shim
        },
        shim: {
            angular: {
                exports: 'angular'
            }
        }
    });

    requirejs(['jquery'], function ($) {
        console.log($);
    })
})();

<script data-main="js/main.js" src="js/require.js"></script>

// 定义没有依赖的模块
define(function (require, exports, module) {
    exports.xxx = value;
    module.exports = value;
})

// 定义有依赖的模块
define(function (require, exports, module) {
    // 引入依赖模块（同步）
    var module2 = require("module2")

    // 引入依赖模块（异步）
    require.async('module3', function (mosule3) {

    })

    // 暴露模块
    exports.xxx = value;
})


// 引入使用模块
define(function () {
    
})
