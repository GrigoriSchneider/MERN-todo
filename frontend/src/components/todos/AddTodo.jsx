import React from "react";
import { useDispatch } from "react-redux";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { addTodo, updateTodo } from "../../store/actions/todoActions";

const AddTodo = ({ todo, setTodo }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo._id) {
      const id = todo._id;
      const updatedTodo = {
        name: todo.name,
        isComplete: todo.isComplete,
        date: todo.date,
        author: todo.author,
        uid: todo.uid,
      };

      dispatch(updateTodo(updatedTodo, id));
    } else {
      const newTodo = {
        ...todo,
        date: new Date(),
      };
      dispatch(addTodo(newTodo));
    }

    setTodo({
      name: "",
      isComplete: false,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            m: 2,
            border: 1,
            borderRadius: 1,
            p: 2,
            backgroundColor: "#fafafa",
          }}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <TextField
              id="enter-todo"
              label="enterToDo"
              variant="outlined"
              autoFocus
              fullWidth
              sx={{ mt: 3 }}
              value={todo.name}
              onChange={(e) => setTodo({ ...todo, name: e.target.value })}
            />
            <Button
              color="primary"
              variant="contained"
              sx={{ mt: 3, ml: 1 }}
              size="large"
              type="submit"
            >
              <SendIcon />
            </Button>
          </Stack>
        </Box>
      </form>
    </>
  );
};

export default AddTodo;
