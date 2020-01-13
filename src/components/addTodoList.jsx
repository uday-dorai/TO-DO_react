import React, { Component } from 'react';

class addTodoList extends Component{
    state ={
        title:''
    }

    onChange=(e) => this.setState({[e.target.name]:e.target.value})

    onSubmit =(e)=>{
        e.preventDefault();
        // console.log(this.state.title);
        if(this.state.title !== ''){
            this.props.addTodo(this.state.title);
            this.setState({title:''});
        }
        
    }

    render(){
        return (
            <form onSubmit={this.onSubmit} className='formDiv'>
                <input type='text' 
                className='inputTag' 
                placeholder ='ENTER LIST' 
                name="title"
                value={this.state.title}
                onChange ={this.onChange}
                />
                <button className='submitBtn' >submit</button>
            </form>
        );
    }
}

export default addTodoList;