import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Events,
  Contact,
  Oops404,
  CompanyHistory,
  Services,
  Location
} from './pages.js';

// https://api.github.com/users/gagneet

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="services" element={<Services />} />
          <Route path="history" element={<CompanyHistory />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Oops404 />} />
      </Routes>
    </div>
  );
}

export default App;
