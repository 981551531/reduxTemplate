import React from 'react'

class Header extends React.Component {
    constructor() {
        super();
       this.state={
           value:''
       }
    }

    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <span>{this.props.cityName}</span>
                    &nbsp;
                    <i className="icon-angle-down"></i>
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <input  value={this.state.value} onChange={this.hanleSearchKey.bind(this)} type="text" placeholder="请输入关键字"/>
                    </div>
                </div>
            </div>
        )
    }

    hanleSearchKey(e){
        console.log(e.target.value)
        this.setState({
            value:e.target.value
        })
    }
}

export default Header;