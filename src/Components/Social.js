import React, { Component } from 'react';

class SocialIcon extends Component {
  render() {
    const { link, name } = this.props;
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={`${window.location.origin}/icons/${name}.svg`} alt={`${name} logo`} />
      </a>
    );
  }
}

class Social extends Component {
  render() {
    return (
      <div className="social">
        <SocialIcon link="http://github.com/yhegab" name="github" />
        <SocialIcon link="http://www.linkedin.com/in/yhegab" name="linkedin" />
        <SocialIcon link="mailto:youssef.hegab@gmail.com" name="email" />
        <SocialIcon link="https://twitter.com/techssef" name="twitter" />
        <SocialIcon link="http://instagram.com/youssef.hegab" name="instagram" />
      </div>
    );
  }
}

export default Social;
