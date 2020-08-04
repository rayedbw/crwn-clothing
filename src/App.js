import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./pages/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import HomePage from "./pages/homepage/hompage.component";
import Shop from "./pages/shop/shop.component";
import { auth, createUserProfile } from "./firebase/firebase.utils";

import "./App.css";

const useAuthenticatedUser = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        const userRef = await createUserProfile(authUser);

        userRef.onSnapshot(snapshot => {
          setAuthUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setAuthUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return authUser;
};

const App = () => {
  const authUser = useAuthenticatedUser();

  return (
    <Router>
      <Header authUser={authUser} />
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
