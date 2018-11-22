import * as actionTypes from '../constants/newsList'


export function add(data) {
    return {
        type: actionTypes.ADD_NEWSLIST,
        data
    }
}

