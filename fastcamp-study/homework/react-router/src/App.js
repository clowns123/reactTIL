import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./component/Home";
import Profile from "./component/Profile";
import About from "./component/About";
import NotFound from "./component/NotFound";
import Links from "./component/Links";
import Login from "./component/Login";

function App() {
  let isLogin = false;
  return (
    <BrowserRouter>
      <Links />
      <Switch>
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route
          path="/login"
          render={() => (isLogin ? <Redirect to="/" /> : <Login />)}
        />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
