import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ReactGA from "react-ga";
import Home from "./Home";
import Social from "./Social";
import Technical from "./Technical";
import Resume from "./Resume";

ReactGA.initialize('UA-123367662-1');

function fireTracking() {
  ReactGA.pageview(window.location.pathname + window.location.search);
}

class Main extends Component {
  render() {
    return (
      <HashRouter onUpdate={fireTracking}>
        <div>
          <div className="content">
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink exact to="/technical">Technical</NavLink></li>
              <li><NavLink to="/resume">Resume</NavLink></li>
            </ul>
            <h1>Jafer Haider</h1>
            <Social/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/technical" component={Technical}/>
            <Route path="/resume" component={Resume}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;