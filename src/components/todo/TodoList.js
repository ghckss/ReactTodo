import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

import './TodoList.scss';

const TodoList = ({todos, value, onTodoRemove, onDoCreate, onDoUpdate, onDoRemove}) => {
    const list = todos.map(
        (content, i) => (
            <Todo
                key={i}
                todoIndex={i}
                doList={content.dos}
                value={value}
                onTodoRemove={onTodoRemove}
                onDoCreate={onDoCreate}
                onDoUpdate={onDoUpdate}
                onDoRemove={onDoRemove}
            />
        )
    )
    return (
        <div className='todoList'>
            {list}
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array,
    value: PropTypes.string,
    onTodoRemove: PropTypes.func,
    onDoCreate: PropTypes.func,
    onDoUpdate: PropTypes.func,
    onDoRemove: PropTypes.func
}

TodoList.defaultProps = {
    todos: [],
    value: '',
    onTodoRemove: () => {console.log('not defined')},
    onDoCreate: () => {console.log('not defined')},
    onDoUpdate: () => {console.log('not defined')},
    onDoRemove: () => {console.log('not defined')}
}

export default TodoList;