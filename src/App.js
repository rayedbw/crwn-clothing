import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./pages/header/header.component";
import HomePage from "./pages/homepage/hompage.component";
import Shop from "./pages/shop/shop.component";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
