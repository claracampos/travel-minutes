import React from "react";
import AppRouter from "./router/AppRouter";
import AppContext from "./context/AppContext";

const App = props => {
  console.log(props.user);
  return (
    <div>
      <AppContext.Provider value={{ user: props.user }}>
        <AppRouter />
      </AppContext.Provider>
    </div>
  );
};

export default App;
