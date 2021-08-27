import Header from "./components/header";
import Forms from "./components/form";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Forms />
    </div>
  );
}
export default App;
