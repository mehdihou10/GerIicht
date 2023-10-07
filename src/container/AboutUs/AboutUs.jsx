import images from '../../constants/images';
import { SubHeading } from '../../components';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__about app__bg section__padding' id="about">
    <img className='g-img' src={images.G} alt="image" />

    <div className="app__about-text">

      <SubHeading
      titleOne='About Us'
      extra={true}
      direction='right'
      
      />
      <p className='p__opensans' style={{textAlign: 'right'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      <a className='app__link' href="#" style={{marginLeft: 'auto'}}>Know More</a>
    </div>


<div className="image">
  <img src={images.knife} alt="Knife" />
</div>

    <div className="app__about-text">

      <SubHeading
      titleOne='Our History'
      extra={true}
      
      />
      <p className='p__opensans'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
      <a className='app__link' href="#">Know More</a>
    </div>
  </div>
);

export default AboutUs;
