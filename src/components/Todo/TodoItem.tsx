import React from 'react';
import {Todo, TodosTypeEnum} from "../../types/todo";
import './TodoItem.css'
import useAppDispatch from "../../hooks/useAppDispatch";

const TodoItem = ({todo}: TodoItemProps) => {
    const dispatch = useAppDispatch()
    function handleCheckboxClick() {
        dispatch({type: TodosTypeEnum.TOGGLE_DONE, payload: todo.id})
    }

    function removeTodo() {
        dispatch({type: TodosTypeEnum.REMOVE, payload: todo.id})
    }
    return (
        <div className={"todo"}>
            <div className={"todo-content-row"}>
                <div className={"todo-content-row-title"}>
                    <input type='checkbox' checked={todo.isChecked} onChange={handleCheckboxClick}/>
                    <div className={todo.isChecked? 'todo-content-row__line-through' : ''}>{todo.title}</div>
                </div>
                <button onClick={removeTodo}/>
            </div>
            <div className={"todo-content-row"}>
                <div>{todo.details}</div>
                <div>{todo.id}</div>
            </div>
        </div>
    );
};

interface TodoItemProps {
    todo: Todo
}

export default TodoItem;
