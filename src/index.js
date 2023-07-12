import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
let store = createStore(allReducers);
console.log("store", store.getState().counterValue);
console.log("store", store.getState().loginValue);
root.render(
  <Auth0Provider
    domain="dev-63c6kn1bvk4wrxhp.us.auth0.com"
    clientId="n4nF7U8MUEgOmulidVa7XMbTONNh9DBV"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
