import React, { Component } from 'react';

class todoItems extends Component {
    
    // strike-through text
    strikeThrough = () =>{
        // console.log(this.props.todo.status)
        if(this.props.todo.status){
            // this.props.todo.status = e.target.checked;
            return {
                textDecoration:'line-through',
                color:'white',
                backgroundColor:'orange'
            }
        }
    }


    render() { 
        const {id,title,status} = this.props.todo;
        // console.log(this.props.todo.status);
        return ( 
            <li className='itemsInTodos' style={this.strikeThrough()}>
                <input type="checkbox" checked={this,status} className='checkBoxLi' 
                onChange={this.props.markStatus.bind(this,id)}
               />
                {title}
                <button className='deleteBtn' onClick={this.props.dltTodo.bind(this, id)}>
                delete
                </button>
                
            </li>
         );
    }
}
 
export default todoItems;