import React from 'react';

import './Gallery.css';
import images from '../../constants/images';
import SubHeading from '../../components/SubHeading/SubHeading';
import {BsInstagram,BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs'

const imagesSlider = [images.gallery01,images.gallery02,images.gallery03,images.gallery04];


const Gallery = () => {

  const sliderRef = React.useRef();


  const scrollImage = (direction)=>{
    
    if(direction === 'left'){
      sliderRef.current.scrollLeft -= 270;

    } else{

      sliderRef.current.scrollLeft += 270;
    }
  }

  return(
  <div className='app__gallery section__padding'>
    <div className="app__gallery-text">

      <SubHeading
      titleOne='Instagram'
      titleTwo='Photo Gallery'
      show={true}
      font='64px'
      />

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>

      <a href="#" className='app__link'>View More</a>
    </div>

    <div className="app__gallery-slider">
      
      <div className="app__gallery-slider-container" ref={sliderRef}>
      {
        imagesSlider.map((img,index)=> (

          <div className='image' key={index + 1}>
          <img src={img} alt="image" />
          <BsInstagram className='instagram-icon' />
          </div>

        ))
      }
      </div>

      <div className="app__gallery-slider-arrows">
        <BsArrowLeftShort className='arrow-icon' onClick={()=>scrollImage('left')} />
        <BsArrowRightShort className='arrow-icon' onClick={()=>scrollImage('right')} />
      </div>
    </div>
  </div>
  )
};

export default Gallery;
