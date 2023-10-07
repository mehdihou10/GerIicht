import React from 'react';
import './findus.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const FindUs = () => (
  <div className='app__contact app__bg section__padding' id='contact'>

    <div className="text">
    <SubHeading
  titleOne='Contact'
  titleTwo='Find Us'
  show={true}
  font='64px'
   />  
   <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
   <h3 className='open-hours'>Opening Hours</h3>
   <p>Mon - Fri: 10:00 am - 02:00 am</p>
   <p>Sat - Sun: 10:00 am - 03:00 am</p>

   <a className='app__link' href="#" style={{marginTop: '50px'}}>Visit Us</a>
    </div>

    <div className="image">
      <img src={images.findus} alt="image" />
    </div>
  </div>
);

export default FindUs;
