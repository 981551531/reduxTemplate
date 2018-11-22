import React, {Component} from "react";
import "../../static/bootstrap/css/bootstrap.min.css"
import style from "./style.less"

class NewStyleList extends Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {


        let tagStr = (item, index) => {
            let str = "";
            let showStyel = {};
            let choseSyle={};
            if (this.props.isMoreData) {
                showStyel.display = "block";
            } else {
                showStyel.display = "none";

            }
            if (this.props.choseTag == item.cate_id) {
                choseSyle.color = "#fff";
                choseSyle.borderBottom = "2px solid #fff";
                choseSyle.display = "inline";
            }
            if (index === 3) {

                str =
                    <React.Fragment>
                        <div style={{}}
                             className={`col-xs-3   text-center  ${style.more_tag}`}
                             onClick={this.showMoreTagClickHandler.bind(this)}>{this.props.isMoreData ? "收起∧" : "更多∨"}</div>
                        <div style={showStyel}
                            key={item.cate_id}
                            className={`col-xs-3  text-center  ${style.item}`}
                            onClick={this.changeTagHandler.bind(this, item.cate_id, item.name)}><span
                            style={choseSyle}>{item.name}</span></div>
                    </React.Fragment>


            } else {
                if (index < 3) {

                    str = <div key={item.cate_id}
                               className={`col-xs-3  text-center ${style.item}`}
                               onClick={this.changeTagHandler.bind(this, item.cate_id, item.name)}><span
                        style={choseSyle}>{item.name}</span></div>

                } else {

                    str = <div style={this.props.isMoreData ? {display: "block"} : {display: "none"}} key={item.cate_id}
                               className={`col-xs-3  text-center  ${style.item}`}
                               onClick={this.changeTagHandler.bind(this, item.cate_id, item.name)}><span
                        style={choseSyle}>{item.name}</span></div>

                }
            }
            return str;

        }
        return (

            <div style={this.props.isMoreData ? {height: "auto"} : {height: "33px"}}
                 className={`container  ${style.new_tag} `}>
                <div className="row">

                    {this.props.data.map((item, index) => tagStr(item, index))}

                </div>
            </div>


        )
    }

    showMoreTagClickHandler() {
        this.props.showMoreTagHandler()

    }

    changeTagHandler(cate_id, name) {
        this.props.changeTagFun(cate_id, name);
    }

}

export default NewStyleList;
