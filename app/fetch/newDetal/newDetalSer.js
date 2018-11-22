import apiUrl from '../../config/apiUrl'
import fetchApi from '../fetchApi' ;

let timestamp2 = (new Date()).valueOf();

class newDetalSer {


    async getNewsDetal(nids) {
        let url = apiUrl.newDetal;
        let parames = {
            "cuid": "",
            "nids": nids,
            "wf": 1,
            "remote_device_type": 1,
            "os_type": 2,
            "screen_size_width": 0,
            "screen_size_height": 0
        }

        let data = await  fetchApi.POST(url, parames);
        return data;
    }

}

export default newDetalSer;