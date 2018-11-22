import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'   ;
import {Link} from 'react-router-dom'    ;
import NewTagStyle from './subPage/newTagStyle'
import NewList from './subPage/NewList'
import common from "../../static/js/common"

import style from './index.less'


class newHome extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>

                <NewTagStyle/>
                <NewList className={style.font_color}
                         goToDetailRootFn={this.goToDetailRootFn.bind(this)}> 新闻首页</NewList>

            </React.Fragment>
        )
    }


    updateCityHandler() {

    }

    goToDetailRootFn(nid) {
        let y = common.getMousePos().y;
        common.setlocalStorage("newHomeScropTop", y);
        this.props.history.push(`/newsDetal/${nid}`)
    }

    componentDidMount() {
        let h = common.getlocalStorage("newHomeScropTop");

        common.scrollToTop(h);

    }
}


export default newHome;