import React from "react";
import "./firebase/firebase";
import Header from "./components/Header";
import AddEntry from "./components/AddEntry";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
