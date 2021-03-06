import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import HelloComponent from "./component/HelloComponent";
import StateFullComponent from "./container/StateFullComponent";
import FormLoginComponent from "./component/FormLoginComponent";
import FormLoginStateFull from "./container/FormLoginStateFull";

ReactDOM.render(<FormLoginStateFull />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
