/**
 * 通用表单验证封装
 * JR_Validform version 0.0.1
 * 2017/05/09
 */

;(function ($, window, document, undefined) {
    var Validform = function (targetDom, options) {
        // 判断是用函数创建的还是用new创建的。这样我们就可以通过Validform("dom") 或 new Validform("dom")来使用这个插件了
        if (!(this instanceof Validform))return new Validform(targetDom, options);

        // 判断传进来的是DOM还是字符串
        if ((typeof targetDom) === "string") {
            this.targetDom = document.querySelector(targetDom);
        } else {
            this.targetDom = targetDom;
        }

        // 参数合并
        this.options = this.extend({
            // 这个参数以后可能会更改所以暴露出去

        }, options);

        //原始Validform插件对象
        var originalValidform = $(targetDom).Validform(this.options);

        //属性和方法合并
        this.extend(this, originalValidform);
    };

    Validform.prototype = {
        extend: function (obj, obj2) {
            for (var k in obj2) {
                obj[k] = obj2[k];
            }
            return obj;
        }
    };

    var Tipmsg = {
        w: {
            "en": "请填写英文字符！",
            "u_en": "请填写大写英文字符！",
            "en_num": "请填写英文和数字！",
            "en_num_underline": "请填写英文、数字、下划线！",
            "en_num_underline6-16": "请填写6到16英文、数字、下划线！"
        },
    };

    var Datatype = {
        //匹配英文字母;
        "en": /^[a-z]+$/i,

        //匹配大写英文字母;
        "u_en": /^[A-Z]+$/i,

        //匹配英文和数字;
        "en_num": /^[a-z0-9]+$/i,

        //匹配英文、数字、下划线;
        "en_num_underline": /^\w+$/,

        //匹配6-16位英文、数字、下划线;
        "en_num_underline6-16": /^\w{6,16}$/
    };

    $.extend($.Tipmsg.w, Tipmsg);
    $.extend($.Datatype, Datatype);

    window.Validform = Validform;
}(jQuery, window, document));