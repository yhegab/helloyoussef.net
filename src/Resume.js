import React, { Component } from 'react';
import PDF from 'react-pdf-js';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import ResumePDF from './Resume.pdf';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onDocumentComplete = (pages) => {
    this.setState({ page: 1, pages });
  }
  render() {
    return (
      <div>
        <p> My resume was written in LaTeX using OverLeaf. You can see the latest version below.</p>
        <p> For convenience, here is a <a href={ResumePDF} target="_blank">direct link</a> to my resume. </p>
        
        {/* <Document file={ResumePDF} renderMode="svg">
          <Page pageNumber={1} renderTextLayer={false} scale={1.5}/>
        </Document> */}

        <PDF
          file={ResumePDF}
          page={this.state.page}
          onDocumentComplete={this.onDocumentComplete}
          fillWidth
        />
      </div>
    );
  }
}

export default Resume;
