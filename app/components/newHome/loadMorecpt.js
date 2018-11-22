import React, {Component} from "react";
import     "../../static/bootstrap/css/bootstrap.min.css"
import style from "./style.less"

class LoadMorecpt extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container" ref="wrapper">
                    <div className="row">
                        <div className="col-xs-12 text-center" >
                            {this.props.isLoadingMore ? "正在加载" :
                                <span onClick={this.getMoreDataClickHanler.bind(this)}>加载更多</span>}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    getMoreDataClickHanler() {
        this.props.loadMoreFn()
    }

    componentDidMount() {
        // 使用滚动时自动加载更多
        const loadMoreFn = this.props.loadMoreFn
        const wrapper = this.refs.wrapper
        let timeoutId
        function callback() {
            const top = wrapper.getBoundingClientRect().top
            const windowHeight = window.screen.height
            if (top && top < windowHeight) {
                // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
                loadMoreFn()
            }
        }
        window.addEventListener('scroll', function () {
            if (this.props.isLoadingMore) {
                return
            }
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50)
        }.bind(this), false);
    }

}

export default LoadMorecpt;
