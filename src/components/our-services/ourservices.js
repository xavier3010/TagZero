import React, { useState, useEffect } from 'react';
import './ourservices.css'; // Importing plain CSS

const OurServices = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to check if the element is in view
  const handleScroll = () => {
    const element = document.querySelector('.property');
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`property ${isVisible ? 'animate-bg' : ''}`}>
      <div className="group">
        <div className="backgroundShadow">
          <div className="gradient"></div>
          <div className="textWrapper">Our Services</div>
          <div className="gradient2"></div>
        </div>
        <div className="div">
          <p className="text">
            We Offer a Wide
            <br />
            Variety of IT Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
