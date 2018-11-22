import * as actionTypes from '../constants/userInfo'
const initialState = {}
export default function userInfo(state =initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_LOGIN:
            console.log(action)
            return action.data;
            break;
        case actionTypes.UPDATE_CITY:
          
            return action.data;
            break;
       
        default:
            return state;
            break;
    }

}