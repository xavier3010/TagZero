import React from 'react';
import './footer.css';
import logo from '../../asserts/images/logo.svg';

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Footer Banner Section */}
      <div className="footer-banner">
        <div className="footer-banner-content">
          <div className="footer-banner-text">
            <p>Drop us a line! We are here to answer your questions 24/7</p>
          </div>
          <div className="footer-banner-title">NEED A CONSULTATION?</div>
          <div className="footer-contact-button">
            <button>Contact Us</button>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="footer-links">
        <div className="footer-links-column">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>How we work</li>
            <li>Case study</li>
          </ul>
        </div>

        {/* Services List */}
        <div className="footer-links-column">
          <h3>Services</h3>
          <ul>
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>On-Demand Apps</li>
            <li>IT Services</li>
            <li>iOS & Android</li>
          </ul>
        </div>

        {/* New Section (Expertise List) */}
        <div className="footer-links-column expertise-column">
          <h3>Our Expertise</h3>
          <ul>
            <li>E-Commerce Applications</li>
            <li>Business Management Apps</li>
            <li>Booking Applications</li>
            <li>Healthcare Services</li>
            <li>Social Media Platforms</li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="footer-links-column subscribe-column">
          <h3>Subscribe</h3>
          <p className="footer-p">Follow our newsletter to stay updated about agency.</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <img src={logo} alt="Logo" className="footer-logo-img" />
          <div className="footer-bottom-right">
            <p>© 2024 Tagzero. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
