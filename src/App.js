import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [user, setuser] = React.useState("Joe");
  return (
    <div className="container">
      <Header user={user} />
      <Content user={user} />
    </div>
  );
}

export default App;
