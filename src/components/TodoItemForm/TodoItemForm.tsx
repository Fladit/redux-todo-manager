import React from 'react';
import useInput from "../../hooks/useInput";
import useAppDispatch from "../../hooks/useAppDispatch";
import {addTodo} from "../../action-creators/todo";

const TodoItemForm = () => {
    const title = useInput('')
    const details = useInput('')
    const dispatch = useAppDispatch()

    function handleForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (title.value) {
            dispatch(addTodo({title: title.value, details: details.value}))
            title.reset()
            details.reset()
        }
    }
    return (
        <form onSubmit={handleForm}>
            <input placeholder='title...' {...title}/>
            <input placeholder='details...' {...details} />
            <button>Добавить</button>
        </form>
    );
};

export default TodoItemForm;
export interface TodoItemFromForm {
    title: string,
    details?: string
}
