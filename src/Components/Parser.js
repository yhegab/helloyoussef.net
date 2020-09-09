import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

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

  onUploadHandler(event) {
    const file = event.target.files[0];

    // Simple POST request with a JSON body using fetch
    const formData = new FormData();
    formData.append('file', file);
    const requestOptions = {
      method: 'POST',
      body: formData,
    };
    fetch('https://parser.itsjafer.com/parse', requestOptions)
      .then((response) => response.json())
      .then((resume) => {
        this.setState({ resume });
        const degrees = resume.schools ? resume.schools.map((school) => `Degree: ${school.degree ?? '??'}. Major: ${school.field ?? '??'}.`) : [];
        const schools = resume.schools ? resume.schools.map((school) => `${school.org ?? '??'} from ${school.start ? school.start.month : '??'}/${school.start ? school.start.year : '??'} to ${school.end ? school.end.month : '??'}/${school.end ? school.end.year : '??'}.`) : [];
        const links = resume.links ? resume.links.map((link) => link.url ?? '??').join(', ') : [];
        const data = [
          { info: 'Name', parsed: resume.names ? resume.names.join(', ') : [] },
          { info: 'Email', parsed: resume.emails ? resume.emails[0].value : [] },
          { info: 'Phone', parsed: resume.phones ? resume.phones[0].value : [] },
          { info: 'University', parsed: schools.join(', ') },
          { info: 'Degree', parsed: degrees.join(', ') },
          { info: 'Links', parsed: links },
          { info: 'Summary', parsed: resume.summary && resume.summary.experience ? resume.summary.experience : '??' },
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


    return (
      <div>
        This tool uses Lever's resume parsing API, which is unintentionally public, to parse resumes.
        This is a useful tool to see how well your resume is being parsed when you apply to jobs.
        Companies that use Lever for job apps include: Figma, Palantir, Plaid, and several others.
        Take a look at the backend source code <a href="https://github.com/itsjafer/parser-backend">here</a>!
        <div>
          <br/>
          <form method="post" action="#" id="#">
            <div className="form-group files">
              <label for="file">Upload resume:</label>
              <input type="file" name="file" className="form-control" onChange={(event) => this.onUploadHandler(event)} />
            </div>
          </form>
        </div>
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
                </div>
                )}
      </div>
    );
  }
}

export default Parser;
