import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h4>Hi there,</h4>

        <p>My name is <b>Syed Jafer Haider</b> and I'm a student studying concurrently at the University of Waterloo and Wilfrid Laurier University working towards an <b>Honours Bachelor of Computer Science</b> and an <b>Honours Bachelor of Business Administration</b> respectively. My expected graduation is in 2021.</p>
 
        <p>I am a <b>Canadian citizen</b> as well as a <b>permanent resident of the United States</b>, having grown up in the Greater Toronto Area and willing to work anywhere in the world that will offer me a great learning experience and a chance to better myself and others.</p>
        
        <p>I have completed four internships and plan to do two more. I've tried to explore a different discipline within Computer Science with every experience:</p>
        <ul>
          <li><b>Data Scientist</b> Intern at Vida Health (May 2019 - August 2019, 4 months)</li>
          <li><b>Mobile Developer</b> Part-time Intern at National Logistics Services (September 2018 - December 2018, 4 months)</li>
          <li><b>Software Developer</b> Intern at BMO Capital Markets (January 2018 - April 2018, 4 months)</li>
          <li><b>DevOps Engineer</b> Intern at Camis Inc. (May 2017 - August 2017, 4 months)</li>
        </ul>

        <p>I am also an <b>Undergraduate Research Assistant</b> under the guidance of Professor <a href="https://cs.uwaterloo.ca/people-profiles/peter-buhr">Peter Buhr</a> at the University of Waterloo. My work involves researching and implementing a set of atomic fence operations in <a href="https://cforall.uwaterloo.ca">C-for-all</a> to control compiler and  hardware code movement to prevent sequential code optimizations from invalidating concurrent programs.</p>
        
        <p>Apart from all that, I'm a big fan of board games, movies, and TV Shows (for real, I even have a <a href="/#/favourites">list</a>), I love a good shawarma, and I'm slowly learning how to swim!</p>

        <p>I invite you to explore my website to learn more about me. Feel free to get in touch with an email or on any of my social media listed above!</p>
       </div>
    );
  }
}
 
export default Home;