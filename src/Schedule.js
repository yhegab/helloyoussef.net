import React, { Component } from "react";
 
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
              <li>BU111</li>
              <li>EC120</li>
              <li>CS135</li>
              <li>MATH135</li>
              <li>MATH137</li>
            </ul>
          </div>
          <div className="term">
            <h3>1B: Winter 2017</h3>
            <ul>
              <li>BU121</li>
              <li>EC140</li>
              <li>CS136</li>
              <li>SPCOM223</li>
              <li>MATH128</li>
              <li>PD1</li>
            </ul>
          </div>
          <div className="term">
            <h3>Spring 2017</h3>
            <ul>
              <li>MATH136</li>
              <li><b>COOP</b></li>
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
              <li>BU127</li>
              <li>BU283</li>
              <li>BU288</li>
              <li>CS245</li>
              <li>CS246</li>
              <li>STAT230</li>
            </ul>
          </div>
          <div className="term">
            <h3>Winter 2017</h3>
            <ul>
              <li>CO250</li>
              <li><b>COOP</b></li>
            </ul>
          </div>
          <div className="term">
            <h3>2B: Spring 2018</h3>
            <ul>
              <li>BU231</li>
              <li>BU247</li>
              <li>CS240</li>
              <li>CS241</li>
              <li>CS251</li>
              <li>STAT231</li>
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
              <li>BU393</li>
              <li>BU352</li>
              <li>BU354</li>
              <li>CS350</li>
              <li>MATH239</li>
              <li><b>COOP</b></li>
            </ul>
          </div>
          <div className="term">
            <h3>4A: Winter 2018</h3>
            <ul>
              <li>BU362</li>
              <li>BU375</li>
              <li>BU398</li>
              <li>CS341</li>
              <li>FR151</li>
            </ul>
          </div>
          <div className="term">
            <h3>Spring 2019</h3>
            <ul>
              <li>FR251</li>
              <li><b>COOP</b></li>
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
              <li>BU481</li>
              <li>BU???</li>
              <li>CS343</li>
              <li>FR225</li>
              <li>FR385</li>
              <li></li>
            </ul>
          </div>
          <div className="term">
            <h3>Winter 2020</h3>
            <ul>
              <li><b>COOP</b></li>
            </ul>
          </div>
          <div className="term">
            <h3>5A: Spring 2020</h3>
            <ul>
              <li>BU491</li>
              <li>BU???</li>
              <li>CS490</li>
              <li>CS452</li>
              <li>FR2?6</li>
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
              <li><b>COOP</b></li>
            </ul>
          </div>
          <div className="term">
            <h3>5B: Winter 2021</h3>
            <ul>
              <li>BU???</li>
              <li>BU???</li>
              <li>CS444/?</li>
              <li>CS492</li>
              <li>FR260</li>
            </ul>
          </div>
          <div className="term">
            <h3>6A: Spring 2021</h3>
            <ul>
              <li>BU???</li>
              <li>BU???</li>
              <li>EC250</li>
              <li>CS458</li>
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