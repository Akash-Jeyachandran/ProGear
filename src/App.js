import React from "react";
// import Navbar from "./Components/Navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Helmet } from 'react-helmet'; 
import Navbar from '../src/Components/Navbar';
import Home from "./Pages/ProGear";
import Faq from "../src/Components/fqa";
import Footer from '../src/Components/footer';
import SubscriptionPlan from "../src/Components/subscriptionplan";
import Description from "../src/Components/Description";


function App() {
  return (
    <Router>
       <Helmet>
            <title>ProGear</title>
        </Helmet>
        <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Description />} />
      <Route path="/subscription" element={<SubscriptionPlan />} />
      <Route path="/faq" element={<Faq />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
