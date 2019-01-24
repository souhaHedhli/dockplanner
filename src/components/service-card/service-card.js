import React from 'react';
import './service-card.css';
//import { Container, Row, Col } from 'reactstrap';


const ServiceCard = (props) =>{
  /*constructor (props) {
    super(props);
    let card ={
        client: props.client,
        text: props.description,
        image: props.image,
        backColor: props.backColor,
        country: true
    }
  } */

return(
  <div>
    <ServiceCard >
      <section>
        <div>
          for {props.client}
        </div>
        <div>
         {props.description}
        </div>
      </section>
    </ServiceCard>
  </div>
)



}

export default ServiceCard;
