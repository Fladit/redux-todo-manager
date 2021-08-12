import {TodoAction, TodoState, TodosTypeEnum} from "../../types/todo";

const initialState: TodoState = {
    todos: [],
    get nextTodoId(): string {
        return (this.todos.length + 1).toString()
    }
}

function todoReducer(state: TodoState = initialState, action: TodoAction): TodoState {
    switch (action.type) {
        case TodosTypeEnum.LOAD: {
            return {...state, todos: action.payload}
        }
        case TodosTypeEnum.SET: {
            return {...state, todos: action.payload}
        }
        case TodosTypeEnum.ADD: {
            console.log(state === initialState)
            return {...state, todos: [...state.todos, {...action.payload, id: state.nextTodoId, isChecked: false}]}
        }
        case TodosTypeEnum.REMOVE: {
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
        }
        case TodosTypeEnum.TOGGLE_DONE: {
            const array = [...state.todos]
            const toggledItemIndex = array.findIndex(todo => todo.id === action.payload)
            if (toggledItemIndex !== -1)
                array.splice(toggledItemIndex, 1, {...array[toggledItemIndex], isChecked: !array[toggledItemIndex].isChecked})
            return {...state, todos: array}
        }

        default: {
            return state
        }
    }

}

export default todoReducer
