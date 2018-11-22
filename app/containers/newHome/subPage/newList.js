import React, {Component} from "react";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import homeSer from '../../../fetch/Home/homeSer'
import NewListcpt from '../../../components/newHome/NewListcpt'
import LoadMorecpt from '../../../components/newHome/loadMorecpt'
import {Link} from 'react-router-dom'

import * as newListActions from '../../../actions/newInfo'

let newhome = new homeSer();

class NewList extends Component {
    constructor() {
        super();
        this.state = {
            isLoadingMore: false,
            newList: []
        }


    }

    render() {

        return (
            <React.Fragment>

                <NewListcpt goToDetailFn={this.goToDetailFn.bind(this)}
                            dataList={this.props.newsList.dataList}></NewListcpt>
                <LoadMorecpt isLoadingMore={this.state.isLoadingMore}
                             loadMoreFn={this.getMoreDataHanler.bind(this)}></LoadMorecpt>

            </React.Fragment>
        )
    }

    async componentDidMount() {
        console.log("触发了新闻类别的redux",this.props.newsTag.tagId)
        if (!this.props.newsList.dataList) {


            await this.getNewList();
        }

    }

    async getMoreDataHanler() {

        await this.getNewList();
    }

    async getNewList() {
        this.setState({
            isLoadingMore: true
        })
        let tagId = this.props.newsTag.tagId;
        let name=this.props.newsTag.name;
        if (!tagId) {
            tagId = 101;
        }
        if (!tagId) {
            name = "";
        }
        let data = await newhome.getNewsList(tagId,name);
        let list = data.data.news;
        let oldList = this.props.newsList.dataList;
        console.log("oldList", oldList)
        if (oldList) {
            console.log("总数", this.props.newsList.dataList.length)
            this.props.newListActions.add({
                dataList: oldList.concat(list)
            })
        } else {
            this.props.newListActions.add({
                dataList: list
            })
        }

        console.log("智能组件", this.props.newsList.dataList)
        this.setState({
            newList: this.state.newList.concat(this.props.newsList.dataList),
            isLoadingMore: false
        })


    }

    goToDetailFn(nid) {
        this.props.goToDetailRootFn(nid);
    }

}


function mapStateToProps(state) {
    return {
        newsList: state.newsList,
        newsTag: state.newsTag
    }
}

function mapDispatchToProps(dispatch) {
    return {newListActions: bindActionCreators(newListActions, dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewList)
