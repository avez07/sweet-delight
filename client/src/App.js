import {React,useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import home from "./components/pages/home";
import Category from "./components/pages/category";
import Login from "./components/authentication/login";
import Signup from "./components/authentication/signup";
import "./App.css";
import "./style.css"

function App() {
  const [loginID, setLoginID] = useState(1);
  return (
    <>
      <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route>
          {loginID === 1 ? (
            <div>
              {/* Different routes and components for login ID 1 */}
              <Header />
              <Switch>
                <Route exact path="/" component={home} />
                <Route path="/about" component={Category} />
                {/* Add more routes specific to login ID 1 if needed */}
              </Switch>
              <Footer />
            </div>
          ) : (
            <div>
              
              <Header />
              <Switch>
                <Route exact path="/" component={home} />
                <Route path="/about" component={Category} />
                {/* Add more routes for other login IDs if needed */}
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
