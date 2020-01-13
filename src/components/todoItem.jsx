import React, { Component } from 'react';

class todoItems extends Component {
    
    render() { 
        const {id,title} = this.props.todo;
        return ( 
            <li className='itemsInTodos'>
                <input type="checkbox" className='checkBoxLi' 
                onChange={this.props.markComplete.bind(this,id)}/>

                {title}

                <button className='deleteBtn'
                    onClick={this.props.dltTodo.bind(this, id)}
                >delete</button>
            </li>
         );
    }
}
 
export default todoItems;