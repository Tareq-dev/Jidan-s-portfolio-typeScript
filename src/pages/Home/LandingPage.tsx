import React from 'react';
import Blog from './Blog';
import Gallery from './Gallery';
import Home from './Home';
import MyWork from './MyWork';

const LandingPage = () => {
     return (
          <div>
               <Home />
               <MyWork />
               <Blog />
               <Gallery />
          </div>
     );
};

export default LandingPage;