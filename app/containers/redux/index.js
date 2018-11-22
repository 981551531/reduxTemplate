import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'   ;
import * as userinfoActions from '../../actions/userInfo'

import './style2.less'
class re extends React.Component {
    render() {
        return (
            <div><b>{this.props.userDate.city}</b>
                <hr/>

                <h1  className='bord'>bord</h1>
                <div className='color'  onClick={this.handelClick.bind(this)}>
                    <i  className="icon-search"></i>更改用户</div>
                <div onClick={this.clickHandler.bind(this)}>跳转到tubo页面</div>
            </div>
        )
    }
       clickHandler(){
           this.props.history.push('/Tobu');
       }
    componentDidMount() {


        this.props.userAction.login(
            {
                name: 'pgc',
                id: '1651202349'
            }
        )
        console.log("re中打印",this.props.userDate)

    }

    handelClick() {
        this.props.userAction.login(
            {
                name: '潘国臣',
                id: '981551531'
            }
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInforr      ,
        userDate: state.userDatettt
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators(userinfoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(re);