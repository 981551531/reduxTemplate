import 'whatwg-fetch'
import 'es6-promise'

class fetchApi {
    /**
     * 将对象转成 a=1&b=2的形式
     * @param obj 对象
     /*   *!/
     static   obj2String(obj, arr = [], idx = 0) {
        for (let item in obj) {
            arr[idx++] = [item, obj[item]]
        }
        return new URLSearchParams(arr).toString()
    }*/
    /**
     * 将对象转成 a=1&b=2的形式
     * @param obj 对象
     /*   *!/*/
    static obj2String(obj) {
        var result = '';
        var item;
        for (item in obj) {
            result += '&' + item + '=' + encodeURIComponent(obj[item]);
        }

        if (result) {
            result = result.slice(1);
        }

        return result;
    }

    /**
     * 真正的请求
     * @param url 请求地址
     * @param options 请求参数
     * @param method 请求方式
     */
    static async commonFetcdh(url, options, method = 'GET') {
        const searchStr = fetchApi.obj2String(options)
       
        let initObj = {}
        if (method === 'GET') { // 如果是GET请求，拼接url
            url += '?' + searchStr
            initObj = {
                method: method,
                credentials: 'include'
            }
        } else {
            initObj = {
                method: method,
                credentials: 'include',
                headers: new Headers({
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
                body: searchStr
            }
        }
        let reslut = await fetch(url, initObj).then((res) => {
            return res.json()
        }).then((res) => {

            return res
        })
        return reslut;
    }

    /**
     * GET请求
     * @param url 请求地址
     * @param options 请求参数
     */
    static async GET(url, options) {
        let data = await fetchApi.commonFetcdh(url, options, 'GET');
        return data;
    }

    /**
     * POST请求
     * @param url 请求地址
     * @param options 请求参数
     */
    static async POST(url, options) {

        let data = await fetchApi.commonFetcdh(url, options, 'POST');

        return data;
    }
}

export default fetchApi;



