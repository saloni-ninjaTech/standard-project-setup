import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./reducers/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
