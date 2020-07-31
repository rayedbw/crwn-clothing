import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./pages/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import HomePage from "./pages/homepage/hompage.component";
import Shop from "./pages/shop/shop.component";

import { auth } from "./firebase/firebase.utils";

import "./App.css";

const useAuthenticatedUser = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return currentUser;
};

const App = () => {
  const currentUser = useAuthenticatedUser();

  return (
    <Router>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/sign-in">
          <SignInAndSignUp />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
