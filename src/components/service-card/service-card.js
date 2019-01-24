import React from 'react';
import './service-card.css';
import {  Row, Col } from 'reactstrap';


const ServiceCard = (props) =>{
  const { description, client, image, backColor } =  this.props
return(
    <section >
      <Row className='service-section {backColor}' >
        <Col >
          <Row>
            <Col>
              <span> For  {client} </span>
            </Col>
          </Row>
          <Row>
            <Col>
              {description}
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={image} alt='service' />
           </Col>
          </Row>
        </Col>
      </Row>
    </section>
)
}

export default ServiceCard;
