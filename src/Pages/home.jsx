import React from 'react';
import Footer from '../Components/footer';
import Navbar from '../Components/Navbar';
import LandingPage from '../../src/Components/LandingPage';
import Description from '../../src/Components/Description';
import Works from '../../src/Components/works';
import Subscriptionplan from '../../src/Components/subscriptionplan';
import Partners from '../../src/Components/partners';
import Faq from '../../src/Components/faq1';

const home = () => {
    return (
        <div>
           <Navbar />
            <LandingPage />
            <Description />
            <Works />
            <Subscriptionplan />
            <Partners />
            <Faq />
            <Footer />
            
            

        </div>
    );
}

export default home;
