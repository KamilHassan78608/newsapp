import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Navbar from './components/Navbar';
import Category from './components/Category';
import Home from './components/Home';
import Login from './components/Login'

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Category />
        <Routes>
          <Route exact path='/' element={<Home key="general" Category="general" />} />
          <Route exact path='/general' element={<Home key="general" Category="general" />} />
          <Route exact path='/business' element={<Home key="business" Category="business" />} />
          <Route exact path='/entertainment' element={<Home key="entertainment" Category="entertainment" />} />
          <Route exact path='/health' element={<Home key="health" Category="health" />} />
          <Route exact path='/science' element={<Home key="science" Category="science" />} />
          <Route exact path='/sports' element={<Home key="sports" Category="sports" />} />
          <Route exact path='/technology' element={<Home key="technology" Category="technology" />} />
          
          <Route exact path='/login' element={<Login />} />

        </Routes>
      </Router>
    </div>
  );
}
