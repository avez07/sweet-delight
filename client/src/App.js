import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import home from "./components/pages/home";
import Category from "./components/pages/category";
import Login from "./components/authentication/login";
import "./App.css";
import "./style.css"

function App() {
  return (
    <>
       <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={home} />
              <Route path="/about" component={Category} />
            </Switch>
            <Footer />
          </div>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
