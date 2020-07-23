import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Profile from "./component/pages/Profile";
import NotFound from "./component/pages/NotFound";
import Login from "./component/pages/Login";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={{ fontSize: 5 }}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active">
            /profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile/33">/profile/33</NavLink>
        </li>
        <li>
          <NavLink to="/about">/about</NavLink>
        </li>
        <li>
          <NavLink to="/login">/login</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
