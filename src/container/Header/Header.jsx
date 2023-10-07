import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';
import './Header.css';

const Header = () => {
  return(
    <div className='app__header app__wrapper section__padding' id='home'>

    <div className="app__header-text">
    
    <SubHeading
    titleOne='Chase the new Flavour'
    titleTwo='The key to Fine dining'
    font='90px'
    show={true}
    
     />

      <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <a className='app__link' href="#">Explore Now</a>
    </div>

    <div className="app__header-img">
      <img src={images.welcome} alt="image" />
    </div>
  </div>
  )
};

export default Header;
