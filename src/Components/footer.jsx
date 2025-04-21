import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Assets/Logo/Frame 637321.png"; 
import phoneIcon from "../Assets/Logo/fi_phone-call.png";
import emailIcon from "../Assets/Logo/fi_mail.png";
import facebookIcon from "../Assets/Logo/u_facebook.png"; 
import instagramIcon from "../Assets/Logo/u_instagram.png";
import linkedinIcon from "../Assets/Logo/u_linkedin.png"; 
import twitterIcon from "../Assets/Logo/fi_twitter.png"; 
import "../Styles/common.css"; 

const Footer = () => {    
  return (
    <footer >
      <div className="container">
        
        {/* Full Width Box Container */}
        <div 
          className="footer-box w-100 p-4 "
          style={{ backgroundColor: "#fff",width:"100%" }}
        >
          
          {/* Footer Content - Flex Wrap for Responsiveness */}
          <div className="d-flex flex-wrap justify-content-between align-items-start">
            
            {/* Address & Contact */}
            <div className="footer-section mb-3" style={{ maxWidth: "269.3px" }}>
              <img src={logo} alt="Pro Gear" style={{ width: "140px" }} />
              <p className="mt-2 text-black fw-500">
                Pro Gear is a flexible, affordable, and convenient solution for car ownership.
              </p>
              <p className="d-flex align-items-center">
                <img src={phoneIcon} alt="Phone" style={{ width: "20px", marginRight: "8px" }} />
                <strong>+91 81780 50450</strong>
              </p>
              <p className="d-flex align-items-center">
                <img src={emailIcon} alt="Email" style={{ width: "20px", marginRight: "8px" }} />
                <strong>support@progear.com</strong>
              </p>
              <div className="d-flex gap-2">
                <a href="/" className="social-link"><img src={facebookIcon} alt="Facebook" style={{ width: "24px" }} /></a>
                <a href="/" className="social-link"><img src={instagramIcon} alt="Instagram" style={{ width: "24px" }} /></a>
                <a href="/" className="social-link"><img src={linkedinIcon} alt="LinkedIn" style={{ width: "24px" }} /></a>
                <a href="/" className="social-link"><img src={twitterIcon} alt="Twitter" style={{ width: "24px" }} /></a>
              </div>
            </div>

            {/* GET IN TOUCH */}
            <div className="footer-section mb-3 d-flex flex-column gap-2" style={{ maxWidth: "269.3px" }}>
              <h5 className="fw-bold">GET IN TOUCH</h5>
              <ul className="list-unstyled text-muted d-flex flex-column gap-3">
                <li><a href="/about" className="text-black fw-500 text-decoration-none">About Us</a></li>
                <li><a href="/contact" className="text-black fw-500 text-decoration-none">Contact Us</a></li>
                <li><a href="/retail-faqs" className="text-black fw-500 text-decoration-none">Retail FAQs</a></li>
                <li><a href="/corporate-faqs" className="text-black fw-500 text-decoration-none">Corporate FAQs</a></li>
                <li><a href="/blog" className="text-black fw-500 text-decoration-none">Blog</a></li>
              </ul>
            </div>

            {/* CAR SUBSCRIPTION */}
            <div className="footer-section mb-3 d-flex flex-column gap-2" style={{ maxWidth: "269.3px"}}>
              <h5 className="fw-bold">CAR SUBSCRIPTION</h5>
              <ul className="list-unstyled text-muted d-flex flex-column gap-3">
                <li><a href="https://www.google.com/maps?q=Delhi+NCR" className="text-black fw-500 text-decoration-none" target="_blank" rel="noopener noreferrer">Delhi NCR</a></li>
                <li><a href="https://www.google.com/maps?q=Bangalore" className="text-black fw-500 text-decoration-none" target="_blank" rel="noopener noreferrer">Bangalore</a></li>
                <li><a href="https://www.google.com/maps?q=Hyderabad" className="text-black fw-500 text-decoration-none" target="_blank" rel="noopener noreferrer">Hyderabad</a></li>
              </ul>
            </div>

            {/* USEFUL LINKS */}
            <div className="footer-section mb-3 d-flex flex-column gap-2" style={{ maxWidth: "269.3px" }}>
              <h5 className="fw-bold">USEFUL LINKS</h5>
              <ul className="list-unstyled text-muted d-flex flex-column gap-3">
                <li><a href="https://yourwebsite.com/browse-cars" className=" text-black fw-500 text-decoration-none">Browse Cars</a></li>
                <li><a href="https://yourwebsite.com/corporate-lease" className="text-black fw-500 text-decoration-none">Corporate Lease</a></li>
                <li><a href="https://yourwebsite.com/privacy-policy" className="text-black fw-500 text-decoration-none">Privacy Policy</a></li>
                <li><a href="https://yourwebsite.com/terms-and-conditions" className="text-black fw-500 text-decoration-none">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="d-flex justify-content-center  py-3 mt-3" style={{ backgroundColor: "#0000000A",width:"100%",height:"auto" }}>
  <p className=" fw-bold text-black">&copy; 2024 ProGear.com</p>
</div>

      </div>
    </footer>
  );
};

  
export default Footer;
