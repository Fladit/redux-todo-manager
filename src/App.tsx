import React, {useEffect} from 'react';
import "./App.css"
import TodosList from "./components/TodoList/TodosList";
import {useDispatch} from "react-redux";
import {fetchTodos} from "./action-creators/todo";
import TodoItemForm from "./components/TodoItemForm/TodoItemForm";
import {Container, Typography} from "@material-ui/core";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [])

    return (
        <Container maxWidth={'sm'}>
            <header>
                <Typography variant="h2" component="h1" align={'center'} gutterBottom>
                    Todo List
                </Typography>
            </header>
            <main>
                <TodoItemForm/>
                <TodosList/>
            </main>
        </Container>
    );
}

export default App;
