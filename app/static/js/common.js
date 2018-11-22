import $ from 'jquery'

class common {
    /**
     * 时间戳格式化函数
     * @param  {string} format    格式
     * @param  {int}    timestamp 要格式化的时间 默认为当前时间
     * @return {string}           格式化的时间字符串
     */
    static getTimestamptoDate(timestamp, format) {

        let dateTime = new Date(timestamp * 1);

        var date = {
            "M+": dateTime.getMonth() + 1,
            "d+": dateTime.getDate(),
            "h+": dateTime.getHours(),
            "m+": dateTime.getMinutes(),
            "s+": dateTime.getSeconds(),
            "q+": Math.floor((dateTime.getMonth() + 3) / 3),
            "S+": dateTime.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (dateTime.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1
                    ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
            }
        }
        return format;


    }

    static delHtmlTag(str) {
        return str.replace(/<[^>]+>/g, "");//去掉所有的html标记
    }

    static HTMLEncode(html) {
        var temp = document.createElement("div");
        (temp.textContent != null) ? (temp.textContent = html) : (temp.innerText = html);
        var output = temp.innerHTML;
        temp = null;
        return output;
    }

    /**时间 2018/9/17
     *作者:pgc
     *功能：    得到当前屏幕的位置
     *@param：
     */
    static getMousePos(event) {

        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        var e = event || window.event;
        return {'x': scrollLeft, 'y': scrollTop}
    }

    /**时间 2018/9/17
     *作者:pgc
     *功能：  设置localStorge的值
     *@param：
     */
    static setlocalStorage(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (e) {

        }


    }


    /**时间 2018/9/17
     *作者:pgc
     *功能：   得到localStorge的值
     *@param：
     */
    static getlocalStorage(key) {
        try {
            return localStorage.getItem(key);
        } catch (e) {

        }


    }

    static scrollToTop(height) {
        console.log("执行了。。。")
        let divH = document.getElementById("root").clientHeight;

        //$('html,body').stop().animate({ scrollTop:height},0);

        window.scrollTo(0, height)

    }
}

export default common;