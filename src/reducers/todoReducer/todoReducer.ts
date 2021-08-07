import {TodoAction, TodoState, TodosTypeEnum} from "../../types/todo";

const initialState = {
    todos: [],
    username: '',
}

function todoReducer(state: TodoState = initialState, action: TodoAction) {
    switch (action.type) {
        case TodosTypeEnum.LOAD: {
            break;
        }
        case TodosTypeEnum.SET: {
            break;
        }
        case TodosTypeEnum.ADD: {
            break;
        }
        case TodosTypeEnum.REMOVE: {
            break;
        }
        case TodosTypeEnum.TOGGLE_DONE: {
            break;
        }

        default: {
            throw new Error("Incorrect Action Type!")
        }
    }

}

export default todoReducer
