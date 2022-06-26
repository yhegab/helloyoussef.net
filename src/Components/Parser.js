import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import 'react-json-pretty/themes/monikai.css';
import {Helmet} from "react-helmet";
import JSONPretty from 'react-json-pretty';

class Parser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      positions: null,
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener('resize', this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 800 });
  }

  async onUploadHandler(event) {
    const toBase64 = file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
    if (event.target.files[0].size > 5242880) {
      alert('File size too large (limit 5 MB)')
      console.error("File size too large")
      return;
    }
    const file = await toBase64(event.target.files[0]);
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'POST',
      body: `{"content": "${file.split(',')[1]}"}`,
      headers: { 
        "Content-Type": "application/json",
        "Accept": 'application/json',
      }
    };
    this.setState({ loading: true });

    fetch('https://us-central1-resume-parser-322517.cloudfunctions.net/parseResume-1', requestOptions)
      .then((response) => response.json())
      .then((resume) => JSON.parse(resume.body))
      .then((resume) => {
        this.setState({ resume });
        const degrees = resume.schools ? resume.schools.map((school) => `Degree: ${school.degree ?? '??'} (GPA: ${school.gpa ?? "??"}).`) : [];
        const schools = resume.schools ? resume.schools.map((school) => `${school.org ?? '??'} from ${school.start ? school.start.month : '??'}/${school.start ? school.start.year : '??'} to ${school.end ? school.end.month : '??'}/${school.end ? school.end.year : '??'}`) : [];
        const links = resume.links ? resume.links.map((link) => link.url ?? '??').join(', ') : [];
        const data = [
          { info: 'Name', parsed: resume.names ? resume.names.join(', ') : [] },
          { info: 'Email', parsed: resume.emails ? resume.emails[0].value : [] },
          { info: 'Phone', parsed: resume.phones && resume.phones[0] ? resume.phones[0].value : [] },
          { info: 'University', parsed: schools.join(', ') },
          { info: 'Degree', parsed: degrees.join(', ') },
          { info: 'Links', parsed: links },
          { info: 'Summary', parsed: resume.summary && resume.summary.executiveSummary ? resume.summary.executiveSummary : '??' },
          { info: 'Skills', parsed: resume.summary && resume.summary.skills ? resume.summary.skills : '??' },
        ];
        const positions = resume.positions ? resume.positions.map((position) => ({
          company: position.org ?? '??', position: position.title ?? '??', date: `${position.start ? position.start.month : '??'}/${position.start ? position.start.year : '??'} - ${position.end ? position.end.month : '??'}/${position.end ? position.end.year : '??'}`, summary: position.summary ?? '??',
        })) : [];
        const limitedPositions = resume.positions ? resume.positions.map((position) => ({
          company: `${position.org} -- 
            ${position.title} (${position.start ? position.start.month : '??'}/${position.start ? position.start.year : '??'} - ${position.end ? position.end.month : '??'}/${position.end ? position.end.year : '??'}` ?? '??',
          summary: position.summary ?? '??',
        })) : [];

        this.setState({ data, positions, limitedPositions });
        this.setState({ loading: false });

      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const summaryColumns = [
      {
        Header: 'Information',
        accessor: 'info',
        style: { whiteSpace: 'unset' },
        minWidth: 50,
      },
      {
        id: 'parsed',
        Header: 'Parsed',
        accessor: 'parsed',
        style: { whiteSpace: 'unset' },
      },

    ];
    const jobColumns = [
      {
        Header: 'Company',
        accessor: 'company',
        minWidth: 40,
        style: { whiteSpace: 'unset' },
      },
      {
        Header: 'Position',
        accessor: 'position',
        minWidth: 50,
        style: { whiteSpace: 'unset' },
      },
      {
        Header: 'Dates',
        accessor: 'date',
        minWidth: 25,
        style: { whiteSpace: 'unset' },
      },
      {
        Header: 'Summary',
        accessor: 'summary',
        style: { whiteSpace: 'unset' },
      },

    ];
    const limitedColumns = [
      {
        Header: 'Company',
        accessor: 'company',
        style: { whiteSpace: 'unset' },
        minWidth: 60,
        Footer: true && <div />,
      },
      {
        Header: 'Summary',
        accessor: 'summary',
        style: { whiteSpace: 'unset' },
        Footer: true && <div />,
      },

    ];
    const {
      resume, data, positions, limitedPositions, isDesktop,
    } = this.state;

    var JSONPrettyMon = require('react-json-pretty/dist/monikai');
    return (
      <div>
        <Helmet>
          <title>Jafer Haider -- Resume Parser</title>
          <meta name="description" content="Resume Parser using the Lever API"/>
          <link rel="canonical" href="http://itsjafer.com/#/parser" />
        </Helmet>

        <p><b>How well does your resume get parsed?</b></p>
      
        <p><b>As of May 7 2022, this tool no longer works.</b></p>
        
        <p>
        This tool uses Lever's resume parsing API to parse resumes. Use this to see how well your resume is read by Application Tracking Systems (ATS) when applying to jobs. Companies that use Lever for job apps include: Figma, Palantir, Netflix, Twitch, Yelp and several others.
        </p>
        
        <p>Take a look at the source code <a href="https://github.com/itsjafer/resume-parser">here</a>! The functionality is hosted as an GCP Cloud function that serves as a middle man to the lever API.</p>
        <div>
          <br/>
          <form method="post" action="#" id="#">
            <div className="form-group files">
              <label htmlFor="file">Upload resume (docx or pdf):</label>
              <input type="file" name="file" className="form-control" onChange={(event) => this.onUploadHandler(event)} />
            </div>
          </form>
        </div>
        {
          this.state.loading && 'Loading...'
        }
        {resume && data && positions
          // Render a table summarizing our accounts here probably
          && (
          <div>
            <p>Resume Summary:</p>
            <ReactTable
              data={data}
              columns={summaryColumns}
              defaultPageSize={data.length}
              showPaginationBottom={false}
              showPageSizeOptions={false}
            />
            <br />
            <p>Work Experience</p>
            <ReactTable
              data={isDesktop ? positions : limitedPositions}
              columns={isDesktop ? jobColumns : limitedColumns}
              defaultPageSize={positions.length}
              showPaginationBottom={false}
              showPageSizeOptions={false}
            />
            <p>Raw JSON Output:</p>
            <JSONPretty id="json-pretty" theme={JSONPrettyMon} data={resume}></JSONPretty>
          </div>
          )}
        </div>
    );
  }
}

export default Parser;
