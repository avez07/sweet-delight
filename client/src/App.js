import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/common/header";
import "./App.css";
import home from "./components/home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
