import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connection from './pages/Connection';
import Home from './pages/Home';
import MyPosts from './pages/MyPosts';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Connection />} />
        <Route path='/home' element={<Home />} />
        <Route path='/myPosts' element={<MyPosts />} />
        {/* path "*" fonctionne si l url correspond a rien de declarer */}
        <Route path='*' element={<Connection />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;