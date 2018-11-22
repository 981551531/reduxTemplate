import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userDateActionsFromOtherFile from '../actions/userDate'

class App extends React.Component {
    render() {
        return (
            <React.Fragment>{this.props.children}</React.Fragment>
        )
    }

    componentDidMount() {
     
        let city = "贵阳";
        this.props.userAction.update({city:city})
        console.log("app",this.props)
        console.log("children",this.props.children)

    }


}

function mapStateToProps(state) {

    return {
       
    }

}

function mapDispatchToProps(dispatch) {

    return {
        userAction: bindActionCreators(userDateActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)