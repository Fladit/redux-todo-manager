import {TodoItemFromForm} from "../components/TodoItemForm/TodoItemForm";

export interface Todo {
    id: string,
    title: string,
    isChecked: boolean,
    details?: string,
}

export interface TodoState {
    todos: Todo[],
    nextTodoId: number
}


export interface TodoLoadAction {
    type: TodosTypeEnum.LOAD,
    payload: Todo[]
}

interface TodoSetAction {
    type: TodosTypeEnum.SET,
    payload: Todo[]
}

export interface TodoAddAction {
    type: TodosTypeEnum.ADD,
    payload: TodoItemFromForm
}

export interface TodoRemoveAction {
    type: TodosTypeEnum.REMOVE,
    payload: Todo['id']
}

export interface TodoToggleDoneAction {
    type: TodosTypeEnum.TOGGLE_DONE,
    payload: Todo['id']
}

export type TodoAction = TodoLoadAction | TodoSetAction | TodoAddAction | TodoRemoveAction | TodoToggleDoneAction;

export enum TodosTypeEnum {
    LOAD = "load",
    SET = "set",
    ADD = "add",
    REMOVE = "remove",
    TOGGLE_DONE = "toggleDone"
}
