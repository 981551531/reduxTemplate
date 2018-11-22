import * as actionTypes from '../constants/userInfo'

const initialState = {}
export default function user(state =initialState, action) {
    switch (action.type) {

        case actionTypes.USERINFO_UPDATE:
            console.log("USERINFO_UPDATE",action.data)
            return action.data;
            break;
        default:
            return state;
            break;
    }

}