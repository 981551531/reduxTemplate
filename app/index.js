import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import Tobu from './containers/tobu/index'
import  {HashRouter } from 'react-router-dom'
import RouteMap from './router/router'
  import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
const store=configureStore();
ReactDom.render(
    <Provider store={store}>
        <RouteMap history={HashRouter }/>

    </Provider>   ,
    document.getElementById('root')
)