import {createStore} from 'redux';

export default function () {

    function redux(state = 0, action) {
        switch (action.type) {
            case 'add':
                return state + 1;
                break;
            case 'sub':
                return state - 1;
                break;

            default:
                return state;
                break;
        }
    }
    let store=createStore(redux)  ;
    store.subscribe(()=>{console.log("state的值为",store.getState())})
    store.dispatch({type:'add'});
    store.dispatch({type:'add3'});
    store.dispatch({type:'add'});
    store.dispatch({type:'sub'});



}


