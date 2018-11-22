import React, {Component} from "react";
import "../../static/bootstrap/css/bootstrap.min.css"
import {Link} from 'react-router-dom'
import style from "./style.less"

class TopMenu extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row" ID={style.topMenu}>
                        <div className="col-xs-6 text-left " onClick={this.goBackHander.bind(this)}><i
                            className="glyphicon glyphicon-menu-left"></i>返回
                        </div>
                        <div className="col-xs-6  text-right"><Link to="/"><i className="glyphicon glyphicon-home"></i>首页</Link>
                        </div>
                        {/*       <img src={require("../../static/img/banner_02.jpg")} />*/}
                    </div>
                </div>
            </React.Fragment>
        )
    }

    goBackHander() {
        window.history.back(0);
    }

}

export default TopMenu;
