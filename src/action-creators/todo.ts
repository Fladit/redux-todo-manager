import axios from "axios";
import {Todo, TodoAction, TodoAddAction, TodoRemoveAction, TodosTypeEnum, TodoToggleDoneAction} from "../types/todo";
import {Dispatch} from "redux";
import {TodoItemFromForm} from "../components/TodoItemForm/TodoItemForm";

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

export function removeTodo(id: Todo['id']): TodoRemoveAction {
    return {type: TodosTypeEnum.REMOVE, payload: id}
}

export function toggleDoneTodo(id: Todo['id']): TodoToggleDoneAction {
    return {type: TodosTypeEnum.TOGGLE_DONE, payload: id}
}

export function addTodo(todo: TodoItemFromForm): TodoAddAction {
    return {type: TodosTypeEnum.ADD, payload: todo}
}

export {fetchTodos}
