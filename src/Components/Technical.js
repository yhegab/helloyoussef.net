import React, { Component } from 'react';
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf';
import { SizeMe } from 'react-sizeme'
import {Helmet} from "react-helmet";

import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Technical extends Component {

  removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
      textLayers.forEach(layer => {
        const { style } = layer;
        style.top = "0";
        style.left = "0";
        style.transform = "";
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Jafer Haider -- Resume</title>
          <meta name="description" content="My most up-to-date resume."/>
          <link rel="canonical" href="http://itsjafer.com/#/technical" />
          <meta name="image" property="og:image" content="/Resume.jpg"/>
        </Helmet>
        <div className="Resume">
          <p>
            {' '}
            Here is a
            <a href="Resume.pdf" target="_blank" rel="noopener noreferrer"> direct link to my resume;</a>
            {' '}
            I'm currently looking for internships and new grad opportunities!
            {' '}
          </p>

        <SizeMe>
            {({ size }) => (
              <Document file={"Resume.pdf"}>
                <Page pageNumber={1}  onLoadSuccess={this.removeTextLayerOffset} width={size.width ? size.width : 1} />
              </Document>
            )}
        </SizeMe>
            </div>

        {/* <p>Here are a few projects I'm particularly proud of:</p>
        <ul>
          <li>
            <a href="#/show-predictor">
              {' '}
              <b>TV Show Recommendation Engine</b>
              {' '}
            </a>
            {' '}
            - a mathematical model that scrapes data off metacritic and imdb and uses cosine_similarities to predict and recommend TV Shows.
          </li>
          <li>
            <a href="#/loonie">
              <b>Loonie</b>
              {' '}
            </a>
            {' '}
            - a personal finance dashboard using Plaid API.
          </li>
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
        </ul> */}
      </div>
    );
  }
}

export default Technical;
