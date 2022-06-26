import React, { Component } from 'react';
import {
  NavLink,
} from 'react-router-dom';

class Schedule extends Component {
  render() {
    return (
      <div>
        <p>
          I am currently completing my <b>Masters</b> in Data Science 
        </p>
        <div className="schedule">
          <div className="year">
            <div className="term">
              <h3>Fall 2017</h3>
              <ul>
                <li>MATH210 - Multivariate Calculus</li>
                <li>MATH215 - Intro Linear Alg and Diff Eqtns</li>
              </ul>
            </div>
            <div className="term">
              <h3>Fall 2019</h3>
              <ul>
                <li>MATH250 - Discrete Mathematics I</li>
                <li>ECON200 - Principles of Microeconomics</li>
                <li>CPSC231 - Computer Science II</li>
                <li>CPSC298 - CPSC Colloquium(C++)</li>
                <li>PSY344 - Psych of Gender ID and Sexual Orientation</li>
              </ul>
            </div>
            <div className="term">
              <h3>Spring 2020</h3>
              <ul>
                <li>PHYS101 - General Physics I</li>
                <li>POSC110 - Intro to American Politics</li>
                <li>MATH440 - Topology</li>
                <li>HIST399 - Immig, Border and Chicano/a Exp</li>
                <li>CPSC392 - Introduction to Data Science</li>
                <li>CPSC350 - Data Structures and Algorithms</li>
              </ul>
            </div>
          </div>

          <div className="year">
            <div className="term">
              <h3>Fall 2020</h3>
              <ul>
                <li>MATH380 - Intro to Abstract Algebra</li>
                <li>MATH350 - Differential Equations</li>
                <li>MATH360 - Probability Theory</li>
              </ul>
            </div>
            <div className="term">
              <h3>Spring 2021</h3>
              <ul>
                <li>MATH454 - Numerical Analysis</li>
                <li>CPSC353 - Data Comms</li>
                <li>CPSC390 - Artificial Intelligence</li>
                <li>CPSC406 - Algorithm Analysis</li>
              </ul>
            </div>
            <div className="term">
              <h3>Fall 2021</h3>
              <ul>
                <li>PHYS102 - General Physics II</li>
                <li>CS532 - Computational Economics</li>
                <li>CS613 - Machine Learning</li>
                <li>CPSC354 - Programming Languages</li>
                <li>CPSC408 - Database Management</li>
              </ul>
            </div>
          </div>

          <div className="year">
            <div className="term">
              <h3>Spring 2022</h3>
              <ul>
                <li>CS612 - Advanced Numerical Methods</li>
                <li>CS611 - Time Series Analysis</li>
                <li>CS560 - Advanced Partial Differential Equations</li>
                <li>CPSC380 - Operating Systems</li>
                <li>CPSC298 - CPSC Colloquium(NLP)</li>
                <li>ARAB301 - Language and Culture of the Arabic World</li>
              </ul>
            </div>
          </div>

         

          
          
        </div>
      </div>
    );
  }
}

export default Schedule;
