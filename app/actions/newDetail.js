import * as actionTypes from '../constants/newsDetail'


export function add(data) {
    return {
        type: actionTypes.ADD_NEWSDETAIL,
        data
    }
}

