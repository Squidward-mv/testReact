import React from "react";
import "../components/stylee.scss";
// import "../components/main.js";
function Contact() {
  return (
    <body class="trash">
      <div class="wrapper">
        <div class="stepper">
          <button id="increase">+</button>
          <span id="decimal" class="decimal">
            0
          </span>
          <button id="decrease">-</button>
        </div>
        <div class="counter">
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
        </div>
      </div>
    </body>
  );
}

export default Contact;
