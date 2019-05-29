import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h4>Hi there,</h4>

        <p>My name is <b>Syed Jafer Haider</b> and I'm a student studying concurrently at the University of Waterloo and Wilfrid Laurier University working towards an <b>Honours Bachelor of Computer Science</b> and an <b>Honours Bachelor of Business Administration</b> respectively. My expected graduation is in 2021.</p>
 
        <p>I am a <b>Canadian citizen</b>, having grown up in the Greater Toronto Area, as well as a <b>permanent resident of the United States</b>, willing to work anywhere in the world that will offer me a great learning experience and a chance to better myself and others.</p>
        
        <p>I have completed three internships and plan to do three more. I've tried to explore a different discipline within Computer Science with every experience:
          <ul>
            <li>Data Scientist Intern at Vida Health (present)</li>
            <li>Mobile Developer Intern at National Logistics Services (Fall 2018)</li>
            <li>Software Developer Intern at BMO Capital Markets (Winter 2018)</li>
            <li>DevOps Engineer Intern at Camis Inc. (Spring 2017)</li>
          </ul>
        </p>
        {/* <p>This Summer, I am working as a <b>Data Scientist Intern</b> at Vida Health in San Francisco, California. Previously, I worked as a <b>Mobile Developer Intern</b> at National Logistics Services during the Fall 2018 term. Before that, I've worked as a <b>Software Developer Intern</b> at BMO Capital Markets during the Winter 2018 term and a <b>DevOps Engineer Intern</b> at Camis inc. during the Summer 2017 term.</p> */}
        
        <p>Apart from all that, I'm a big fan of games, movies, and TV Shows (for real, I even have a <a href="/#/favourites">list</a>), I love a good shawarma, and I'm slowly honing my abilities in Muay Thai, swimming, and yoga.</p>

        <p>I invite you to explore my website to learn more about me. Feel free to get in touch with an email or on any of my social media listed above!</p>
       </div>
    );
  }
}
 
export default Home;