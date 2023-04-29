import { useTodoContext } from "../providers/TodoProvider";
import { List, ListItem, Button, Box, TextField } from "@mui/material";
import { useState } from "react";

const TodoList = () => {
  const { todoList, removeTodo, startEditTodo, endEditTodo } = useTodoContext();
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedTodo, setEditedTodo] = useState<string>("");

  const handleEditClick = (index: number) => {
    setEditingIndex(index);
    startEditTodo(index);
    setEditedTodo(todoList[index]);
  };

  const handleEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTodo(event.target.value);
  };

  const handleEditSave = (index: number) => {
    endEditTodo(editedTodo);
    setEditingIndex(null);
    setEditedTodo("");
  };

  const handleEditCancel = () => {
    setEditingIndex(null);
    setEditedTodo("");
  };

  return (
    <List>
      {todoList.map((todo, index) => (
        <ListItem key={index}>
          {editingIndex === index ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <TextField
                value={editedTodo}
                onChange={handleEditChange}
                fullWidth
              />
              <Button variant="contained" onClick={() => handleEditSave(index)}>
                Save
              </Button>
              <Button variant="outlined" onClick={handleEditCancel}>
                Cancel
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              {todo}
              <Button
                variant="outlined"
                onClick={() => handleEditClick(index)}
              >
                Edit
              </Button>
              <Button variant="outlined" onClick={() => removeTodo(index)}>
                Delete
              </Button>
            </Box>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
