import * as types from '../actions/ActionTypes';

const initialState = {
    todos: [
        {
            dos: [
            ]
        }       
    ]
};

function todo(state=initialState, action){
    
    const { todos } = state;
    
    switch(action.type){
        case types.TODO_CREATE:
            return {
                todos: [
                    ...todos,
                    {
                        dos:[
                        ]
                    }
                ]
            }
        case types.TODO_REMOVE:
            todos.splice(action.todoIndex, 1);
            return {
                todos: [
                    ...todos
                ]
            }
        case types.DO_CREATE:
            var { dos } = todos[action.todoIndex];
            return {
                todos: [
                    ...todos.slice(0, action.todoIndex),
                    {
                        ...todos[action.todoIndex],
                        dos: [
                            ...dos,
                            {
                                work: action.value
                            }
                        ]
                    },
                    ...todos.slice(action.todoIndex + 1, todos.length)
                ]
            }
        case types.DO_REMOVE:
            var { dos } = todos[action.todoIndex];
            dos.splice(action.doIndex, 1);
            return {
                todos: [
                    ...todos.slice(0, action.todoIndex),
                    {
                        ...todos[action.todoIndex],
                        dos: [
                            ...dos
                        ]
                    },
                    ...todos.slice(action.todoIndex + 1, todos.length)
                ]
            }
        case types.DO_UPDATE:
            return state;
        default:
            return state;
    }
}

export default todo;