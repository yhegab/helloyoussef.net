import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
import { CookiesProvider } from 'react-cookie';


ReactDOM.render(
  <CookiesProvider>
    <Main/>
  </CookiesProvider>, 
  document.getElementById("root")
);