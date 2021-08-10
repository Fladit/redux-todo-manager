import React from 'react';
import useAppSelector from "../../hooks/useAppSelector";
import TodoItem from "../Todo/TodoItem";

const TodosList = () => {
    const todos = useAppSelector(state => state.todoReducer.todos)
    return (
        <div>
            {todos.map(todo => <TodoItem todo={todo} key={todo.id}/>)}
        </div>
    );
};

export default TodosList;
