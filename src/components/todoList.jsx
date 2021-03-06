import React, { Component } from 'react';
import TodoItem from './todoItem'


class todoList extends Component {

    render() {
        return this.props.todos.map((todo) =>(
            <TodoItem key={todo.id} todo={todo} markStatus={this.props.markStatus}
            dltTodo = {this.props.dltTodo}/>
            
        ));
    }
}
 
export default todoList;