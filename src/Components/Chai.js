import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
const knope = require('knope')

class Chai extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secretVisible: false,
      password: '',
      letter: '',
      name: ''
    };
    this.chai = this.chai.bind(this);
    this.password = this.password.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    const { password } = this.state;
    e.preventDefault();
    fetch(`https://us-central1-chaishai.cloudfunctions.net/checkPassword?password=${password}`)
      .then((res) => {
        this.setState({
          secretVisible: res.status === 200,
        });
      });

    fetch(`https://us-central1-chaishai.cloudfunctions.net/getLetter?letter=letter.md&password=${password}`)
      .then((res) => res.text())
      .then((text) => {
        this.setState({ letter: text });
      });
    
    fetch(`https://us-central1-chaishai.cloudfunctions.net/getName?password=${password}`)
      .then((res) => res.text())
      .then((text) => {
        this.setState({ name: text, compliment: knope.getOfficialCompliment(text)});
      });
  }

  password() {
    const { password } = this.state;
    return (
      <div>
        <p>Enter Password</p>
        <form onSubmit={this.onSubmit}>
          <input value={password} type="password" onChange={this.onChange} />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }

  chai() {
    // Pass in the name as a parameter

    const { letter, password } = this.state;
    return (
      <div>
        <h2 onClick={() => this.setState({compliment: knope.getCompliment(this.state.name)})}>{this.state.compliment}</h2>
        <div className="pictures">
          <div className="row">
            <div className="column">
              <img alt="chaipic" src={`https://us-central1-chaishai.cloudfunctions.net/getImage?password=${password}&image=chai3.jpeg`} style={{ width: '100%' }} />
            </div>
            <div className="column">
              <img alt="chaipic" src={`https://us-central1-chaishai.cloudfunctions.net/getImage?password=${password}&image=chai5.jpeg`} style={{ width: '100%' }} />
            </div>
            <div className="column">
              <img alt="chaipic" src={`https://us-central1-chaishai.cloudfunctions.net/getImage?password=${password}&image=chai6.jpeg`} style={{ width: '100%' }} />
            </div>
          </div>
        </div>

        <div className="letter">
          <ReactMarkdown>{letter}</ReactMarkdown>
        </div>

        <div className="row">
          <div className="column">
            <img alt="chaipic" src={`https://us-central1-chaishai.cloudfunctions.net/getImage?password=${password}&image=IMG_7855.JPG`} style={{ width: '100%' }} />
          </div>
          <div className="column">
            <img alt="chaipic" src={`https://us-central1-chaishai.cloudfunctions.net/getImage?password=${password}&image=IMG_73BA7A4DF375-1.jpeg`} style={{ width: '100%' }} />
          </div>
          <div className="column">
            <img alt="chaipic" src={`https://us-central1-chaishai.cloudfunctions.net/getImage?password=${password}&image=IMG_85991C6C6CF2-1.jpeg`} style={{ width: '100%' }} />
          </div>
        </div>

      </div>
    );
  }

  render() {
    const { secretVisible } = this.state;
    let pageToDisplay;
    if (secretVisible) {
      pageToDisplay = this.chai();
    } else {
      pageToDisplay = this.password();
    }
    return pageToDisplay;
  }
}

export default Chai;
