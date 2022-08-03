import React from "react";
import ReactDOM from "react-dom";

export default function Content(props) {
  return (
    <section>
      <h1>Welcome Back,{props.user}!</h1>
    </section>
  );
}
