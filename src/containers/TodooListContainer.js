import TodoList from '../components/todo/TodoList';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    value: 'd',
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    onTodoRemove: (todoIndex) => dispatch(actions.todoRemove(todoIndex)),
    onDoCreate: (todoIndex, value) => dispatch(actions.doCreate(todoIndex, value)),
    onDoUpdate: (todoIndex, doIndex, value) => dispatch(actions.doUpdate(todoIndex, doIndex, value)),
    onDoRemove: (todoIndex, doIndex) => dispatch(actions.doRemove(todoIndex, doIndex))
});

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default TodoListContainer;