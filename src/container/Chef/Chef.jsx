
import './Chef.css';
import { SubHeading } from '../../components';
import {images} from '../../constants';

const Chef = () => (
  <div className='app__chef app__bg section__padding'>
    <div className="image">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__chef-text">
      <SubHeading 
      titleOne='Chef’s Word'
      titleTwo='What we believe in'
      show={true}
      font='64px'
      />

      <div className="paragraph">
        <img src={images.quote} alt="quote" />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
        </p>
      </div>

      <p>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>

      <h3>Kevin Luo</h3>
      <span>Chef & Founder</span>
      <div className="sign-img">
      <img className='sign' src={images.sign} alt="signature" />

      </div>
    </div>
    
  </div>
);

export default Chef;
