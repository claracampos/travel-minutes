import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { firebase } from "./firebase/firebase";

const renderApp = user => {
  ReactDOM.render(<App user={user} />, document.getElementById("root"));
};

firebase.auth().onAuthStateChanged(user => {
  user ? renderApp(user.uid) : renderApp(false);
});
