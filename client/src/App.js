import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "./components/authentication/auth";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import home from "./components/pages/home";
import Category from "./components/pages/category";
import Login from "./components/authentication/login";
import Signup from "./components/authentication/signup";
import "../src/css/App.css";
import "../src/css/style.css";
import Layout from "./components/common/admin-layout";
import SellLayout from "./components/common/seller-layout";
import AdminHome from "./components/admin/home";
import Product from "./components/admin/product";
import SellerHome from "./components/seller/home";
import ManageProduct from "./components/seller/manage-product";
import AddProduct from "./components/seller/add-product";


function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route>
            {isAuthenticated === 1 ? (
              <Layout>
                <Switch>
                  <Route exact path="/" component={AdminHome} />
                  <Route path="/product" component={Product} />

                </Switch>
              </Layout>
            ) : isAuthenticated === 2 ? (
              <SellLayout>
              <Switch>
                <Route exact path="/" component={SellerHome} />
                <Route path="/manage-product" component={ManageProduct} />
                <Route  path="/add-product" component={AddProduct} />


              </Switch>
            </SellLayout>

            ): isAuthenticated === 3 || isAuthenticated === 0 ? (
              <div>
                <Header />
                <Switch>
                  <Route exact path="/" component={home} />
                  <Route path="/about" component={Category} />
                </Switch>
                <Footer />
              </div>
            ) : null}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
