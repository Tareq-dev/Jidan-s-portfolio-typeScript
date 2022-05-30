import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Blogs from './pages/Blog/Blogs';
import SingleBlog from './pages/Blog/SingleBlog';
import Footer from './pages/Home/Footer';
import LandingPage from './pages/Home/LandingPage';


function App() {
 
  return (
      <div className="">
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />}> </Route>
          <Route path='/blogs' element={<Blogs />}> </Route>
          <Route path='/blogs/:id' element={<SingleBlog />}> </Route>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
