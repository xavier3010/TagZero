import React, { useState } from 'react';
import './footer.css';
import logo from '../../asserts/images/logo.svg';
import ContactUsModal from '../../contact-us/ContactUsModal'; // Adjust the path as needed

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = (isOpen) => {
    setShowModal(isOpen);
  };

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
            <button onClick={() => toggleModal(true)}>Contact Us</button>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="footer-links">
        {/* Existing Footer Content */}
        <div className="footer-links-column">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>How we work</li>
            <li>Case study</li>
          </ul>
        </div>

        {/* Other columns */}
        {/* ... */}
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

      {/* Include Contact Us Modal */}
      <ContactUsModal showModal={showModal} updateModal={toggleModal} />
    </div>
  );
};

export default Footer;
