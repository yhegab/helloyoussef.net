import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/resume">Resume</NavLink></li>
          </ul>
          <h1>Jafer Haider</h1>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/resume" component={Home}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;