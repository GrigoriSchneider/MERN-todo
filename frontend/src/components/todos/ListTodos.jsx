import React from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Todo from "./Todo";
import Box from "@mui/material/Box";

const ListTodos = () => {
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
          <Typography variant="h5">ListTodos</Typography>
        </div>
        <Todo />
      </Box>
    </>
  );
};

export default ListTodos;
