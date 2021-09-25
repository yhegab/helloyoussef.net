import React, { Component } from 'react';
import MarkdownComponent from './MarkdownComponent';

class BlogEntry extends Component {
    constructor(props) {
        super()
        this.state = {
            title: props.title,
            date: props.date,
            description: props.description,
            file: props.file
        }
    }

    render() {
        if (this.props.match) {
            return (
                <div className="blogEntry">
                    <MarkdownComponent markdownSrcPromise={"/blog/" + this.props.match.params.file + ".md"} />
                </div>
            )
        }
        return (
            <div className="blogEntry">
                <a href={"/#/blog/"+ this.state.file}><h4>{this.props.title}</h4></a>
                <i>{this.state.date}</i>
                <br/>
                <span>{this.state.description}</span>
            </div>
        )
    }
}

class Blog extends Component {
  constructor(props) {
      super()
  }


  render() {
    return (
      <div className="blog">
          {/* 
            Blog Ideas:
            * Reflecting on Google Internship
            * 2022 New Grad Grind
            * Negotiating between Microsoft, Google, Robinhood
          */}
          <BlogEntry 
            title="This is my first blog post"
            date="September 25, 2021" 
            description="Testing out my first blog post is exciting!" 
            file="first_post"
          />
      </div>
    );
  }
}

export {Blog, BlogEntry};
