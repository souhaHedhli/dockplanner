import React from 'react';
import './service-card.css';
import { Container, Row, Col } from 'reactstrap';


const ServiceCard = (props) =>{
  const { description, client, image, bgClass } =  props
return(
    <Container >
      <Row className={`radius ${bgClass}`} >
          <Row>
            <Col sm='5'>
              <div> For  {client} </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>  {description} </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <img className='image-style'src={image} alt='service' />
           </Col>
          </Row>
      </Row>
    </Container>
)
}

export default ServiceCard;
