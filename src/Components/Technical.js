import React, { Component } from 'react';

class Technical extends Component {
  render() {
    return (
      <div>
        <div className="Resume">
          <p>
            {' '}
            Here is a
            <a href="Resume.pdf" target="_blank" rel="noopener noreferrer"> direct link to my resume;</a>
            {' '}
            I'm currently looking for internships and new grad opportunities!
            {' '}
          </p>
        </div>

        <p>Here's a brief summary of my work experience:</p>
        <ul>
        <li>
            <b>Software Development Engineer</b>
            {' '}
            Intern at Amazon (Septemer 2020 - December 2020, 4 months)
          </li>
          <li>
            <b>Software Engineer - Infrastructure</b>
            {' '}
            Intern at Yelp (January 2020 - April 2020, 4 months)
          </li>
          <li>
            <b>Research Assistant</b>
            {' '}
            at University of Waterloo (September 2019 - December 2019, 4 months)
          </li>
          <li>
            <b>Software Engineer - Data Science</b>
            {' '}
            Intern at Vida Health (May 2019 - August 2019, 4 months)
          </li>
          <li>
            <b>Mobile Developer</b>
            {' '}
            Part-time Intern at National Logistics Services (September 2018 - December 2018, 4 months)
          </li>
          <li>
            <b>Software Developer</b>
            {' '}
            Intern at BMO Capital Markets (January 2018 - April 2018, 4 months)
          </li>
          <li>
            <b>DevOps Engineer</b>
            {' '}
            Intern at Camis Inc. (May 2017 - August 2017, 4 months)
          </li>
        </ul>
        <p>Other than that, here&apos;s a few projects I'm particularly proud of:</p>
        <ul>
          <li>
            <a href="https://github.com/itsjafer/BetterMultitasking" target="_blank" rel="noopener noreferrer"><b>BetterMultitasking</b></a>
            {' '}
            - iOS tweak that enables iPads to run iPhone apps natively
          </li>
          <li>
            <a href="https://github.com/itsjafer/StopShortcutsNotifications" target="_blank" rel="noopener noreferrer"><b>StopShortcutsNotifications</b></a>
            {' '}
            - iOS tweak that disables annoying shortcuts automation notifications
          </li>
          <li>
            <a href="https://github.com/itsjafer/BigPiPEnergy" target="_blank" rel="noopener noreferrer"><b>BigPiPEnergy</b></a>
            {' '}
            - iOS tweak that increases the Picture-in-Picture size limit
          </li>
          <li>
            <a href="https://github.com/itsjafer/tv_recommendation_engine" target="_blank" rel="noopener noreferrer">
              {' '}
              <b>TV Show Recommendation Engine</b>
              {' '}
            </a>
            {' '}
            - a mathematical model that scrapes data off metacritic and imdb and uses cosine_similarities to predict and recommend TV Shows.
          </li>
          <li>
            <a href="https://github.com/itsjafer/meal-recommendations" target="_blank" rel="noopener noreferrer">
              {' '}
              <b>Meal Recommendations</b>
              {' '}
            </a>
            {' '}
            - An online training/prediction model that uses TF-IDF to create user profiles to store and aggregate user ingredient preferences in order to recommend new meals the user may like.
          </li>
          <li>
            <a href="https://github.com/itsjafer/web-msngr" target="_blank" rel="noopener noreferrer">
              {' '}
              <b>web-msngr</b>
              {' '}
            </a>
            {' '}
            - a personal messaging web app made using Angular, Mongo, Node.js, and Express and deployed using Heroku
          </li>
          <li>
            <a href="https://github.com/itsjafer/sparkmonitor" target="_blank" rel="noopener noreferrer">
              <b>SparkMonitor</b>
              {' '}
              @ Yelp
            </a>
            {' '}
            - an open-source JupyterLab extension to track progress of Spark jobs
          </li>
        </ul>
      </div>
    );
  }
}

export default Technical;
