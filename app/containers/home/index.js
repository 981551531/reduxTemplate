import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'   ;
import * as userDateActions from '../../actions/userDate'
import {Link} from 'react-router-dom'
import Header from '../../components/home/Header/index'
import './style.css'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header cityName={this.props.userDate.city}/>
                首页 {this.props.userDate.city}
                <hr/>
                <div onClick={this.updateCityHandler.bind(this)}>更改城市</div>
                <Link to="/re">跳转到Reudx页面</Link>

                <a onClick={this.clickHandler.bind(this)}>123</a>

            </div>
        )
    }

    componentDidMount() {
            console.log("包括了实名",this.props)
        console.log("home", this.props.userDate.city)
    }

    clickHandler() {
        let aa = window.open('', '_blank');
        setTimeout(()=>{
            aa.close()
        },5000)
    }

    updateCityHandler() {
        this.props.userDateActions.update({
            city: "北京"
        })
    }
}

function mapStateToProps(state) {
    return {
        userDate: state.userDatettt
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userDateActions: bindActionCreators(userDateActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);