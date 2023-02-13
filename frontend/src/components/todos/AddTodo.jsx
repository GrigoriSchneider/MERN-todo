import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const AddTodo = () => {
  return (
    <>
      <form>
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
            />
            <Button
              color="primary"
              variant="contained"
              sx={{ mt: 3, ml: 1 }}
              size="large"
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
