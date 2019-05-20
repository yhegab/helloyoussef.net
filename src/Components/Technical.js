import React, { Component } from "react";
 
class Technical extends Component {
  render() {
    return (
      <div>
        <p>Here's a quick overview about my technical experience:</p>
        <h3>Personal</h3>
        <ul>
          <li><a href="http://itsjafer.com" target="_blank" rel="noopener noreferrer"><b>This website</b></a> - developed using ReactJS with React Router.</li>
          <li><a href="https://github.com/itsjafer/web-msngr" target="_blank" rel="noopener noreferrer" > <b>web-msngr</b> </a> - a personal messaging web app made using Angular, Mongo, Node.js, and Express and deployed using Heroku</li>
          <li><a href="http://github.com/itsjafer/sorcery" target="_blank" rel="noopener noreferrer"><b>sorcery</b></a> - an object-oriented implementation of a card game based on Magic: The Gathering and Hearthstone written in C++ </li>
          <li><b>C++/WLP4 Compiler</b> - A complete implementation of a compiler of a C++ subset called WLP4; converts WLP4 code to MIPS to binary machine code completely. </li>
        </ul>
        <h3>On-the-job</h3>
        <ul>
          <li><b>Habit Recommendation Model</b> @ Vida Health - prediction pipeline built on scikit-learn, pandas, and BigQuery to recommend habits for users based on historical data</li>
          <li><b>Track and Trace</b> @ NLS - an ASP.NET web app that allows logistics clients to externally track shipments of cartons</li>
          <li><b>Visitor Management System</b> @ NLS - a cross-platform React Native iOS/Android application that manages visitors and employee sign in and out</li>
          <li><b>Fixed Income Permissions</b> @ BMO - a Razor MVC web application written in C# and JavaScript to manage permission to various tools at BMO</li>
          <li><b>Axes Blotter</b> @ BMO - a desktop application written in C# using MVVM that allows bond traders at BMO Capital Markets to create, manage, and publish discounted bonds to clientele</li>
          <li><b>Bond TradeHistory</b> @ BMO - a feature for a WPF application that allowed traders to view the sales history of bonds located in a database in Oracle SQL.</li>
          <li><b>Bulk Trade Entry System</b> @ BMO - functionality written in C# that allows several trades to be generated at once and published to a RabbitMQ back-end to allow quicker workflows</li>
          <li><b>Prospect</b> @ Camis - a web dashboard written in Node.js, jQuery with a PowerShell backend used by DevOps and FieldOps teams to remotely monitor, update, and deploy to clients</li>
        </ul>
        <h3>Miscellaneous</h3>
        <ul>
          <li>I was the lead consultant at the Laurier Consulting Program in Fall 2018</li>
          <li>I like to use Linux as my personal main operating system although I've overwhelmingly used Windows in my professional life</li>
          <li>I'm learning to swim! I go to weekly swimming classes at the UW Aquatics Club</li>
          <li>I'm a beginner learning Muay Thai; intense warm-ups coupled with technique workshops every week.</li>
          <li>Recently, I've tried Yoga and really enjoyed it. I plan on attending a drop-in class weekly.</li>
          <li>I've got a <i>Bloomberg Market Concepts</i> certification using a Bloomberg Terminal</li>
          <li>In my freshman year, I reached the semi-finals of the BDO New Venture competition where contestants pitched ideas for new business ventures. My idea was a U-lock for skateboards called the BoardLock.</li>
        </ul>
      </div>
    );
  }
}
 
export default Technical;