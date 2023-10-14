import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import "./App.css";
import "./style.css"
import home from "./components/pages/home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
