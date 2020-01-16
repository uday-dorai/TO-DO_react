import React, { Component } from 'react';

class addTodoList extends Component{
    render(){
        return (
            <form onSubmit={this.props.onSubmit} className='formDiv'>
                <input type='text' 
                className='inputTag' 
                placeholder ='Add Todo' 
                name="title"
                value={this.props.title}
                onChange ={this.props.onChange}
                />
                <button className='submitBtn' >Submit</button>
            </form>
        );
    }
}

export default addTodoList;