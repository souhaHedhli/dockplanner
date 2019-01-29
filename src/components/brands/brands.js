import React from "react";
import logo from '../../assets/logo.png'
import './brands.css';


const Brands = (props) => {
  const {url,name} = props
  return(

        <a href={url} className="brand-logo-text">
          <img src={logo} alt="logo"/>
          <span className='brand-name-style'> {name}</span>
        </a>
  )
}

export default Brands;
