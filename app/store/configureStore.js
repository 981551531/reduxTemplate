import {createStore} from 'redux' ;
import rootReducer from '../reducers/index';
/*let store=createStore(rootReducer)   ;*/
export default function configureStore(initialState ) {
    const store = createStore(rootReducer,      initialState,
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    console.log("打印store",store.getState())
    return store
}