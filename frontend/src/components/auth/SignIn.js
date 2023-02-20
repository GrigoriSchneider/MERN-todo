import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { signIn } from "../../store/actions/authActions";

import { Box, Stack, Typography, Button, TextField } from "@mui/material";

const SignIn = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds));
    setCreds({
      email: "",
      password: "",
    });
  };

  if (auth._id) return <Redirect to="/" />;

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
        <form noValidate="off" onSubmit={handleSubmit}>
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
              value={creds.email}
              onChange={(e) => setCreds({ ...creds, email: e.target.value })}
            />
            <TextField
              id="enter-password"
              type="password"
              label="enterPassword"
              variant="outlined"
              fullWidth
              value={creds.password}
              onChange={(e) => setCreds({ ...creds, password: e.target.value })}
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
