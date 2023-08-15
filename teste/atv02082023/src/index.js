import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.scss';
import Carro from './pages/carro';
import Home from './pages/home';
import Sorvete from './pages/sorveteria'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carro' element={<Carro />} />
        <Route path='/sorvete' element={<Sorvete />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);