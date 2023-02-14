import React from "react";

import { Box, Stack, Typography, Button, TextField } from "@mui/material";

const SignIn = () => {
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
          boxShadow: 3,
        }}
      >
        <form noValidate="off">
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="baseline"
            spacing={2}
            sx={{ m: 2 }}
          >
            <Typography variant="h5">SignIn</Typography>
            <TextField
              id="enter-email"
              label="enterEmail"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="enter-password"
              type="password"
              label="enterPassword"
              variant="outlined"
              fullWidth
            />
            <Button variant="contained" color="primary" type="submit">
              SignIn
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  );
};

export default SignIn;
