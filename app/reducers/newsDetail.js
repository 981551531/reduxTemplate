import * as actionTypes from '../constants/newsDetail'

const initialState = {}
export default function newsDetail(state = initialState, action) {
    switch (action.type) {

        case actionTypes.ADD_NEWSDETAIL:

            return action.data;
            break;
        default:
            return state;
            break;
    }

}

