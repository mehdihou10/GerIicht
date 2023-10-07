import React from 'react';
import images from '../../constants/images';
import './subheading.css';

const SubHeading = ({titleOne,titleTwo,direction,font,show,extra}) => (
  <div className='app__subheading'>
    <div className={`${direction === 'right' ? 'right' : ''}`}>
    <h3 style={extra && {fontFamily: 'var(--font-base)', fontSize: '60px',color: 'var(--color-golden)'}}>{titleOne}</h3>
      <img className='spoon__img' src={images.spoon} alt="spoon" />
    </div>
  

      {show && <h1 style={{fontSize: font}}>{titleTwo}</h1>}

  </div>
);

export default SubHeading;
