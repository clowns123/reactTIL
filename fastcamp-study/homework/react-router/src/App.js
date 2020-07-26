import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Profile from "./component/Profile";
import About from "./component/About";
import NotFound from "./component/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/profile/:id" component={Profile} />
                <Route path="/profile" component={Profile} />
                <Route path="/about" component={About} />
                <Route path="/" exact component={Home} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
