import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './components/error/error';
import Admin from './pages/Admin';
import ChangePostId from './pages/ChangePostId';
import Connection from './pages/Connection';
import CreateAccount from './pages/CreateAccount';
import CreatePostId from './pages/CreatePostId';
import DeletePost from './pages/DeletePost';
// import DetailPost from './pages/DetailPost';
import Home from './pages/Home';
import MyPosts from './pages/MyPosts';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Connection />} />
        <Route path='/home' element={<Home />} />
        <Route path='/myPosts' element={<MyPosts />} />
        <Route path='/createAccount' element={<CreateAccount />} />
        <Route path='/createPost' element={<CreatePostId />} />
        <Route path='/changePostId' element={<ChangePostId />} />
        <Route path='/deletePost' element={<DeletePost />} />
        {/* <Route path='/detailPost/:ID' element={<DetailPost />} /> */}
        <Route path='/admin' element={<Admin />} />

        {/* path "*" fonctionne si l url correspond a rien de declarer */}
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;