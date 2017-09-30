## js工具函数封装

### 日期
1.yyyy-MM-dd HH-mm-ss转换成yyyy-MM-dd
```
/**
 * yyyy-MM-dd HH-mm-ss转换成yyyy-MM-dd
 * @param {String} date - yyyy-MM-dd HH-mm-ss
 * @returns {String} - yyyy-MM-dd
 */
function formatDate(date){
    if (date) {
        var date = new Date(date.replace(/-/g, '/'));
        var myYear = date.getFullYear();
        var myMonth = date.getMonth() + 1;
        var myDate = date.getDate();

        myMonth = myMonth < 10 ? "0" + myMonth : myMonth;
        myDate = myDate < 10 ? "0" + myDate : myDate;

        var formatDate = myYear + "-" + myMonth + "-" + myDate;
                    return formatDate;
    } else {
        reurn null;
    }
}
```

2.日期格式转换为时间戳
```
/**
 * 日期格式转换为时间戳
 * @param {String} date - 日期
 * @returns {Number} - 时间戳
 */
function dateToUnix(date){
    if (date) {
        var date = date.replace(/-/g, '/'); // 将yyy-mm-dd格式装换成yyyy/mm/dd
        return Date.parse(new Date(date)) / 1000; // parseDate.parse()支持yyyy/mm/dd格式的毫秒数返回
    } else{
        return null;
    }
}
```

3.时间戳转换为日期格式
```
/**
 * 时间戳转换为日期格式
 * @param {String} unix - 时间戳
 * @param {Boolean} needhms - 是否需要HH-mm-ss
 * @returns {Number} 时间戳
 */
function unixToDate(unix, needhms){
    if (arguments[1] !== false && !arguments[1]) {
        needhms = true;
    } 
	
    var date = new Date(parseInt(unix) * 1000);
    var myYear = date.getFullYear();
    var myMonth = date.getMonth() + 1;
    var myDate = date.getDate();
    var myHour = date.getHours();
    var myMinute = date.getMinutes();
    var mySecond = date.getSeconds();
    
    myMonth = myMonth < 10 ? "0" + myMonth : myMonth;
    myDate = myDate < 10 ? "0" + myDate : myDate;
    myHour = myHour < 10 ? "0" + myHour : myHour;
    myMinute = myMinute < 10 ? "0" + myMinute : myMinute;
    mySecond = mySecond < 10 ? "0" + mySecond : mySecond;
    
    if (needhms) {
        return myYear + "-" + myMonth + "-" + myDate + " " + myHour + ":" + myMinute + ":" + mySecond;
    } else {
        return myYear + "-" + myMonth + "-" + myDate ;
    }
}
```

### 工具
1.禁用按钮倒计时
```
/**
 * 禁用按钮倒计时
 * @param {Object} element - DOM对象,按钮
 * @param {Number} time - 倒计时时间，默认60秒
 * @param {String} msg - 倒计时提示语
 */
function showTimer(element, time, msg) {
    if (!arguments[1]) {
        time = 60;
    }

    if (!arguments[1]) {
        msg = "重新发送";
    }

    var countdown = time;
    var eText = element.innerHTML;

    function timer() {
        if (countdown === 0) {
            element.removeAttribute("disabled");
            element.innerHTML = eText;
            countdown = time;
            return;
        } else {
            element.setAttribute("disabled", true);
            element.innerHTML = msg + "(" + countdown + ")";
            countdown--;
        }

        setTimeout(function () {
            timer();
        }, 1000)
    }

    timer();
}
```

### DOM操作
1.是否有class
```
/**
 * @desc 是否有class
 * @param {Object} obj
 * @param {String} cls
 * @returns {Boolean}
 */
function hasClass(obj, cls) {
    cls = cls.replace(/^\s|\s$/g, "")
    return (" " + ((obj || {}).className || "").replace(/\s/g, " ") + " ").indexOf(" " + cls + " ") >= 0;
}
```

2.添加class
```
/**
 * @desc 添加class
 * @param {Object} obj
 * @param {String} cls
 */
function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}
```

2.删除class
```
/**
 * @desc 删除class
 * @param {Object} obj
 * @param {String} cls
 */
function removeClass(obj, cls) {
    cls = cls.replace(/^\s|\s$/g, "");

    if ((" " + ((obj || {}).className || "").replace(/\s/g, " ") + " ").indexOf(" " + cls + " ") >= 0) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}
```
