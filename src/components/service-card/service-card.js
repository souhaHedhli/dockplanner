import React, {Component } from 'react';
import './service-card.css';
//import { Container, Row, Col } from 'reactstrap';


class ServiceCard extends Component {
  render() {
    const { description } =  this.props;
    return(
      <div>
        <div >
          <section>
            <div>
            </div>
            <div>{description}</div>
          </section>
        </div>
      </div>
    )
  }
}

export default ServiceCard;
