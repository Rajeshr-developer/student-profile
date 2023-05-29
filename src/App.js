import React, { useState } from "react";
import LoginPage from "./components/Login";
import DashBoard from "./components/DashBoard";
import { GlobalStyle, RootClass } from "./styles/DashBoardStyle";
import "./App.css";

function App() {
  const [currentState, setState] = useState("LOGIN");
  const changeState = (param) => {
    setState(param);
  };
  return (
    <>
      <GlobalStyle />
      <RootClass className="App">
        {currentState === "LOGIN" ? (
          <LoginPage changeState={changeState} />
        ) : (
          <DashBoard />
        )}
      </RootClass>
    </>
  );
}

export default App;
