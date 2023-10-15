import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import home from "./components/pages/home";
import category from "./components/pages/category";
import "./App.css";
import "./style.css"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={home} />
          <Route  path="/about" component={category} />

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
