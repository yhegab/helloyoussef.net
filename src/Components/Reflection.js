import React, { Component } from "react";
import MarkdownComponent from './MarkdownComponent';
import threeA from "../Reflections/3A.md";

class Reflection extends Component {

  constructor(props) {
    super(props);
    this.state = {file: this.props.file};
  }

  async componentDidMount() {
    // const result = await fetch(this.props.file);
    // const text = await result.text();
    // this.setState({ reflection: text })
  }

  render() {
    //console.log(this.state.file);
    return (
      <div className="reflection">
        <h2>{this.props.title}</h2>
        <h4>{this.props.date}</h4>
        <MarkdownComponent markdownSrcPromise={this.state.file} />      </div>
    );
  }
}
 
export default Reflection;