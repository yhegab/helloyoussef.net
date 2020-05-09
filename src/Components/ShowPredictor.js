import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class ShowPredictor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: [],
      isDesktop: false,
      loading: false,
    };

    this.updatePredicate = this.updatePredicate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
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

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleFocus(event) {
    event.target.select();
    this.setState({ value: '' });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true });
    const { value } = this.state;
    const uri = `https://itsjafer.pythonanywhere.com/predict?title=${value}`;
    fetch(encodeURI(uri), { method: 'get', mode: 'cors' })
      .then((response) => response.json())
      .then((json) => this.setState({ data: json }))
      .then(() => {
        this.setState({ loading: false });
        const { data } = this.state;
        const title = data[0].similarTitle;
        if (title !== value) { this.setState({ value: `Closest Match: ${title}` }); } else { this.setState({ value: title }); }
      });
  }

  render() {
    const { isDesktop, loading } = this.state;

    const fullColumns = [
      {
        Header: 'Title',
        accessor: 'title',
        Cell: (cellInfo) => (
          <a
            href={cellInfo.original.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cellInfo.original.title}
          </a>
        ),
        Footer: true && <div />,
        minWidth: 250,
      },
      {
        id: 'recommendationScore',
        Header: 'Score',
        accessor: (d) => (d.score * 100).toFixed(2),
        Footer: true && <div />,
      },
      {
        id: 'similarityScore',
        Header: 'Similarity',
        accessor: (d) => (d.similarity * 100).toFixed(2),
        Footer: true && <div />,
      },
      {
        Header: 'IMDB Rating',
        accessor: 'user_rating',
        Footer: true && <div />,
      },
      {
        Header: 'Metascore',
        accessor: 'metascore',
        Footer: true && <div />,
      },
      {
        Header: 'Userscore',
        accessor: 'userscore',
        Footer: true && <div />,
      },

    ];
    const limitedColumns = [
      {
        Header: 'Title',
        accessor: 'title',
        Cell: (cellInfo) => (
          <a
            href={cellInfo.original.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cellInfo.original.title}
          </a>
        ),
        Footer: true && <div />,
      },
      {
        id: 'recommendationScore',
        Header: 'Score',
        accessor: (d) => (d.score * 100).toFixed(2),
        Footer: true && <div />,
      },

    ];
    const { value, data } = this.state;
    return (
      <div className="show-predictor">
        <p> Enter in a TV Show and I will recommend 10 other TV Shows you might like based on their similarity and ratings.</p>
        <p> Similarity is based on: genre, keywords, plot, cast, production company, number of seasons, and episode length. Ratings are based on a combination of IMDB rating, Metacritic Score, and Metacritic user score.</p>
        <p>
          {' '}
          You can find the source code
          <a href="http://github.com/itsjafer/tv_show_predictor" target="_blank" rel="noopener noreferrer"> here</a>
        </p>
        <p> The initial search may take a moment as the app starts for the first time.</p>
        <div className="input-show">
          <Form onSubmit={this.handleSubmit}>
            <input
              ref="input"
              placeholder=""
              value={value}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onMouseUp={(e) => { e.preventDefault(); }}
            />
            <Button variant="raised" className="formSubmit">Submit</Button>
          </Form>
        </div>
        {
          loading && 'Loading...'
        }
        <div className="table">
          {
            data.length > 0
            && (
            <ReactTable
              data={data}
              columns={isDesktop ? fullColumns : limitedColumns}
              defaultPageSize={10}
              showPaginationBottom={false}
              showPageSizeOptions={false}
            />
            )
          }
        </div>
      </div>
    );
  }
}

export default ShowPredictor;
