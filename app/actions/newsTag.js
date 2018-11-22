import * as actionTypes from '../constants/newsTag'

export function add(data) {
    return {
        type: actionTypes.ADD_NEWSTAG,
        data
    }
}

export function update(data) {
    return {
        type: actionTypes.UPDATE_NEWSTAG,
        data
    }
}

