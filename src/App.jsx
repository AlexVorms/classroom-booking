import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/Home';
import Navbar1 from './components/Navbars/Navbar';
import MyBookingPage from './components/MyBookingPage/MyBookingPage';
import 'react-toastify/dist/ReactToastify.css';

import ChooseAudienceContainer from './components/ChooseAudience/ChooseAudienceContainer';
import ShedulePageContainer from './components/Calendar/ShedulePageContainer';
import MyBookingPageContainer from './components/MyBookingPage/MyBookingPageContainer';
import ToasterContainer from './components/other/Toaster/ToasterContainer';
import BookingDetailsContainer from './components/BookingDetailsPage/BookingDetailsContainer';


function App() {
  return (
    <div>
      
    <BrowserRouter>
    <Navbar1/>
    <ToasterContainer/>
    <Routes>
      <Route  path="/calendar/:id" element={<ShedulePageContainer/>} ></Route>
      <Route  path="/" element={<HomePage/>} ></Route>
      <Route  path="/mybooking" element={<MyBookingPageContainer/>} ></Route>
      <Route path="/audience" element={<ChooseAudienceContainer/>}></Route>
      <Route path="/bookingDetail/:id" element={<BookingDetailsContainer/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
