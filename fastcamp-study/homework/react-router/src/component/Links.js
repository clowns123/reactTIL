import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import About from "./About";
import Home from "./Home";
import NotFound from "./NotFound";

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
