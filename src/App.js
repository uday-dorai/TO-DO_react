import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import HeaderTag from './components/header.jsx'
import AddTodoList from './components/addTodoList.jsx'
import Todo from './components/todoList'
import uuid from 'uuid';

class App extends Component {
  state={
    todos:[]
  }

  // Add new Todo list
  addTodo =(title) =>{
    const newTodo ={
      id:uuid.v4(),
      title:title,
      status:false
    }
    this.setState({todos:[newTodo, ...this.state.todos]})
  }

  // Checkbox check-uncheck
  markStatus = (id)=>{
    // console.log(111)
    this.setState({todos: this.state.todos.map(todo =>{
      // console.log(222)
      // console.log(id)
      // console.log(todo.id)
      if(todo.id === id){
        console.log(111)
        todo.status = !todo.status
        console.log(todo.status)
      }
      return todo
    })
    })
  }


  // delete a todo item
  dltTodo = (id)=>{
    // console.log(id);
      this.setState({todos:this.state.todos.filter(todo =>{
        if(todo.id !== id){
          return todo
        }
      })
    })
  }

  render(){
    return (
      <div className='App'>
        {/*  For header tag  */}
        <HeaderTag />
        { /*For input form and submit button */}
        <AddTodoList addTodo={this.addTodo}/> 
        {/*  For the list of todos */}
        <ul className='list'>
          <Todo todos={this.state.todos} 
          markComplete={this.markStatus} 
          dltTodo ={this.dltTodo}/>
        </ul>
      </div>
    );
  }
}

export default App
