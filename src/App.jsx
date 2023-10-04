import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/Home';
import Navbar1 from './components/Navbars/Navbar';
import MyBookingPage from './components/MyBookingPage/MyBookingPage';


import ChooseAudienceContainer from './components/ChooseAudience/ChooseAudienceContainer';
import ShedulePageContainer from './components/Calendar/ShedulePageContainer';


function App() {
  return (
    <BrowserRouter>
    <Navbar1/>
    <Routes>
      <Route  path="/calendar/:id" element={<ShedulePageContainer/>} ></Route>
      <Route  path="/" element={<HomePage/>} ></Route>
      <Route  path="/mybooking" element={<MyBookingPage/>} ></Route>
      <Route path="/audience" element={<ChooseAudienceContainer/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
