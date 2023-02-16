import React from "react";
import { useDispatch } from "react-redux";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Stack from "@mui/material/Stack";

import moment from "moment";

import { checkTodo, deleteTodo } from "../../store/actions/todoActions";

const Todo = ({ todo, setTodo }) => {
  const dispatch = useDispatch();
  const handleUpdateClick = () => {
    setTodo(todo);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleCheck = (id) => {
    dispatch(checkTodo(id));
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <Box
        sx={{
          m: 2,
          border: 1,
          borderRadius: 1,
          borderColor: "darkgrey",
          p: 2,
          backgroundColor: "#fafafa",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          spacing={2}
        >
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            <div>
              {todo.isComplete ? (
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 1, textDecoration: "line-through" }}
                >
                  {todo.name}
                </Typography>
              ) : (
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  {todo.name}
                </Typography>
              )}

              <Typography color="gray" variant="body2">
                Author: Grigori
              </Typography>
              <Typography color="gray" variant="body2">
                Added: {moment(todo.date).fromNow()}
              </Typography>
            </div>
          </Stack>

          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-start"
            spacing={2}
          >
            <div>
              <ButtonGroup
                size="small"
                aria-label="outlined primary button group"
              >
                <Button type="submit" onClick={() => handleCheck(todo._id)}>
                  {todo.isComplete ? (
                    <CheckCircleIcon color="success" />
                  ) : (
                    <CheckCircleIcon color="action" />
                  )}
                </Button>

                <Button type="submit" onClick={() => handleUpdateClick()}>
                  <CreateIcon color="primary" />
                </Button>

                <Button type="submit" onClick={() => handleDelete(todo._id)}>
                  <DeleteIcon color="secondary" />
                </Button>
              </ButtonGroup>
            </div>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Todo;
