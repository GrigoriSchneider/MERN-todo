import { BrowserRouter, Route, Switch } from "react-router-dom";

import Todos from "./components/todos/Todos";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NavBar from "./components/navBar/NavBar";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container maxWidth="md">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Todos} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
