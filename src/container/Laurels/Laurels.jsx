import React from 'react';

import './Laurels.css';
import images from '../../constants/images';
import data from '../../constants/data';
import SubHeading from '../../components/SubHeading/SubHeading';

const Laurels = () => (
  <div className='app__awards app__bg section__padding' id='awards'>
    
    <div className="app__awards-content">
      <div className="text">

        <SubHeading
        titleOne='Awards & recognition'
        titleTwo='Our Laurels'
        show={true}
        font='64px'
        />

        <div className="awards-items">
          {
            data.awards.map(item=>(

              <div key={item.title} className='item'>
                <img src={item.imgUrl} alt="award" />
                <div className="second">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>


            ))
          }
        </div>
      </div>

      <div className="image">
        <img src={images.laurels} alt="image" />
      </div>
    </div>
  </div>
);

export default Laurels;
