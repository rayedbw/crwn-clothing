import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBs-xxmIuEeqfC8H0y5EBq7O4ejA9bF4BA",
  authDomain: "crwn-clothin.firebaseapp.com",
  databaseURL: "https://crwn-clothin.firebaseio.com",
  projectId: "crwn-clothin",
  storageBucket: "crwn-clothin.appspot.com",
  messagingSenderId: "145025579742",
  appId: "1:145025579742:web:23cee32f8c550c2fabe04f",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
