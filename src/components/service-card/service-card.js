import React, {Component } from 'react';
import './service-card.css';
//import { Container, Row, Col } from 'reactstrap';


class ServiceCard extends Component {
  render(props) {

return(
  <div>
    <div >
      <section>
        <div>
        </div>
        <div>{this.props.description}</div>
      </section>
    </div>
  </div>
)


}
}

export default ServiceCard;
