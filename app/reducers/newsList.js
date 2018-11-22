import * as actionTypes from '../constants/newsList'

const initialState = {}
export default function newsList(state = initialState, action) {
    switch (action.type) {

        case actionTypes.ADD_NEWSLIST:
                 console.log("ADD_NEWSLIST",action.data)
            return action.data;
            break;
        default:
            return state;
            break;
    }

}

