import React from "react";
import { firebase } from "./firebase/firebase";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;

firebase.auth().onAuthStateChanged(user => {
  user ? console.log("Logged in") : console.log("Not logged in");
});
