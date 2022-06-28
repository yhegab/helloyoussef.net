import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'
import remarkSlug from 'remark-slug'
import { ScrollIntoView } from 'rrc'

class BlogEntry extends Component {
    constructor(props) {
        super()
        this.state = {
            title: props.title,
            date: props.date,
            description: props.description,
            file: props.file,
            markdown: null
        }
    }

    componentDidMount() {
        if (!this.props.match) {
            return
        }
        const location = '/blog/' + this.props.match.params.file + ".md"
        // const file = require(location)
        fetch(location).then((response) => response.text()).then((text) => {
            this.setState({ markdown: text})
        })
    }

    render() {
        if (this.state.markdown) {
            return (
                <ScrollIntoView id={this.props.location.hash}>
                    <div className="blogEntry" id="test">
                        <ReactMarkdown remarkPlugins={[remarkSlug]} rehypePlugins={[rehypeRaw]}>{this.state.markdown}</ReactMarkdown>
                        {/* <MarkdownComponent markdownSrcPromise={"/blog/" + this.props.match.params.file + ".md"} /> */}
                    </div>
                </ScrollIntoView>
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
      <div className="blog" id="test">
          {/* 
            Blog Ideas:
            * Reflecting on Google Internship
            * 2022 New Grad Grind
            * Negotiating between Microsoft, Google, Robinhood
          */}
          {/*<BlogEntry 
            title="Negotiating New Grad Offers"
            date="October 11, 2021" 
            description="When looking for a 2022 new grad opportunity, I was fortunate to have received offers from Google, Microsoft, Confluent, and Robinhood." 
            file="negotiating"
          />
          <BlogEntry 
            title="Getting the Google Internship"
            date="September 27, 2021" 
            description="I reflect about the journey to actually securing my Summer 2021 internship at Google." 
            file="google_internship"
          />*/}
          <BlogEntry 
            title="This is my first blog post"
            date="June 25, 2021" 
            description="Here goes nothing!" 
            file="first_post"
          />
      </div>
    );
  }
}

export {Blog, BlogEntry};
