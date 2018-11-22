import React from 'react'
import Input from '../../components/input/index'
import List from '../../components/list/index'
import { Link } from 'react-router-dom'

class Tobu extends React.Component {

    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    render() {
        return (
            <div>
                <Input submitFn={this.submitFu.bind(this)}/>
                <List lists={this.state.list} deleteFun={this.deleteFun.bind(this)} />
                <Link to="/detail">跳转到详情页</Link>      <br/>
                <Link to="/re">跳转到Reudx页面</Link>
            </div>
        );
    }

    submitFu(value) {
        let index = this.state.list.length;
        let t = {id: index, value: value};

        this.setState(
            {list: this.state.list.concat(t)}
        );
        setTimeout(() => {

            console.log("打印", this.state.list)
        }, 1000)
    }

    deleteFun(id) {
        let data = this.state.list
        console.log("shanchu", id);
        this.setState({
            list: data.filter(item => {
                if (item.id != id) {
                    return item;
                }
            })
        })
    }
}

export default Tobu;