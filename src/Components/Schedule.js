import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
 
class Schedule extends Component {
  render() {
    return (
      <div>
        <p>This is a schedule of the courses I have taken and plan to take. I plan to fill in the business courses towards a <b>Finance</b> concentration. The French courses (taken mostly at Laurier) are put towards a <b>French</b> minor. Note that I skipped from 2B to 3B due to extra credits.</p>
        <p>I am currently in my <b>3B</b> term.</p>
        <div className="schedule">
        <div className="year">
          <div className="title">
            <h4>2016-2017</h4>
          </div>
          <div className="term">
            <h3>1A: Fall 2016</h3>
            <ul>
              <li>BU111 - Business Environment</li>
              <li>EC120 - Microeconomics</li>
              <li>CS135 - Functional Programming</li>
              <li>MATH135 - Algebra (proofs)</li>
              <li>MATH137 - Calculus I</li>
            </ul>
          </div>
          <div className="term">
            <h3>1B: Winter 2017</h3>
            <ul>
              <li>BU121 - Business Functions</li>
              <li>EC140 - Macroeconomics</li>
              <li>CS136 - Algorithms & Data Abstraction</li>
              <li>SPCOM223 - Public Speaking</li>
              <li>MATH128 - Calculus II</li>
              <li>PD1 - Career Fundamentals</li>
            </ul>
          </div>
          <div className="term">
            <h3>Spring 2017</h3>
            <ul>
              <li>MATH136 - Linear Algebra</li>
              <li><b>Intern - Camis Inc.</b></li>
            </ul>
          </div>
        </div>

        <div className="year">
          <div className="title">
            <h4>2017-2018</h4>
          </div>
          <div className="term">
            <h3>2A: Fall 2017</h3>
            <ul>
              <li>BU127 - Financial Accounting</li>
              <li>BU283 - Corporate Finance I</li>
              <li>BU288 - Organizational Behaviour I</li>
              <li>CS245 - Logic and Computation</li>
              <li>CS246 - Object-Oriented Software</li>
              <li>STAT230 - Probability</li>
            </ul>
          </div>
          <div className="term">
            <h3>Winter 2017</h3>
            <ul>
              <li>CO250 - Introduction to Optimization</li>
              <li><b>Intern - BMO Capital Markets</b></li>
            </ul>
          </div>
          <div className="term">
            <h3>2B: Spring 2018</h3>
            <ul>
              <li>BU231 - Business Law</li>
              <li>BU247 - Managerial Accounting</li>
              <li><NavLink to="/cs240">CS240</NavLink> - Data Structures</li>
              <li>CS241 - Compilers</li>
              <li>CS251 - Computer/Circuit Design</li>
              <li>STAT231 - Statistics</li>
            </ul>
          </div>
        </div>
        
        <div className="year">
          <div className="title">
            <h4>2018-2019</h4>
          </div>
          <div className="term">
            <h3>3B: Fall 2018</h3>
            <ul>
              <li>BU393 - Corporate Finance II</li>
              <li>BU352 - Human Resources</li>
              <li>BU354 - Marketing</li>
              <li>CS350 - Operating Systems</li>
              <li>MATH239 - Combinatronics</li>
              <li><b>Intern - National Logistics Services</b></li>
            </ul>
          </div>
          <div className="term">
            <h3>4A: Winter 2019</h3>
            <ul>
              <li><NavLink to="/bu362">BU362</NavLink> - Product management</li>
              <li>BU375 - Operations management</li>
              <li>BU398 - Organizational Behaviour II</li>
              <li><NavLink to="/cs341">CS341</NavLink> - Algorithms</li>
            </ul>
          </div>
          <div className="term">
            <h3>Spring 2019</h3>
            <ul>
              <li><b>Intern - A nice company, hopefully</b></li>
            </ul>
          </div>
        </div>
      
        <div className="year">
          <div className="title">
            <h4>2019-2020</h4>
          </div>
          <div className="term">
            <h3>4B: Fall 2019</h3>
            <ul>
              <li>BU481 - Business Policy I</li>
              <li>BU???</li>
              <li>CS343 - Concurrency Programming</li>
              <li>?????</li>
              <li>?????</li>
            </ul>
          </div>
          <div className="term">
            <h3>Winter 2020</h3>
            <ul>
              <li><b>Intern - A nice company, hopefully</b></li>
            </ul>
          </div>
          <div className="term">
            <h3>5A: Spring 2020</h3>
            <ul>
              <li>BU491 - Business Policy II</li>
              <li>BU???</li>
              <li>???</li>
              <li>CS490 - Information Systems</li>
              <li>CS452 - Real-time Programming</li>
            </ul>
          </div>
        </div>
        
        <div className="finalYear">
          <div className="title">
            <h4>2020-2021</h4>
          </div>
          <div className="term">
            <h3>Fall 2020</h3>
            <ul>
              <li><b>Intern - A nice company, hopefully</b></li>
            </ul>
          </div>
          <div className="term">
            <h3>5B: Winter 2021</h3>
            <ul>
              <li>BU???</li>
              <li>BU???</li>
              <li>???</li>
              <li>CS444/? - Compiler Construction</li>
              <li>CS492 - Implications of Computing</li>
            </ul>
          </div>
          <div className="term">
            <h3>6A: Spring 2021</h3>
            <ul>
              <li>BU???</li>
              <li>BU???</li>
              <li>EC250 - Economics II</li>
              <li>CS458 - Computer Security</li>
              <li>CS???</li>
            </ul>
          </div>
        </div>

      </div>
      </div>
    );
  }
}
 
export default Schedule;