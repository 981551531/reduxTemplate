import {combineReducers} from 'redux'     ;
import userInfo from './userInfo';
import user from './userDate';
import newsList from './newsList';
import myTest from './myTest'
import newsDetail from './newsDetail'
import newsTag from './newsTag'

const rootReducer = combineReducers({
    userInforr: userInfo,
    userDatettt: user,
    myTest: myTest,
    newsList: newsList,
    newsDetail: newsDetail  ,
    newsTag:newsTag
})
export default rootReducer;