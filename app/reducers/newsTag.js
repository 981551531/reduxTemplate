import * as actionTypes from '../constants/newsTag'

const initialState = {}
export default function newsTag(state = initialState, action) {
    switch (action.type) {

        case actionTypes.UPDATE_NEWSTAG:

            return action.data;
            break;
        case actionTypes.ADD_NEWSTAG:

            return action.data;
            break;
        default:
            return state;
            break;
    }

}