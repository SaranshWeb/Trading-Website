import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import './index.css';

import Homepage from './landing_page/home/Homepage';
import Aboutpage from './landing_page/about/Aboutpage';

import 'bootstrap/dist/css/bootstrap.min.css';

import Signup from "./landing_page/signup/Signup"
import Supportpage from './landing_page/support/Supportpage';

import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Notfound from './landing_page/Notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path='/' element={< Homepage/>}/>
  <Route path='/signup' element={< Signup/>}/>
  <Route path='/about' element={< Aboutpage/>}/>
  <Route path='/support' element={< Supportpage/>}/>
  <Route path="*" element={<Notfound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  
);
