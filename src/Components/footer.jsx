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
import "../Styles/Footer.css"; // ✅ External CSS

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-box">
          <div className="d-flex flex-wrap justify-content-between align-items-start">
            {/* Address & Contact */}
            <div className="footer-section">
              <img src={logo} alt="Pro Gear" className="footer-logo" />
              <p className="footer-description">
                Pro Gear is a flexible, affordable, and convenient solution for car ownership.
              </p>
              <p className="d-flex align-items-center">
                <img src={phoneIcon} alt="Phone" className="contact-icon" />
                <strong>+91 81780 50450</strong>
              </p>
              <p className="d-flex align-items-center">
                <img src={emailIcon} alt="Email" className="contact-icon" />
                <strong>support@progear.com</strong>
              </p>
              <div className="d-flex gap-2">
                <a href="/" className="social-link">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="/" className="social-link">
                  <img src={instagramIcon} alt="Instagram" />
                </a>
                <a href="/" className="social-link">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a href="/" className="social-link">
                  <img src={twitterIcon} alt="Twitter" />
                </a>
              </div>
            </div>

            {/* GET IN TOUCH */}
            <div className="footer-section">
              <h5 className="fw-bold">GET IN TOUCH</h5>
              <ul className="list-unstyled d-flex flex-column gap-3">
                <li><a href="/about" className="footer-link">About Us</a></li>
                <li><a href="/contact" className="footer-link">Contact Us</a></li>
                <li><a href="/retail-faqs" className="footer-link">Retail FAQs</a></li>
                <li><a href="/corporate-faqs" className="footer-link">Corporate FAQs</a></li>
                <li><a href="/blog" className="footer-link">Blog</a></li>
              </ul>
            </div>

            {/* CAR SUBSCRIPTION */}
            <div className="footer-section">
              <h5 className="fw-bold">CAR SUBSCRIPTION</h5>
              <ul className="list-unstyled d-flex flex-column gap-3">
                <li><a href="https://www.google.com/maps?q=Delhi+NCR" target="_blank" rel="noopener noreferrer" className="footer-link">Delhi NCR</a></li>
                <li><a href="https://www.google.com/maps?q=Bangalore" target="_blank" rel="noopener noreferrer" className="footer-link">Bangalore</a></li>
                <li><a href="https://www.google.com/maps?q=Hyderabad" target="_blank" rel="noopener noreferrer" className="footer-link">Hyderabad</a></li>
              </ul>
            </div>

            {/* USEFUL LINKS */}
            <div className="footer-section">
              <h5 className="fw-bold">USEFUL LINKS</h5>
              <ul className="list-unstyled d-flex flex-column gap-3">
                <li><a href="https://yourwebsite.com/browse-cars" className="footer-link">Browse Cars</a></li>
                <li><a href="https://yourwebsite.com/corporate-lease" className="footer-link">Corporate Lease</a></li>
                <li><a href="https://yourwebsite.com/privacy-policy" className="footer-link">Privacy Policy</a></li>
                <li><a href="https://yourwebsite.com/terms-and-conditions" className="footer-link">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="fw-bold text-black">&copy; 2024 ProGear.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
