import React from 'react';
import {connect} from 'react-redux';




class test extends React.Component {
    render() {
        return (
            <div>
                <hr/>

                <h1 className='bord'>test</h1>

            </div>
        )
    }

    componentDidMount() {

        console.log("test中打印", this.props.userInfo.name)


    }


}

function mapStateToProps(state) {
    return {
        userInfo: state.userInforr
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(test);