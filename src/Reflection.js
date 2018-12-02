import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

class Reflection extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    fetch(this.props.file).then((response) => response.text()).then((text) => {
      this.setState({ reflection: text })
    })
  }

  render() {
    return (
      <div className="reflection">
        <h2>{this.props.title}</h2>
        <h4>{this.props.date}</h4>
        <ReactMarkdown source={this.state.reflection} />,
      </div>
    );
  }
}
 
export default Reflection;