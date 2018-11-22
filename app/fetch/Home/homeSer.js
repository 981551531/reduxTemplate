import apiUrl from '../../config/apiUrl'
import fetchApi from '../fetchApi' ;

let timestamp2 = (new Date()).valueOf();

class homeSer {
    async getNewsType() {
        let url = apiUrl.nerType;
        let parames = {
            "cuid": "E9B6D887A88ADB68E584F8D353E34C16:FG=1",
            "type": "tag",
            "OS": "iphone",
            "ver": 9,
            "from": "webapp",
            "rand": timestamp2
        }

        let data = await  fetchApi.POST(url, parames);
        return data;
    }

    async getNewsList(category_id = "101", category_name = "") {
        let url = apiUrl.newList;
        let parames = {
            "from": "news_webapp",
            "pd": "webapp",
            "os": "iphone",
            "mid": "E9B6D887A88ADB68E584F8D353E34C16:FG=1",
            "ver": 6,
            "category_id": category_id,
            "action": 0,
            "action": 0,
            "display_time": (new Date()).valueOf(),
            "wf": 0
        }
        if (category_id != "101" && category_id != "102") {
            //category_name
            parames.category_name = category_name;
            parames.category_id = "";
        }

        if (category_id != "101") {
            url = apiUrl.moreNewsList;
        }

        let data = await  fetchApi.POST(url, parames);
        return data;
    }

}

export default homeSer;