import React, { Component } from "react";

class SocialIcon extends Component {
  render() {
    return(
      <a href={this.props.link} target="_blank" rel="noopener noreferrer">
        <img src={window.location.origin + "/icons/" + this.props.name + ".svg"} alt={this.props.name + " logo"}/>
      </a>
    );
  }
}

class Social extends Component {
  render() {
    return (
      <div className="social">
        <SocialIcon link="http://github.com/itsjafer" name="github"/>
        <SocialIcon link="http://www.linkedin.com/in/itsjafer" name="linkedin"/>
        <SocialIcon link="mailto:itsjafer@gmail.com" name="email"/>
        <SocialIcon link="http://facebook.com/itsjafer" name="facebook"/>
        <SocialIcon link="http://instagram.com/itsjafer" name="instagram"/>
      </div>
    );
  }
}
 
export default Social;