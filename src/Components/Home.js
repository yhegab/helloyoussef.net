import React, { Component } from 'react';
import {Img} from 'react-image';

class Home extends Component {
  render() {
    return (
      <div>
        <div className='baby'>
          <Img src='adult_youssef.jpeg' />
        </div>
        <h4>Hello,</h4>

        <p>
          My name is
          <b> Youssef Hegab</b>
          {' '}
          and I'm a Software Engineer(almost haha). In 2022, I graduated from Chapman University with my Bachelor's in Computer Science and a minor in Mathematics.</p>
        
        <p>
          In my free time, I&apos;m a big fan of music, movies, and TV Shows (for real, I even have a
          <a href="/#/favourites"> list</a>
          ). I also generally enjoy working on side projects that make my life easier.
        </p>
        
        <p>If you're looking to connect to talk about experiences, education, connect about an opportunity, or just hangout, feel free to send me an email or connect on linkedin!
        </p>

      </div>
    );
  }
}

export default Home;
