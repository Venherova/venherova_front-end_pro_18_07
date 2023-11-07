import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import Contact from '../contact/Contact';

import './Content.css';

const Content = () => {
  return (
    <main className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default Content;
