import React from 'react';
import './service-card.css';
//import { Container, Row, Col } from 'reactstrap';


const ServiceCard = (props) =>{
  const { description, client, image, bgClass, country } =  props
return(
  <div  className={`radius card ${bgClass}`}>
  <h6>{client}</h6>
  <h3>{description}</h3>
  <div className="select-img">
    <div >
    {country && (
      <select className="country-select">
        <option>Choose country</option>
        <option value="Argentina">Argentina</option>
        <option value="Australia">Australia</option>
        <option value=" Brazil"> Brazil</option>
        <option value="Chile">Chile</option>
        <option value="Colombia">Colombia</option>
        <option value="Czech">Czech</option>
        <option value="France">France</option>
        <option value="Italy">Italy</option>
        <option value="Mexico">Mexico</option>
        <option value="Peru">Peru</option>
        <option value="Poland">Poland</option>
        <option value="Portugal">Portugal</option>
        <option value="Spain">Spain</option>
        <option value="Turkey">Turkey</option>
        <option value=" UK"> UK</option>
      </select>
    )}
    </div>

    <img src={image} alt="service" />
  </div>
</div>
)
}

export default ServiceCard;
