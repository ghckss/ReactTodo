import React, { Component } from 'react';
import TodoListContainer from './TodooListContainer';
import * as actions from '../actions';
import { connect } from 'react-redux';

class TodoApp extends Component {
    render(){
        const { onTodoCreate } = this.props;

        return(
            <div className='todo-app'>
                <button className='circle right' onClick={onTodoCreate}>+</button>
                <TodoListContainer/>
            </div>
        )
    }
}

const mapToDispatch = (dispatch) => ({
    onTodoCreate: () => dispatch(actions.todoCreate())
});

export default connect(null, mapToDispatch)(TodoApp);