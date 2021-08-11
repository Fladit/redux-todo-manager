import React from 'react';
import {Todo, TodosTypeEnum} from "../../types/todo";
import './TodoItem.css'
import useAppDispatch from "../../hooks/useAppDispatch";
import {removeTodo, toggleDoneTodo} from "../../action-creators/todo";

const TodoItem = ({todo}: TodoItemProps) => {
    const dispatch = useAppDispatch()
    return (
        <div className={"todo"}>
            <div className={"todo-content-row"}>
                <div className={"todo-content-row-title"}>
                    <input type='checkbox' checked={todo.isChecked} onChange={() => dispatch(toggleDoneTodo(todo.id))}/>
                    <div className={todo.isChecked? 'todo-content-row__line-through' : ''}>{todo.title}</div>
                </div>
                <button onClick={() => dispatch(removeTodo(todo.id))}/>
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
