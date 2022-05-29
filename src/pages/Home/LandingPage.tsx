import React from 'react';

import Blog from './Blog';
import Home from './Home';
import MyWork from './MyWork';

const LandingPage = () => {
     return (
          <div>
               <Home />
               <MyWork />
               <Blog />
          </div>
     );
};

export default LandingPage;