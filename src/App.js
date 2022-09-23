import React from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import About from "./pages/About.jsx";
import Stocks from "./pages/Stocks.jsx";
import Main from "./pages/Main.jsx";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/stocks/:symbol" render={(routerProps) => <Stocks {...routerProps} />} />
        <Route path="/stocks">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
