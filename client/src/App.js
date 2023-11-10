import React, { useContext }  from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {AuthContext} from "./components/authentication/auth";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import AdminHeader from './components/admin/header'
import home from "./components/pages/home";
import Category from "./components/pages/category";
import Login from "./components/authentication/login";
import Signup from "./components/authentication/signup";
import Page from "./components/admin/pages";
import "./App.css";
import "./style.css";
// import Layout from "./components/admin/layout";


function App() {
  const { isAuthenticated } = useContext(AuthContext);
//  useEffect(()=>{
// console.log("1234")
//  })
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route>
            {isAuthenticated ? (
              <div>
                <AdminHeader />
                <Switch>
                  <Route exact path="/" component={Page} />
                  <Route path="/about" component={Category} />
                </Switch>
                <Footer />
              </div>
            ) : (
              <div>
                <Header />
                <Switch>
                  <Route exact path="/" component={home} />
                  <Route path="/about" component={Category} />
                </Switch>
                <Footer />
              </div>
            )}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
