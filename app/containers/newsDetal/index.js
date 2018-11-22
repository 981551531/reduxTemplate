import React, {Component} from "react";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import newDetalSer from "../../fetch/newDetal/newDetalSer"    ;
import NewsDetailcpt from "../../components/newsDetail/indexcpt"  ;
import TopMenu from "../../components/newHome/topMenu"  ;
import * as newDetailActions from "../../actions/newDetail"

let newDetal = new newDetalSer();

class newsDetal extends Component {
    constructor() {
        super();
        this.state = {
            newsInfo: ""
            ,
        }

    }

    render() {
        // 获取新闻id


        return (
            <React.Fragment>
                <TopMenu/>
                <NewsDetailcpt date={this.state.newsInfo}/>
            </React.Fragment>
        )
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        await this.getNewsDetail(id);


    }

    async getNewsDetail(id) {
        let data = await   newDetal.getNewsDetal(id);
        let newsDetal = data.data.news[0];
        this.props.newDetailActions.add({
            info: newsDetal
        })
        this.setState({
            newsInfo: this.props.newsDetal.info
        });
        document.title = "唯一新闻-" + this.state.newsInfo.title;

    }

}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        newsDetal: state.newsDetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        newDetailActions: bindActionCreators(newDetailActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(newsDetal)



