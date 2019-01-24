import React, {Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './components/shared/nav-bar/nav-bar.js';
import logo from './assets/logo.png'
import ServiceCard from './components/service-card/service-card.js';
import forDoctorsImage from  './assets/forDoctorsImage.png';
import forPatientsImage from  './assets/forPatientsImage.png';


const p1 = 'We want patients to find the perfect doctor and book an appointment'
const p2 = 'We also help doctors to better manage their practice and build their online'

const cards = [{
  client:'Doctors',
  description:'Save time managing visits and cut no-shows by half',
  /*  image: forDoctorsImage,*/
  backColor: '#3d83df',
  country: false
}, {
  client:'Patients',
  description:'Find a doctor, book a visit and solve any health-related doubt',
  /*image: forPatientsImage, */
  backColor: '#00ccb1',
  country: true
}]

class App extends Component {
  render() {
    return (
      <Container>
        <NavBar className= 'nav-shadow'/>
        <section className='header-section'>
        <Row>
          <Col>
            <img src= {logo} alt='logo' className='logo-style' />
          </Col>
        </Row>
        <Row>
          <Col  className='header-text-style'>
          <h1> Making the healthcare experience more human </h1>
          </Col>
        </Row>
        <Row>
          <Col >
          <p className='header-p-style'> {p1} </p>
          </Col>
          <Col>
          <p className='header-p-style'> {p2} </p>
          </Col>
        </Row>
        </section>
        <Row>
          {cards.map((card, i) => <ServiceCard {...card} key={i} />)}
        </Row>
      </Container>
    );
    }
  }

export default App;
