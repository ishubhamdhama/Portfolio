import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import Testimonal from './components/Pages/Testimonial/Testimonal';
import AdminPanel from './components/Admin/AdminPanel';
import Portfolio from './components/Pages/Portfolio/Portfolio';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
          <Route path='/testimonial' element={<Testimonal />} ></Route>
          <Route path='/portfolio' element={<Portfolio />} ></Route>
          <Route path='/adminPanel' element={<AdminPanel/>}></Route>
        </Routes>
      </BrowserRouter>
      </>
  )
};