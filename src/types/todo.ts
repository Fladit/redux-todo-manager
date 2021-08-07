export interface Todo {
    id: string,
    title: string,
    isChecked: boolean,
}

export interface TodoState {
    todos: Todo[],
    username: string,
}

interface Action {
    type: any,
    payload: any
}

interface TodoLoadAction {
    type: TodosTypeEnum.LOAD,
    payload: Todo[]
}

interface TodoSetAction {
    type: TodosTypeEnum.SET,
    payload: Todo[]
}

interface TodoAddAction {
    type: TodosTypeEnum.ADD,
    payload: Todo
}

interface TodoRemoveAction {
    type: TodosTypeEnum.REMOVE,
    payload: Todo['id']
}

interface TodoToggleDoneAction {
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
