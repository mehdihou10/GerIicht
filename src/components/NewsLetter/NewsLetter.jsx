import './newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

const NewsLetter = ()=>(

    <div className="app__newsletter">
        <div className="app__newsletter-heading">
            <SubHeading 
            titleOne='Newsletter'
            titleTwo='Subscribe to Our Newsletter'
            show={true}
            font='54px'
            />

            <p>And never miss latest Updates!</p>
        </div>

        <div className="app__newsletter-input">
            <input type="email" placeholder='Email Adress'/>
            <a className='app__link' href="#">Subscribe</a>
        </div>
    </div>
)

export default NewsLetter;