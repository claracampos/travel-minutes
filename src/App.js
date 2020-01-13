import React from "react";
import "./firebase/firebase";
import Header from "./components/Header";
import AddEntry from "./components/AddEntry";

function App() {
  return (
    <div>
      <Header />
      <AddEntry />
    </div>
  );
}

export default App;
