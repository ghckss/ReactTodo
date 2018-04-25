import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DoList from '../do/DoList';

import './Todo.scss';

class Todo extends Component{
    constructor(props){
        super(props);

        this.state = {
            value : ''
        };
        
        this.handleInputValue = this.handleInputValue.bind(this);
        this.handleEntered = this.handleEntered.bind(this);
    }

    handleEntered(e) {
        if(e.charCode===13){
            this.props.onDoCreate(this.props.todoIndex, this.state.value);
            this.setState({
                value: ''
            });
        }
    }

    handleInputValue(e){
        this.setState({
            value: e.target.value
        });
    }

    render(){
        return (
            <div className='todo'>
                <button className='delete' onClick={ () => this.props.onTodoRemove(this.props.todoIndex) }>X</button>
                <input type='text'
                    value={this.state.value}
                    onChange={this.handleInputValue}
                    onKeyPress={this.handleEntered}/>
                <DoList
                    doList={this.props.doList}
                    todoIndex={this.props.todoIndex}
                    onDoUpdate={this.props.onDoUpdate}
                    onDoRemove={this.props.onDoRemove}/>
            </div>
        );
    }
}

Todo.propTypes = {
    todoIndex: PropTypes.number,
    doList: PropTypes.array,
    onTodoRemove: PropTypes.func,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
    onCreate: PropTypes.func
}

Todo.defaultProps = {
    todoIndex: 0,
    doList: [],
    onTodoRemove: () => {console.log('not defined')},
    onUpdate: () => {console.log('not defined')},
    onDelete: () => {console.log('not defined')},
    onCreate: () => {console.log('not defined')}
}
export default Todo;