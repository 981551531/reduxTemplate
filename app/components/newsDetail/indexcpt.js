import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import common from "../../static/js/common"
import     "../../static/bootstrap/css/bootstrap.min.css"
import style from "./style.less"

class NewsDetailcpt extends React.Component {
    render() {

        let getInfo = () => {

            if (this.props.date) {
                let newInfo = this.props.date;
                 console.log(newInfo)
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 text-center" >
                                <h3 className={style.info_title}> {
                                    newInfo.title
                                }  </h3>
                            </div>
                            <div className="col-lg-12">
                                <span className={style.info_from}>{newInfo.site}</span>
                                <span style={{"margin-left": "10px"}}
                                      className={style.info_from}>{common.getTimestamptoDate(newInfo.ts, 'yyyy年MM月dd日 hh:mm',)}</span>
                            </div>
                        </div>
                        {
                            newInfo.content.map((item, index) => {
                                return (
                                    <React.Fragment>
                                        {item.data != "" ?
                                            <div className={`row ${(index > 0) && style.info_top}`}>

                                                {
                                                    item.type === "text" ?
                                                        <div className="col-xs-12">
                                                            <p className={style.info_main}>
                                                                {common.delHtmlTag(item.data)}

                                                            </p>
                                                        </div>
                                                        :
                                                        <div>
                                                            <div className="col-xs-12">
                                                                <img src={item.data.big.url}
                                                                     className="img-responsive"/>
                                                            </div>
                                                        </div>
                                                }
                                            </div>
                                            : ""}
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                )
            }
            /**/

        }
        return (
            <div>
                {getInfo()}
            </div>
        )
    }
}


export default NewsDetailcpt
