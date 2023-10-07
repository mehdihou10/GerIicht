import React from 'react';

import './Footer.css';
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi';
import FooterOverlay from '../../components/FooterOverlay/FooterOverlay';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import images from '../../constants/images';

const Footer = () => (
  <footer className='section__padding'>

    <FooterOverlay />
    <NewsLetter />

    <div className="app__footer-content">
      <div className="app__footer-links">

    <div className="info">
    <h3>Contact Us</h3>
        <p>9 W 53rd St, New York, NY 10019, USA</p>
        <p>
        +1 212-344-1230
        <br />
        +1 212-555-1230
        </p>
    </div>

<div className="info">
<h1>Gerícht</h1>
<p>"The best way to find yourself is to lose yourself in the service of others.”</p>

<img src={images.spoon} alt="spoon" />

<div className="social-media">
  <a href="#"><FiFacebook /></a>
  <a href="#"><FiTwitter /></a>
  <a href="#"><FiInstagram /></a>

</div>
</div>

<div className="info">
<h3>Working Hours</h3>
<p>Monday-Friday: <br />
08:00 am -12:00 am</p>

<p>
Saturday-Sunday: <br />
07:00am -11:00 pm
</p>
</div>

      </div>

      <p className="copyright">2023 Gerícht. All Rights reserved.</p>
    </div>
       
  </footer>
);

export default Footer;
