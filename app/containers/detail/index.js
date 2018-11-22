import React from 'react';


class Detal extends React.Component {
    render() {
        return (
            <div><div>我是详情页</div>
            <div onClick={this.clickHandler.bind(this)}>返回首页</div></div>

        )

    }
    clickHandler() {
        this.props.history.push('/');
    }
}

export default  Detal;