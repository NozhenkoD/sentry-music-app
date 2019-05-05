import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Container from "./containers";
import "antd/dist/antd.css";
import "./styles.css";

const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
