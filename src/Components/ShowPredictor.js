import React, { Component } from 'react';
//import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';

class ShowPredictor extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', data: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let uri = 'http://itsjafer.pythonanywhere.com/predict?title=' + this.state.value;
    fetch(encodeURI(uri), {method: 'get', mode: 'cors'})
    .then(response => response.json())
    .then(data => this.setState({ data }))
  }

  render() {
    return (
      <div className="show-predictor">
        <p> Enter in a TV Show and I will recommend 10 other TV Shows you might like based on their rating and similarity.</p>
        <p> You can find the source code <a href="http://github.com/itsjafer/tv_show_predictor" target="_blank" rel="noopener noreferrer">here</a></p>
        <div className="input-show">
        <form onSubmit={this.handleSubmit}>
            <label>
                <input 
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    />
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
        <div className="table">
        <table>
            <tbody>
            {this.state.data.length > 0 &&
            <tr>
                <th>TV Show Title</th>
                <th>Recommendation Score</th>
                <th>IMDB Rating</th>
                <th>Similarity Score</th>
            </tr>
            }
            {this.state.data.map(function(item, key) {
             
               return (
                <tr key = {key}>
                    <td>{item.title}</td>
                    <td>{(item.score * 100).toFixed(2)}%</td>
                    <td>{item.user_rating}</td>
                    <td>{(item.similarity * 100).toFixed(2)}%</td>
                </tr>
                )
             
             })}
            </tbody>
       </table>
        </div>
      </div>
    );
  }
}

export default ShowPredictor;
