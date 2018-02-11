import axios from "axios";
import * as types from '../constants/ActionTypes'

export const addTodo = text => ({ type: types.ADD_TODO, payload: axios.post("/api/todos",{"text":text} )})
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, payload: axios.put("/api/todos/toggle/" + id) })
export const completeAll = () => ({ type: types.COMPLETE_ALL })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
export const fetchTodos = () => ({ type: types.FETCH_TODOS, payload: axios.get("/api/todos")})



export function addTodoAndFetchTodos(text) {
    return dispatch => {

        return axios.post("/api/todos",{"text":text} ).then(
            response => {
                dispatch(fetchTodos())
            },
            error => {
                dispatch({ type: 'ADD_TODO_FAILURE', error })
                throw error
            }
        )
    }
}

export function deleteTodoAndFetchTodos(id) {
    return dispatch => {

        return axios.delete("/api/todos/" + id).then(
            response => {
                dispatch(fetchTodos())
            },
            error => {
                dispatch({ type: 'DELETE_TODO_FAILURE', error })
                throw error
            }
        )
    }
}

export function editTodoAndFetchTodos(id,text) {
    return dispatch => {

        return axios.put("/api/todos/" + id,{"text":text}).then(
            response => {
                dispatch(fetchTodos())
            },
            error => {
                dispatch({ type: 'DELETE_TODO_FAILURE', error })
                throw error
            }
        )
    }
}

export function toggleTodoAndFetchTodos(id) {
    return dispatch => {

        return axios.put("/api/todos/toggle/" + id,).then(
            response => {
                dispatch(fetchTodos())
            },
            error => {
                dispatch({ type: 'TOGGLE_TODO_FAILURE', error })
                throw error
            }
        )
    }
}

export function clearCompletedTodosAndFetchTodos(id) {
    return dispatch => {

        return axios.post("/api/todos/clearCompleted").then(
            response => {
                dispatch(fetchTodos())
            },
            error => {
                dispatch({ type: 'CLEAR_COMPLETED_TODOS_FAILURE', error })
                throw error
            }
        )
    }
}