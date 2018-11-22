import * as actionTypes from '../constants/newsList'


export function update(data) {
    return {
        type: actionTypes.UPDATE_NEWALIST,
        data
    }
}

