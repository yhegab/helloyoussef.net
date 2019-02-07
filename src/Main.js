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
import threeA from "./Reflections/3A.md";
import CS240 from "./Courses/CS240.md";
import BU362 from "./Courses/BU362.md";
import CS341 from "./Courses/CS341.md";
import MATH239 from "./Courses/MATH239.md";
import COOPWINTER2019 from "./Reflections/COOPWINTER2019.md";

const MATHJAX_SCRIPT = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS_SVG';

const MATHJAX_OPTIONS = {
  "fast-preview": {disabled:true},
  tex2jax: {
    inlineMath: [ ['$','$'], ['\\(','\\)'] ],
    displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
  },
  showMathMenu: true,
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
              <li><NavLink to="/schedule">Undergrad</NavLink></li>
              <li><NavLink to="/resume">Resume</NavLink></li>
            </ul>
            <h1>Jafer Haider</h1>
            <Social/>

            <Route exact path="/" component={Home}/>
            <Route exact path="/technical" component={Technical}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/favourites" component={Favourites}/>
            <Route path="/schedule" component={Schedule}/>
            <Route path="/3a" component={() => <Reflection title="Term Reflection" date="Fall 2018: December 2, 2018 @10am"
                    file={threeA}/>}/>
            <Route path="/cs240" component={() => <Reflection title="CS240" date="Spring 2018"
                    file={CS240}/>}/>
            <Route path="/bu362" component={() => <Reflection title="BU362" date="Winter 2019"
                    file={BU362}/>}/>
            <Route path="/cs341" component={() => <Reflection title="CS341" date="Winter 2019"
                    file={CS341}/>}/>
            <Route path="/math239" component={() => <Reflection title="MATH239" date="Fall 2018"
                    file={MATH239}/>}/>
            <Route path="/coopwinter2019" component={() => <Reflection title="The Co-Op Search" date="Winter 2019"
                    file={COOPWINTER2019}/>}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;