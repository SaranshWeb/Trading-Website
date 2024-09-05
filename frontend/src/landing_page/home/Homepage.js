import React from 'react';
import Hero from './Hero';
import Stats from './Stats';

import OpenAccount from '../OpenAccount'
import Awards from './Awards';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Homepage() {
    return ( 
        <>  
            <Hero/>
            <Awards/>
            <Stats/>
            <OpenAccount  />
        </>
    
     );
}

export default Homepage;