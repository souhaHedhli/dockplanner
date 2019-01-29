import React from "react";
import './locations.css';
import { Button } from 'reactstrap';

  const Locations = (props) => {
    const {image,name,url} = props
    return(
      <a href={url} className="location-picture">
        <figure>
          <img  class="figure-img img-fluid rounded" src={image} alt='img'/>
          <div className="location-picture-bottom">
          <p>{name}</p>
          <Button color='primary'>SEE OPENINGS</Button>
          </div>
        </figure>
      </a>
    )
  }

  export default Locations;
