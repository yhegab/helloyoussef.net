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
          <b> Syed Jafer Haider</b>
          {' '}
          and I&apos;m a student studying concurrently at the University of Waterloo and Wilfrid Laurier University working towards an
          <b> Honours Bachelor of Computer Science</b>
          {' '}
          and an
          <b> Honours Bachelor of Business Administration</b>
          {' '}
          respectively. I've been fascinated by the world of computers from a very young age.
        </p>

        <p>
          I am a
          <b> Canadian citizen</b>
          {' '}
          as well as a
          <b> permanent resident of the United States</b>
          , having grown up in the Greater Toronto Area and willing to work anywhere in the world that will offer me a great learning experience and a chance to better myself and others.
        </p>

        <p>I have completed one research assistantship and six internships; <a href="/#/technical">check out my resume</a>!</p>

        <p>
          Apart from all that, I&apos;m a big fan of board games, movies, and TV Shows (for real, I even have a
          <a href="/#/favourites"> list</a>
          ), I love a good shawarma, and I like to
          <a href="/repo"> write tweaks for jailbroken iPhones</a>
          {' '}
          on occasion.
        </p>

        <p>If you're reading this and you play Rocket League, send a message my way and let's grind to Grand Champ
          <span role="img" aria-label="sunglasses"> 😎</span>.
        </p>

      </div>
    );
  }
}

export default Home;
