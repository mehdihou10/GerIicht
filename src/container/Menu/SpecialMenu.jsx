
import './SpecialMenu.css';
import images from '../../constants/images';
import data from '../../constants/data';
import SubHeading from '../../components/SubHeading/SubHeading';


const SpecialMenu = () => (
  <div className='app__specialMenu section__padding' id='menu'>
    
    <SubHeading 
    titleOne='Menu that fits you palatte'
    titleTwo='Today’s Special'
    show={true}
    font='64px'
    />

    <div className="app__specialMenu-content">
      <div className="menu-container">
        <h1>Soda</h1>
        <div className="menu-items">
          {
            data.soda.map(item=>(
              <div key={item.title} className="item">

               <div className="first">
               <h4>{item.title}</h4>
               <div className="line"></div>
                <span>{item.price}</span>
               </div>


               <p>{item.tags}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className="image">
        <img src={images.menu} alt="image" />
      </div>


      <div className="menu-container">
        <h1>Cocktails</h1>
        <div className="menu-items">
          {
            data.cocktails.map(item=>(
              <div key={item.title} className="item">

               <div className="first">
               <h4>{item.title}</h4>
               <div className="line"></div>
                <span>{item.price}</span>
               </div>


               <p>{item.tags}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>

    <a className='app__link' href="#" style={{margin: '30px auto 0'}}>View More</a>
  </div>
);

export default SpecialMenu;
