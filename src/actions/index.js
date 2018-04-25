import * as types from './ActionTypes';

export const todoCreate = () => ({
    type: types.TODO_CREATE
});

export const todoRemove = (todoIndex) => ({
    type: types.TODO_REMOVE,
    todoIndex
})

export const doCreate = (todoIndex, value) => ({
    type: types.DO_CREATE,
    todoIndex,
    value
})

export const doRemove = (todoIndex, doIndex) => ({
    type: types.DO_REMOVE,
    todoIndex,
    doIndex
})

export const doUpdate = (todoIndex, doIndex, value) => ({
    type: types.DO_UPDATE,
    todoIndex,
    doIndex,
    value
})