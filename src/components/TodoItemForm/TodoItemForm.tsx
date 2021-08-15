import React from 'react';
import useInput from "../../hooks/useInput";
import useAppDispatch from "../../hooks/useAppDispatch";
import {addTodo} from "../../action-creators/todo";
import {Box, Button, makeStyles, Paper, TextField} from "@material-ui/core";

const useStyles = makeStyles({
    mt: {
        marginTop: '10px',
    },
    ma: {
        margin: '10px auto 0',
    }
})

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
        <Paper style={{padding: '10px'}} elevation={2}>
            <form onSubmit={handleForm}>
                <TextField label='Title' variant={'outlined'} fullWidth  margin={'normal'} value={title.value} onChange={title.onChange}/>
                <TextField label='Details' variant={'outlined'} fullWidth margin={'normal'} value={details.value} onChange={details.onChange}/>
                <Box mx={'auto'} mt={'5px'} width={'fit-content'}>
                    <Button variant="contained" color="primary" type={'submit'}>Добавить</Button>
                </Box>
            </form>
        </Paper>
    );
};


export default TodoItemForm;
export interface TodoItemFromForm {
    title: string,
    details?: string
}
