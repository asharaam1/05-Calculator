import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './App.css'

function App() {
  return (
    <Container
      className="box d-flex justify-content-center align-items-center  text-black"
    >
      <div
        className="div text-center"
      >
        <h2>React Calculator</h2>
        <input type="number" className="w-100 mb-3" />
        <Row>
          <Col xs={6}><Button variant="outline-dark" className="w-100 mb-2">AC</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2">DEL</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2">%</Button></Col>
        </Row>
        <Row>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2">7</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2">8</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2">9</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2">÷</Button></Col>
        </Row>
        <Row>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2">4</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2">5</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2">6</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2">×</Button></Col>
        </Row>
        <Row>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2">1</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2">2</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2">3</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2">+</Button></Col>
        </Row>
        <Row>
          <Col xs={6}><Button variant="outline-dark" className="w-100 mb-2">0</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2">.</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2">=</Button></Col>
        </Row>
      </div>
    </Container >


  );
}

export default App;