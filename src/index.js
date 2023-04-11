import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import store from "./reducers/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
      <App />
    </Provider>
  </React.StrictMode>
);
