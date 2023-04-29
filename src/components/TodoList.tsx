import { useTodoContext } from "../providers/TodoProvider";
import { List, ListItem, Button, Box } from '@mui/material';


const TodoList = () => {
    const { todoList, removeTodo } = useTodoContext();

    return ( 
        <List>
            {todoList.map((todo, index) => (
                <ListItem key={index}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px'
                    }}>
                        {todo}
                        <Button variant="outlined" onClick={() => removeTodo(index)}>Delete Todo</Button>
                    </Box>
                </ListItem>
            ))}
        </List> 
        );
};  

export default TodoList;