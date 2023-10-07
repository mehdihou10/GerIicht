import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import { useState } from 'react';


const List = ()=>(
  <ul>
  <li className='p__opensans'><a href="#home">Home</a></li>
  <li className='p__opensans'><a href="#about">about</a></li>
  <li className='p__opensans'><a href="#menu">menu</a></li>
  <li className='p__opensans'><a href="#awards">awards</a></li>
  <li className='p__opensans'><a href="#contact">contact</a></li>

</ul>
)

const Btns = ()=>(

<>
<a href="#">Login / Registration</a>
<a href="#">Book Table</a>
</>

    

)


const Navbar = () =>{

  const [toggle,setToggle] = useState(false);

  return(
    <nav>

    <a className='logo' href="#">
    <img src={images.gericht} alt="logo" />
    </a>

    <div className="nav-ul">
    <List />

    </div>

<div className="sign-links links p__opensans">
<Btns />

</div>

    <div className="change-status">
      {
        toggle === true ? <MdOutlineRestaurantMenu onClick={()=> setToggle(false)} />

        : <GiHamburgerMenu onClick={()=> setToggle(true)} />
      }
    </div>

    {
      toggle && 
      <div className="nav-ul-device slide-bottom">
        <List />

        <div className="sign-links-device links p__opensans">
        <Btns />

        </div>
      </div>
    }
  </nav>
  )
};

export default Navbar;
