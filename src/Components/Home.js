import React, { Component } from 'react';
import {Img} from 'react-image';

class Home extends Component {
  render() {
    return (
      <div>
        <div className='baby'>
          <Img src='baby_jafer.jpeg' />
        </div>
        <h4>Hi there,</h4>

        <p>
          My name is
          <b> Jafer Haider</b>
          {' '}
          and I&apos;m a double-degree student at the University of Waterloo and Wilfrid Laurier University. </p>
        
        <p>
          In my free time, I&apos;m a big fan of board games, movies, and TV Shows (for real, I even have a
          <a href="/#/favourites"> list</a>
          ). I also generally enjoy working on side projects that make my life easier. In particular, there's a good chance you've come across my website because of my popular <a href="/#/parser">resume parser project</a>.
        </p>
        
        <p>If you're looking to connect, we can hop on a Google Meet to talk about experiences, education, connect about an opportunity, or just hangout -- <a href="https://calendly.com/itsjafer/coffee-chat"> schedule a coffee chat on my calendar</a>!
        </p>

      </div>
    );
  }
}

export default Home;
