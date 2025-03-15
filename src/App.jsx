import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './App.css'

function App() {

  const [num, setNum] = useState('')

  function showNumber(e) {
    setNum(num + e.target.value)
  }

  function operations() {
    try {
      setNum(eval(num.toString()));
    } catch {
      setNum('Error');
    }
  }

  function allClearAC() {
    setNum('')
  }

  function delValue() {
    setNum(num.slice(0, -1))
  }



  return (
    <Container
      className="box d-flex justify-content-center align-items-center  text-black"
    >
      <div
        className="div text-center"
      >
        <h2>React Calculator</h2>
        <input type="text" className="w-100 mb-3" value={num} />
        <Row>
          <Col xs={6}><Button variant="outline-dark" className="w-100 mb-2" onClick={allClearAC}>AC</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2" onClick={delValue}>DEL</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2" onClick={showNumber} value='%'>%</Button></Col>
        </Row>
        <Row>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2" onClick={showNumber} value={7}>7</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2" onClick={showNumber} value={8}>8</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2" onClick={showNumber} value={9}>9</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2" onClick={showNumber} value='/'>÷</Button></Col>
        </Row>
        <Row>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2" onClick={showNumber} value={4}>4</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2" onClick={showNumber} value={5}>5</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2" onClick={showNumber} value={6}>6</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2" onClick={showNumber} value='*'>×</Button></Col>
        </Row>
        <Row>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2" onClick={showNumber} value={1}>1</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2" onClick={showNumber} value={2}>2</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2" onClick={showNumber} value={3}>3</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2" onClick={showNumber} value='+'>+</Button></Col>
        </Row>
        <Row>
          <Col xs={6}><Button variant="outline-dark" className="w-100 mb-2" onClick={showNumber} value={0}>0</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2" onClick={showNumber} value='.'>.</Button></Col>
          <Col xs={3}><Button variant="outline-dark" className="w-100 mb-2" onClick={operations} >=</Button></Col>
        </Row>
      </div>
    </Container >


  );
}

export default App;