import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from  'components/home/home';
import CareerCoaching from  'components/services/career-coaching/career-coaching';
import ResumeWriting from  'components/services/resume-writing/resume-writing';
import LinkedinProfileUpdate from  'components/services/linkedin-profile-update/linkedin-profile-update';
import Checkout from  'components/checkout/checkout';

function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path="*" element={<Home/>}/>
     <Route path="/services/resume-writing" element={<ResumeWriting/>} />
     <Route path="/services/career-coaching" element={<CareerCoaching/>} />
     <Route path="/services/linkedin-profile-update" element={<LinkedinProfileUpdate/>} />
     <Route path="/checkout" element={<Checkout/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;