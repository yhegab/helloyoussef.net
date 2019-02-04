import React, { Component } from "react";
import Reflection from "./Reflection";
import threeA from "../Reflections/3A.md";

class Reflections extends Component {
  render() {
    return (
      <div>
        <p>It's good to reflect; starting in my 3A term, I've decided to start reflecting on each term's happenings.</p>
        
        <Reflection title="Fall 2018" date="December 2, 2018 @10am"
                    file={threeA}/>
      </div>
    );
  }
}
 
export default Reflections;