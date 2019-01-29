import React, {Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './components/shared/nav-bar/nav-bar.js';
import Brands from './components/brands/brands.js';
import StatsSection from './components/stats-section/stats-section.js';
import Locations from './components/locations/locations.js';
import Footer from './components/shared/footer/footer.js';
import logo from './assets/logo.png'
import ServiceCard from './components/service-card/service-card.js';
import forDoctorsImage from  './assets/forDoctorsImage.png';
import forPatientsImage from  './assets/forPatientsImage.png';

const p1 = 'We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that is why we are always next to them: to help them find the best possible care. Anytime, anywhere.',
      p2 = 'We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.',
      cards = [{
        client:'Patients',
        description:'Find a doctor, book a visit and solve any health-related doubt',
        image: forPatientsImage,
        bgClass: 'bg-patients',
        country: true
        }, {
        client:'Doctors',
        description:'Save time managing visits and cut no-shows by half',
        image: forDoctorsImage,
        bgClass: 'bg-doctors',
        country: false
      }],
      brands = [{
        name:'ZnanyLekarz',
        url: 'https://www.znanylekarz.pl/?_ga=2.219207065.1473964053.1548753856-1321196578.1548260479'
      },
      {
        name:'Doctoralia',
        url:'https://www.doctoralia.es/'
      },
      {
        name:'MioDottore',
        url:'https://www.miodottore.it/?_ga=2.51499689.1473964053.1548753856-1321196578.1548260479'
      },
      {
        name:'DoktoTakvimi',
        url:'https://www.doktortakvimi.com/?_ga=2.51499689.1473964053.1548753856-1321196578.1548260479'
      },
      {
        name:'ZnamyLekar',
        url:'https://www.znamylekar.cz/'
      }
    ],
    locations = [{
      name:'Warsaw',
      image: 'https://www.docplanner.com/images/warsaw.png',
      url:'https://www.docplanner.com/career?&loc=poland#jobs-offers'
    },
    {
      name:'Barcelona',
      image:'https://www.docplanner.com/images/barcelona.png',
      url:'https://www.docplanner.com/career?&loc=spain#jobs-offers'
    },
    {
      name:'Istanbul',
      image:'https://www.docplanner.com/images/istanbul.png',
      url:'https://www.docplanner.com/career?&loc=rome#jobs-offers'
    },
    {
      name:'Rome',
      image:'https://www.docplanner.com/images/rome.png',
      url:'https://www.docplanner.com/career?&loc=rome#jobs-offers'
    },
    {
      name:'Mexico City',
      image:'https://www.docplanner.com/images/mexico-city.png',
      url:'https://www.docplanner.com/career?&loc=rome#jobs-offers'
    },
    {
      name:'Curitiba',
      image:'https://www.docplanner.com/images/curitiba.png',
      url:'https://www.docplanner.com/career?&loc=rome#jobs-offers'
    }
  ]

class App extends Component {
  render() {
    return (
      <div>
      <NavBar id="nav" className= 'nav-shadow'/>
      <Container>
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

        <section id="services" className='service'>
        <Row className='service-section'>
          {cards.map((card, i) => <ServiceCard {...card} key={i} />)}
        </Row>
        </section>

        <section id="brands">
          <Row className='brand-section'>
            <Col sm='6'>
              <h3 className='brand-text-style'>
                We are a global company
                <br/>with local culture
              </h3>
            </Col>
            <Col sm='6'>
            <ul className='list-style'>
              <li>
              {brands.map((brand, i) => <Brands {...brand} key={i} />)}
              </li>
            </ul>
            </Col>
          </Row>
        </section>

      </Container>

      <section id="stats">
        <StatsSection className='stats'/>
      </section>

      <header class="offices">
			<h2>
				Improve the lives of millions.
				Change yours forever
			</h2>
			<p>
				More than 500 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Czech Republic, Mexico City, Colombia and Curitiba, our search for great talent never stops.
			</p>
		</header>

    <section id="locations" className='location-pictures'>
      {locations.map((location, i) => <Locations {...location} key={i} /> )}
    </section>
    <hr />
    <section id="footer" className='footer-padding'>
      <Footer />
    </section>

    </div>
    );
    }
  }

export default App;
