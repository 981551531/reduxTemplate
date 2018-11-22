import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import NewStyleList from '../../../components/newHome/newStyleList'
import style from './index.less'

import homeSer from '../../../fetch/Home/homeSer'
import * as newsTagActions from '../../../actions/newsTag'
import * as newListActions from "../../../actions/newInfo";

let newhome = new homeSer();

class NewTagStyle extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
            isMoreData: false,
            choseTag: ""
        }

    }

    render() {
        return (

            <React.Fragment>
                <NewStyleList showMoreTagHandler={this.showMoreTagHandler.bind(this)}
                              changeTagFun={this.changeTagFun.bind(this)} data={this.state.data}
                              isMoreData={this.state.isMoreData} choseTag={this.state.choseTag}/>
            </React.Fragment>

        )
    }

    async componentDidMount() {
        await  this.getNewType();
    }

    async getNewType() {
        let data = await  newhome.getNewsType();
        let tag = data.data.tag;

        this.setState({

            // 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
            data: this.state.data.concat(tag)
        })

    }

    showMoreTagHandler() {
        this.setState({


            isMoreData: !this.state.isMoreData
        })
    }

    changeTagFun(cate_id, name) {
        let idredux = this.props.newsTag.tagId;
        if (idredux) {
            this.props.newsTagActions.update({
                tagId: cate_id,
                name: name
            })
        } else {
            this.props.newsTagActions.add({
                tagId: cate_id,
                name: name
            })
        }
        this.setState({
            choseTag: cate_id
        });

        this.getNewList(cate_id, name)
    }

    async getNewList(cate_id, name) {

        let data = await newhome.getNewsList(cate_id, name);
        let list = data.data.news;


        this.props.newListActions.add({
            dataList: list
        })


    }

}


function mapStateToProps(state) {
    return {
        newsTag: state.newsTag,
        newsList: state.newsList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        newsTagActions: bindActionCreators(newsTagActions, dispatch),
        newListActions: bindActionCreators(newListActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewTagStyle)


