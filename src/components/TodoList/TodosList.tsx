import React from 'react';
import useAppSelector from "../../hooks/useAppSelector";
import TodoItem from "../Todo/TodoItem";

const TodosList = () => {
    const todos = useAppSelector(state => state.todoReducer.todos)
    return (
        <div style={{marginTop: '20px'}}>
            {todos.map(todo => <TodoItem todo={todo} key={todo.id}/>)}
        </div>
    );
};

export default TodosList;
