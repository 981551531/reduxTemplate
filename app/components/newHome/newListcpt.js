import React, {Component} from "react";
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import style from "./style.less"
import     "../../static/bootstrap/css/bootstrap.min.css"


class NewListcpt extends Component {
    constructor() {
        super();

    }

    render() {

        let listStr = (item, index) => {

            let str = "";
            if (item.imageurls.length === 3) {

                str = <div key={index} onClick={this.goToDetailHandler.bind(this, item.nid)}
                           className={`row ${style.new_list_box}`}>

                    <div className={`col-xs-12 ${style.new_tile}`}>{item.title}</div>
                    <div className="col-xs-12">

                        {item.imageurls.map((item, index) => {
                            return (

                                <div className="col-xs-4">
                                    <img className={style["img_responsive"]} src={item.url_webp}/>
                                </div>

                            )
                        })}

                    </div>

                </div>
            }
            else if (item.imageurls.length === 1) {


                str = <div key={index} onClick={this.goToDetailHandler.bind(this, item.nid)} className={`row  ${style.new_list_box}`}>

                        <div className="col-xs-4">
                            {item.imageurls.map((item, index) => {
                                return (
                                    <img key={index} className={style["img_responsive"]} src={item.url_webp}/>
                                )


                            })}
                        </div>
                        <div className={`col-xs-8  ${style.new_tile}`}>{item.title}</div>

                </div>
            }
            else {
                str = <div key={index} onClick={this.goToDetailHandler.bind(this, item.nid)} className={`row ${style.new_list_box}`}>

                        <div className={`col-xs-12 ${style.new_tile}`}>{item.title}</div>

                </div>
            }
            return str;
        }

        return (
            <React.Fragment>

                <div className="container" >
                    {this.props.newsList.dataList && this.props.newsList.dataList.map((item, index) => listStr(item, index))}

                </div>

            </React.Fragment>
        )
    }

    goToDetailHandler(nid) {
        this.props.goToDetailFn(nid);
    }


}


function mapStateToProps(state) {
    return {
        newsList: state.newsList
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewListcpt)



 
   