import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ReactGA from "react-ga";
import loadScript from 'load-script'
import Home from "./Components/Home";
import Social from "./Components/Social";
import Technical from "./Components/Technical";
import Resume from "./Components/Resume";
import Favourites from "./Components/Favourites";
import Schedule from "./Components/Schedule";
import Reflection from "./Components/Reflection";
import Reflections from "./Components/Reflections";
import CS240 from "./Courses/CS240.md";
import BU362 from "./Courses/BU362.md";
import CS341 from "./Courses/CS341.md";
import MATH239 from "./Courses/MATH239.md";

const MATHJAX_SCRIPT = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML';

const MATHJAX_OPTIONS = {
  tex2jax: {
    inlineMath: [ ['$','$'], ['\\(','\\)'] ],
    displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
  },
  showMathMenu: false,
  showMathMenuMSIE: false,
};

ReactGA.initialize('UA-123367662-1');

function fireTracking() {
  ReactGA.pageview(window.location.pathname + window.location.search);
}

class Main extends Component {
  constructor(props) {
    super(props);
    loadScript(MATHJAX_SCRIPT, () => {
      window.MathJax.Hub.Config(MATHJAX_OPTIONS);
    });
}

  render() {
    return (
      <HashRouter onUpdate={fireTracking}>
        <div>
          <div className="content">
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink exact to="/technical">Technical</NavLink></li>
              <li><NavLink to="/favourites">List of Favourites</NavLink></li>
              <li><NavLink to="/schedule">Course Notes</NavLink></li>
              <li><NavLink to="/reflections">Term Reflections</NavLink></li>
              <li><NavLink to="/resume">Resume</NavLink></li>
            </ul>
            <h1>Jafer Haider</h1>
            <Social/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/technical" component={Technical}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/favourites" component={Favourites}/>
            <Route path="/reflections" component={Reflections}/>
            <Route path="/schedule" component={Schedule}/>
            <Route path="/cs240" component={() => <Reflection title="CS240" date="Spring 2018"
                    file={CS240}/>}/>
            <Route path="/bu362" component={() => <Reflection title="BU362" date="Winter 2019"
                    file={BU362}/>}/>
            <Route path="/cs341" component={() => <Reflection title="CS341" date="Winter 2019"
                    file={CS341}/>}/>
            <Route path="/math239" component={() => <Reflection title="MATH239" date="Fall 2018"
                    file={MATH239}/>}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;