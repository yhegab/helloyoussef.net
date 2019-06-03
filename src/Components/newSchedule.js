import React, { Component } from "react";
import {
  NavLink
} from "react-router-dom";
import { Container, Row, Col } from 'react-grid-system';

 
class Schedule extends Component {
  render() {
    return (
      <div>
        <p>Certain courses have notes associated with them; as I slowly review my courses, more notes will be added.</p>
        <p>Starting in 3A, I started to write term reflections; these can be seen by clicking on the term name.</p>
        <p>I am currently in my <b>3B</b> term.</p>
        <Container >
            <Row>
                <Col>Fall 2016
                    <Col>
                    <ul>
                        <li>BU111 - Business Environment</li>
                        <li>EC120 - Microeconomics</li>
                        <li>CS135 - Functional Programming</li>
                        <li>MATH135 - Algebra (proofs)</li>
                        <li>MATH137 - Calculus I</li>
                    </ul>
                    </Col>
                </Col>
                <Col >Winter 2017</Col>
                <Col >Spring 2017</Col>
            </Row>
        </Container>

      </div>
    );
  }
}
 
export default Schedule;