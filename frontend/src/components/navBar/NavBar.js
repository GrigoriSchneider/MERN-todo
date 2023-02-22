import React from "react";

import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signOut } from "../../store/actions/authActions";

const NavBar = () => {
  const state = useSelector((state) => state);
  const auth = useSelector((state) => state.auth);
  console.log(state);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    // signOut the user
    dispatch(signOut());
    history.push("/signin");
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h4"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
            }}
          >
            <Link
              sx={{
                mr: 2,

                display: { xs: "none", md: "flex" },
              }}
              to="/"
            >
              todoApp
            </Link>
          </Typography>

          {auth._id ? (
            <>
              <Typography sx={{ flexGrow: 1 }}>
                logged in as {auth.name}
              </Typography>

              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => handleSignOut()}
              >
                SignOut
              </Button>
            </>
          ) : (
            <>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                href="/signin"
              >
                SignIn
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                href="/signup"
              >
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
