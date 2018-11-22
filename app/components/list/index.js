import React from 'react'

class List extends React.Component {
    render() {
        let data = this.props.lists;

        return (
            <ul>
                {data.map((item,index)=>{
                     return      <li onClick={this.props.deleteFun.bind(this,item.id)} key={item.id}>
                               {item.value}
                           </li>
                })}
            </ul>
        )
    }
    deleteHanlder(id){
       
        this.props.deleteFun(id);
    }
}

export default List;