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
import Footer from './component/Footer';
import Header from './component/Header';

function App() {
  return (
    <div className="App">

      <Header/>
     
      <Routes>
        <Route path={"/"} element={<DomesticFlight/>} />
        <Route path={"/iranout"}element={<InternationalFlight/>} />
        <Route path={"/train-ticket"}element={<Train/>} />
        <Route path={"/bus-ticket"}element={<Bus/>} />
        <Route path={"/tour"}element={<Tour/>} />
        <Route path={"/hotel"}element={<Hotel/>} />
        <Route path={"/accommodation"}element={<Accommodation/>} />
      </Routes>
      
      <Footer/>
     
    </div>
  );
}

export default App;
