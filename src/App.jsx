import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomCalendar from './components/Calendar/CustomCalendar/CustomCalendar';
import HomePage from './components/HomePage/Home';
import Navbar1 from './components/Navbars/Navbar';
import MyBookingPage from './components/MyBookingPage/MyBookingPage';
import DragAndDrop from './components/Calendar/CustomCalendar/DrapAndDrop';

import ChooseAudienceContainer from './components/ChooseAudience/ChooseAudienceContainer';


function App() {
  return (
    <BrowserRouter>
    <Navbar1/>
    <Routes>
      <Route  path="/calendar" element={<DragAndDrop/>} ></Route>
      <Route  path="/" element={<HomePage/>} ></Route>
      <Route  path="/mybooking" element={<MyBookingPage/>} ></Route>
      <Route path="/audience" element={<ChooseAudienceContainer/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
