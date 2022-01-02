import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Accommodation from './component/Accommodation';
import DomesticFlight from './component/DomesticFlight';
import Hotel from './component/Hotel';
import InternationalFlight from './component/InternationalFlight';
import Tour from './component/Tour';
import Train from './component/Train';
import Bus from './component/Bus';
import logo from './img/image.svg'
import logo1 from './img/image (1).svg'

function App() {
  return (
    <div className="App">
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
            <div>
              <ul>
                <li><a>بیشتر</a></li>
                <li><Link to={'/accommodation'}>ویلا و اقامتگاه</Link></li>
                <li><Link to={'/hotel'}>هتل</Link></li>
                <li><Link to={'/tour'}>تور</Link></li>
                <li><Link to={'/bus-ticket'}>اتوبوس</Link></li>
                <li><Link to={'/train-ticket'}>قطار</Link></li>
                <li><Link to={'/'}>پرواز</Link></li>
              </ul>
            </div>

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
      <Routes>
        <Route path={"/"} element={<DomesticFlight/>} />
        <Route path={"/iranout"}element={<InternationalFlight/>} />
        <Route path={"/train-ticket"}element={<Train/>} />
        <Route path={"/bus-ticket"}element={<Bus/>} />
        <Route path={"/tour"}element={<Tour/>} />
        <Route path={"/hotel"}element={<Hotel/>} />
        <Route path={"/accommodation"}element={<Accommodation/>} />
      </Routes>
    </div>
  );
}

export default App;
