import { useState,useRef } from 'react';

import './Intro.css';
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs';
import {meal} from '../../constants';

const Intro = () => {

  const videoRef = useRef();
  const [play,setPlay] = useState(false);

  const handleVideo = ()=>{

    setPlay(!play);

    if(play){
      videoRef.current.pause();

    } else{

      videoRef.current.play();
    }
  }

  return(
    <div className='app__intro'>
      <div className="overlay"></div>
    <video src={meal}
    ref={videoRef}
    type='video/mp4'
    loop
    muted
    controls={false}
     />

     <div className="controls">
      {
        play ?
      <BsPauseFill onClick={handleVideo} />

      : 
      <BsFillPlayFill onClick={handleVideo}/>

     }

     </div>
  </div>
  )
};

export default Intro;
