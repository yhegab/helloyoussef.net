import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Parser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      positions: null
    };
    
  }

  onUploadHandler(event) {
    var file = event.target.files[0];
    console.log(file);
    this.setState({
        selectedFile: file
    });

    // Simple POST request with a JSON body using fetch
    const formData = new FormData();
    formData.append('file', file);
    const requestOptions = {
      method: 'POST',
      body: formData,
    };
    fetch(`https://parser.itsjafer.com/parse`, requestOptions)
      .then((response) => response.json())
      .then((resume) => {
        console.log(resume)
        this.setState({ resume })
        let education = resume.schools ? resume.schools.map((school) => `${school.degree ?? '??'} in ${school.field ?? '??'} at ${school.org ?? '??'} (Start: ${school.start ? school.start.month : '??'}/${school.start ? school.start.year : '??'}, End: ${school.end ? school.end.month : '??'}/${school.end ? school.end.year : '??'})`) : []
        let links = resume.links ? resume.links.map((link) => link.url ?? '??').join(', ') : []
        let data = [
            {info: 'Name', parsed: resume.names ? resume.names.join(', ') : [] },
            {info: 'Email', parsed: resume.emails ? resume.emails[0]['value'] : []},
            {info: 'Phone', parsed: resume.phones ? resume.phones[0]['value'] : []},
            {info: 'Links', parsed: links},
            {info: 'Summary', parsed: resume.summary && resume.summary.experience ? resume.summary.experience : '??'},
            {info: 'Education', parsed: education.join(', ')},
            {info: 'Skills', parsed: resume.summary && resume.summary.skills ? resume.summary.skills : '??'},
        ]
        let positions = resume.positions ? resume.positions.map((position) => {
        return { company: position.org ?? '??', position: position.title ?? '??', date: `${position.start ? position.start.month : '??'}/${position.start ? position.start.year : '??'} - ${position.end ? position.end.month : '??'}/${position.end ? position.end.year : '??'}`, summary: position.summary ?? '??'}
        }) : []

        this.setState({ data, positions })
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
          minWidth: 15,
        },
        {
          id: 'parsed',
          Header: 'Parsed',
          accessor: 'parsed',
          style: { 'whiteSpace': 'unset' },
        },
  
      ];
      const jobColumns = [
        {
          Header: 'Company',
          accessor: 'company',
          minWidth: 40,
          style: { 'whiteSpace': 'unset' }, 
        },
        {
          Header: 'Position',
          accessor: 'position',
          minWidth: 50,
          style: { 'whiteSpace': 'unset' },
        },
        {
            Header: 'Dates',
            accessor: 'date',
            minWidth: 25,
            style: { 'whiteSpace': 'unset' },
        },
        {
            Header: 'Summary',
            accessor: 'summary',
            style: { 'whiteSpace': 'unset' },
        },
  
      ];
    let resume = this.state.resume
    let data = this.state.data
    let positions = this.state.positions
    

    return (
      <div>
        This tool uses Lever's resume parsing API, which is unintentionally public, to parse resumes. This is a useful tool to see how well your resume is being parsed when you apply to jobs. Companies that use Lever for job apps include: Figma, Palantir, Plaid, and several others.
        <div>
        <form method="post" action="#" id="#">
              <div className="form-group files">
                <input type="file" name="file" className="form-control" onChange={(event) => this.onUploadHandler(event)}/>
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
                    <br/>
                    <p>Work Experience</p>
                    <ReactTable
                          data={positions}
                          columns={jobColumns}
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
