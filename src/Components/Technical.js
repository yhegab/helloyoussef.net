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
          <link rel="canonical" href="http://itsjafer.com/#/resume" />
          <meta name="image" property="og:image" content="/Resume.jpg"/>
        </Helmet>
        <div className="Resume">
          <p>
            {' '}
            Here is a
            <a href="Jafer_Haider_Resume.pdf" target="_blank" rel="noopener noreferrer"> direct link to my resume;</a>  I used <a href="https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs">this template</a> as the basis for my resume.
          </p>

          <SizeMe>
              {({ size }) => (
                <Document file={"Jafer_Haider_Resume.pdf"}>
                  <Page pageNumber={1}  onLoadSuccess={this.removeTextLayerOffset} width={size.width ? size.width : 1} />
                </Document>
              )}
          </SizeMe>
        </div>
      </div>
    );
  }
}

export default Technical;
