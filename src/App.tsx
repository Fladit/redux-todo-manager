import React, {useEffect} from 'react';
import "./App.css"
import TodosList from "./components/TodoList/TodosList";
import {useDispatch} from "react-redux";
import {fetchTodos} from "./action-creators/todo";
import TodoItemForm from "./components/TodoItemForm/TodoItemForm";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [])

    return (
        <div className={"app"}>
            <TodoItemForm/>
            <TodosList/>
        </div>
    );
}

export default App;
