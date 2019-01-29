import React from "react";
import StatsElement from '../stats-element/stats-element.js'
import './stats-section.css';
import logo from '../../assets/logo.png'

const elements = [{
          logo:'https://www.docplanner.com/img/flag.png' ,
          title:'Leader in 10 countries',
          description:'Poland, Turkey, Spain, Italy Czech Republic, Mexico, Brazil,Colombia, Argentina and Chile'
        },
        {
          logo:'https://www.docplanner.com/img/visits.png' ,
          title:'1 million appointments',
          description:'booked last month'
        },
        {
          logo:'https://www.docplanner.com/img/patients.png' ,
          title:'30 million unique patients',
          description:'booked last month'
        },
        {
          logo:'https://www.docplanner.com/img/doctors.png' ,
          title:'2 million active doctors',
          description:'trust in our solutions'
        }
      ]

const StatsSection = (props) => {
  return(
    <div className="BiggestHealthcarePlatform bg">
      <div className="BigLogo">
        <h1>
          The world's <br /> biggest healthcare platform{" "}
        </h1>
        <p>
          We work from 6 offices all over the world, bringing Docplanner <br />{" "}
          Group to life in almost 20 countries.
        </p>
      </div>

      <div className="FourWhiteBoxes">
      {elements.map((element, i) => <StatsElement {...element} key={i} />)}
    </div>
  </div>
  )

}

export default StatsSection;
