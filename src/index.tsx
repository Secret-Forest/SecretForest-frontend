import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const agent: string = navigator.userAgent.toLowerCase();

if (
  (navigator.appName === "Netscape" &&
    navigator.userAgent.search("Trident") !== -1) ||
  agent.indexOf("msie") !== -1
) {
  alert("Internet Explorer는 호환되지 않는 브라우저 입니다.");
} else {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
