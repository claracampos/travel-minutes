import React, { useState } from "react";
import { firebase } from "./firebase/firebase";
import AppRouter from "./router/AppRouter";
import AppContext from "./context/AppContext";

function App() {
  const [user, setUser] = useState();

  firebase.auth().onAuthStateChanged(user => {
    user ? setUser(user.uid) : console.log("Not logged in");
  });

  return (
    <div>
      <AppContext.Provider value={user}>
        <AppRouter />
      </AppContext.Provider>
    </div>
  );
}

export default App;
