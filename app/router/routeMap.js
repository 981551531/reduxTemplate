import React from 'react'

import {Router, Route, Switch, HashRouter} from 'react-router-dom'
import Tobu from '../containers/tobu/index'
import Detal from '../containers/detail/index'
import re from '../containers/redux/index'
import App from '../containers/App'
import home from '../containers/home/index'
import NotFound from '../containers/NotFound'
import test from '../containers/test/index'
import  newHome from '../containers/newHome/index'
class RouteMap extends React.Component {
    render() {

        return (
            <HashRouter>

                <Switch>
                    <App>
                        <Switch>
                            <Route path="/" exact title="我是首页" component={newHome}></Route>
                            <Route path="/Tobu" exact component={Tobu}/>
                            <Route path="/re" exact component={re}></Route>
                            <Route path="/detail" exact component={Detal}></Route>
                            <Route path="/test" exact component={test}></Route>

                              <Route  path="*"    component={NotFound} >    </Route>

                        </Switch>
                    </App>

                </Switch>

            </HashRouter>
        );

    }


}

export default RouteMap