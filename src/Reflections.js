import React, { Component } from "react";
import Reflection from "./Reflection";
import threeA from "./3A.md";

class Reflections extends Component {
  render() {
    return (
      <div>
        <Reflection title="3A" date="December 2, 2018 @10am"
                    file={threeA}/>
      </div>
    );
  }
}
 
export default Reflections;