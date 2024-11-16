import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import Provider from "./Contexts/PizzaContext";
import Home from './components/Home';
import React from 'react';
import IconCart from './components/IconCart';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Carrito from './views/Carrito';
import Pizza from './views/Pizza';
import NotFound from './views/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </Provider>
  );
}

export default App;

