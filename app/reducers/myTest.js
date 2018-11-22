import * as actionTypes from '../constants/newsList'

const initialState = {}
export default function myTest(state =initialState, action) {
    switch (action.type) {

        case actionTypes.UPDATE_NEWALIST:

            return action.data;
            break;
        default:
            return state;
            break;
    }

}