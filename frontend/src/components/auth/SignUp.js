import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { Box, Stack, Typography, Button, TextField } from "@mui/material";

import { signUp } from "../../store/actions/authActions";

const SignUp = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    setUser({
      name: "",
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
            <Typography variant="h5">signUp</Typography>
            <TextField
              id="enter-name"
              label="enterName"
              variant="outlined"
              fullWidth
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <TextField
              id="enter-email"
              label="enterEmail"
              variant="outlined"
              fullWidth
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <TextField
              id="enter-password"
              type="password"
              label="enterPassword"
              variant="outlined"
              fullWidth
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <Button variant="contained" color="primary" type="submit">
              SignUp
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  );
};
export default SignUp;
