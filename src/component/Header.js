import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/image.svg'
import logo1 from '../img/image (1).svg'

const Header = () =>{

    return(
        <div className='header'>
        <div className='main'>

          <div className='box'>
            <div>
              <p className='text-base text-slate-600'>ورود یا ثبت‌نام</p>
            </div>
            <div>
              <p className='text-base text-slate-600'> پیگیری خرید</p>
            </div>
          </div>

          <nav>
            
              <ul>
                <li><a>بیشتر</a></li>
                <li><Link to={'/accommodation'}>ویلا و اقامتگاه</Link></li>
                <li><Link to={'/hotel'}>هتل</Link></li>
                <li><Link to={'/tour'}>تور</Link></li>
                <li><Link to={'/bus-ticket'}>اتوبوس</Link></li>
                <li><Link to={'/train-ticket'}>قطار</Link></li>
                <li><Link to={'/'}>پرواز</Link></li>
              </ul>

            <div className='logo'>
              <div className='flex'>
                <img className='z' src={logo1}></img>
                <p>خرید بلیط، هتل، تور</p>
              </div>
              <div>
                <img src={logo}/> 
              </div>
            </div>
          </nav>

        </div>
      </div>
    )
}
export default Header;