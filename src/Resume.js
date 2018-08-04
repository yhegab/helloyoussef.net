import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import ResumePDF from './Resume.pdf';

class Resume extends Component {
  render() {
    return (
      <div>
        <p> My resume was written in LaTeX. To view the source code and the PDF side by side, you can view it directly on Overleaf <a href="https://v2.overleaf.com/read/wvmqpzrthcpw" target="_blank" rel="noopener noreferrer">here</a>. </p>
        <p> For convenience, here is a <a href={ResumePDF} target="_blank">direct link</a> to my resume. </p>
        <Document file={ResumePDF} renderMode="svg">
          <Page pageNumber={1} renderTextLayer={true} scale={1.5}/>
        </Document>
      </div>
    );
  }
}

export default Resume;
