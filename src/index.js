import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Donate from './pages/Donate';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="donate" element={<Donate />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="blog" element={<Blog />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);