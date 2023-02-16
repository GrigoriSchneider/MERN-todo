import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

import Todo from "./Todo";
import { getTodos } from "../../store/actions/todoActions";

const ListTodos = ({ setTodo }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      <Box
        sx={{
          m: 2,
          border: 1,
          borderRadius: 1,
          p: 2,
          backgroundColor: "#fafafa",
          boxShadow: 3,
        }}
      >
        <div>
          <Typography variant="h5">
            {todos.length > 0 ? "theTodos;" : "noTodosYet"}
          </Typography>
        </div>
        {todos &&
          todos.map((todo) => {
            return (
              <Todo
                todo={todo}
                key={todo._id}
                setTodo={setTodo}
                todos={todos}
              />
            );
          })}
      </Box>
    </>
  );
};

export default ListTodos;
