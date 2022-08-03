import React from "react";
import ReactDOM from "react-dom";

export default function Header(props) {
  return (
    <header>
      <p>Current User: {props.user}</p>
    </header>
  );
}
