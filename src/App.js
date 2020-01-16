import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import HeaderTag from './components/header.jsx'
import AddTodoList from './components/addTodoList.jsx'
import TodoList from './components/todoList'
import uuid from 'uuid';

class App extends Component {
  state={
    todos:JSON.parse(localStorage.getItem('todos')) || [] 
  }

  setLocalStorage =() =>{
    localStorage.setItem('todos',JSON.stringify(this.state.todos));
  }



  // Add new Todo list
  addTodo =(title) =>{
    const newTodo ={
      id:uuid.v4(),
      title:title,
      status:false
    }
    this.setState({todos:[newTodo, ...this.state.todos]},this.setLocalStorage)
  }

  // Checkbox check-uncheck
  markStatus = (id)=>{
    // console.log(111)
    this.setState({todos: this.state.todos.map(todo =>{
      // console.log(222)
      // console.log(id)
      // console.log(todo.id)
      if(todo.id === id){
        // console.log(111)
        todo.status = !todo.status
        // console.log(todo.status)
      }
      return todo
    })
    },this.setLocalStorage)
  }




  // delete a todo item
  dltTodo = (id)=>{
    // console.log(id);
      this.setState({todos:this.state.todos.filter(todo =>{
        if(todo.id !== id){
          return todo
        }
      })
    },this.setLocalStorage)
  }

  onChange=(e) => {
    // console.log(e.target.name)
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit =(e)=>{
    e.preventDefault();
    // console.log(e);   
    if(this.state.title !== ''){
        this.addTodo(this.state.title);
        this.setState({title:''});
        // this.setState(this.state.title= "")
    }
    
    
}



  render(){
    return (
      <div className='App'>
        {/*  For header tag  */}
        <HeaderTag />
        { /*For input form and submit button */}
        <AddTodoList addTodo={this.addTodo}
        onChange ={this.onChange}
        onSubmit ={this.onSubmit}
        title={this.state.title}
        /> 
        {/*  For the list of todos */}
        <h2> All list</h2>
        <ul className='list'>
          <TodoList todos={this.state.todos} 
          markStatus={this.markStatus} 
          dltTodo ={this.dltTodo}
          
          />
        </ul>
      </div>
    );
  }
}

export default App
