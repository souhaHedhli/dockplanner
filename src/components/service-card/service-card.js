import React, {Component } from 'react';
import './service-card.css';
//import { Container, Row, Col } from 'reactstrap';


class ServiceCard extends Component {
  render(props) {
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
    <div >
      <section>
        <div>
        </div>
        <div>
         {props.description}
        </div>
      </section>
    </div>
  </div>
)


}
}

export default ServiceCard;
