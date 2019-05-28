import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class ShowPredictor extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: '', 
        data: [],
        isDesktop: false
    };

    this.updatePredicate = this.updatePredicate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 1250 });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let uri = 'http://127.0.0.1:5000/predict?title=' + this.state.value;
    fetch(encodeURI(uri), {method: 'get', mode: 'cors'})
    .then(response => response.json())
    .then(data => this.setState({ data }))
    .then(() => {
      this.setState({ value: this.state.data[0].similarTitle})
    })
  }

  render() {
    const isDesktop = this.state.isDesktop;
    
    const fullColumns = [
      {
        Header: 'Title',
        accessor: 'title'
      },
      {
        id: 'recommendationScore',
        Header: 'Recommendation Score',
        accessor: d => (d.score * 100).toFixed(2)
      },
      {
        id: 'similarityScore',
        Header: 'Similarity',
        accessor: d => (d.similarity* 100).toFixed(2)
      },
      {
        Header: 'IMDB Rating',
        accessor: 'user_rating',
        Cell: cellInfo => (
          <a href={cellInfo.original.link}
          target="_blank" rel="noopener noreferrer">{cellInfo.original.user_rating}</a>
        )
      },
      {
        Header: 'Metacritic Score',
        accessor: 'metascore'
      },
      {
        Header: 'Metacritic Userscore',
        accessor: 'userscore'
      },
  
    ]
    const limitedColumns = [
      {
        Header: 'Title',
        accessor: 'title',
        Cell: cellInfo => (
          <a href={cellInfo.original.link}
          target="_blank" rel="noopener noreferrer">{cellInfo.original.title}</a>
        )
      },
      {
        id: 'recommendationScore',
        Header: 'Recommendation Score',
        accessor: d => (d.score * 100).toFixed(2)
      }
  
    ]
    return (
      <div className="show-predictor">
        <p> Enter in a TV Show and I will recommend 10 other TV Shows you might like based on their rating and similarity.</p>
        <p> You can find the source code <a href="http://github.com/itsjafer/tv_show_predictor" target="_blank" rel="noopener noreferrer">here</a></p>
        <div className="input-show">
        <Form onSubmit={this.handleSubmit}>
            <Input 
                placeholder=""
                value={this.state.value}
                onChange={this.handleChange}
            />
            <Button variant="raised" className="formSubmit">Submit</Button>
        </Form>
        </div>
        <div className="table">
          <ReactTable
              data={this.state.data}
              columns={isDesktop ? fullColumns : limitedColumns}
            />
        </div>
      </div>
    );
  }
}

export default ShowPredictor;
