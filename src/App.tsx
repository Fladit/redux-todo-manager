import React, {useEffect} from 'react';
import "./App.css"
import TodosList from "./components/TodoList/TodosList";
import {useDispatch} from "react-redux";
import {fetchTodos} from "./action-creators/todo";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [])

    return (
        <div className={"app"}>
            <TodosList/>
        </div>
    );
}

export default App;
