import React from 'react';
import {Todo, TodosTypeEnum} from "../../types/todo";
import useAppDispatch from "../../hooks/useAppDispatch";
import {removeTodo, toggleDoneTodo} from "../../action-creators/todo";
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    FormControlLabel,
    IconButton,
    makeStyles,
    Typography
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    root: {
        marginBottom: '20px',
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    lineThrough: {
        textDecoration: 'line-through',
    },

    noRightPaddingButton: {
        paddingRight: 0,
    }

})

const TodoItem = ({todo}: TodoItemProps) => {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    return (
        <Card className={classes.root}>
            <CardHeader
                title={
                    <FormControlLabel control={
                        <Checkbox
                            checked={todo.isChecked}
                            onChange={() => dispatch(toggleDoneTodo(todo.id))}
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    } label={
                        <Typography variant='h5' className={todo.isChecked? classes.lineThrough : ''}> {todo.title} </Typography>
                    }/>
                }
                action={
                    <IconButton onClick={() => dispatch(removeTodo(todo.id))}>
                        <DeleteIcon />
                    </IconButton>
                }
            />
            <CardContent className={classes.content}>
                <Typography variant={'subtitle1'} component={'p'}>{todo.details}</Typography>
                <Typography variant={'subtitle1'} component={'p'}>{todo.id}</Typography>
            </CardContent>
        </Card>
    );
};

interface TodoItemProps {
    todo: Todo
}

export default TodoItem;
