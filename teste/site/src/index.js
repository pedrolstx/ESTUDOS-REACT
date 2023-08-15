import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/home';
import Contador from './pages/contador/index';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contador' element={<Contador />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
