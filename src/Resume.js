import React, { Component } from 'react';
import PDF from 'react-pdf-js';
import ResumePDF from './resume.pdf';

class Resume extends Component {
  render() {
    return (
      <div>
        <p> For convenience, here's a <a href={ResumePDF}>direct link</a> to my resume. </p>
        <PDF file={ResumePDF} pageNumber={1} className="pdf" fillWidth/>
      </div>
    );
  }
}

export default Resume;