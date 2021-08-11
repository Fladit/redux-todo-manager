import axios from "axios";
import {Todo, TodoAction, TodosTypeEnum} from "../types/todo";
import {Dispatch} from "redux";

function fetchTodos(limit: number = 10) {
    return async function(dispatch: Dispatch<TodoAction>) {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
            const todos = response.data.map((todo:any): Todo => {
                return {id: todo.id, isChecked: todo.completed, title: todo.title}
            })
            dispatch({type: TodosTypeEnum.LOAD, payload: todos})
        } catch (e) {
        }
    }
}

export function removeTodo(id: Todo['id']): TodoAction {
    return {type: TodosTypeEnum.REMOVE, payload: id}
}

export function toggleDoneTodo(id: Todo['id']): TodoAction {
    return {type: TodosTypeEnum.TOGGLE_DONE, payload: id}
}

export {fetchTodos}
