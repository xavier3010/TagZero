import React, { useEffect, useState, useRef } from 'react';
import './who.css';

const Who = () => {
  const [isInView, setIsInView] = useState(false);
  const headerRef = useRef(null); // Reference for the header section
  const containerRef = useRef(null); // Reference for the entire component container

  useEffect(() => {
    // IntersectionObserver for the background fill effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true); // Trigger the background fill effect when in view
          }
        });
      },
      { threshold: 0.1 }
    );
  
    const section = document.querySelector('.who-info-section');
    if (section) observer.observe(section);
  
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  

  useEffect(() => {
    // Handle scrolling behavior for the header section (not for info-section)
    const handleScroll = () => {
      const header = headerRef.current;
      const container = containerRef.current;
  
      if (header && container) {
        const containerRect = container.getBoundingClientRect();
        const headerHeight = header.offsetHeight;
  
        if (containerRect.top < 35 && containerRect.bottom > headerHeight) {
          header.style.position = 'fixed';
          header.style.top = '60px';
          header.style.width = '50%';
          header.style.height = '35%';
        } else if (containerRect.bottom <= headerHeight) {
          header.style.position = 'absolute';
          header.style.width = '100%';
          header.style.top = `${container.offsetHeight+70 - headerHeight}px`;
        } else {
          header.style.position = 'absolute';
          header.style.top = '0px';
          header.style.width = '100%';
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div ref={containerRef} className="who-container">
      <div className={`who-filled-background ${isInView ? 'who-section-in-view' : ''}`}></div> {/* Add filled background element */}

      <div className="who-content">
        <div className="who-header-width">
          <div ref={headerRef} className="who-header-section">
            <div className="who-about-us">
              <div className="who-gradient-circle"></div>
              <div className="who-about-us-text">About Us</div>
              <div className="who-gradient-circle"></div>
            </div>
            <div className="who-heading">
              <span className="who-main-text">Design the Concept<br /></span>
              <span className="who-sub-text">of Your Business Idea Now</span>
            </div>
          </div>
        </div>
        
        <div className="who-info-section">
          <div className="who-card who-we-are">
            <div className="who-card-header">Who We Are :</div>
            <div className="who-card-body">
              At TagZero, we transform data into actionable insights that drive business success. As a leading analytics and consulting firm, we help organizations unlock the power of their data to make smarter decisions and achieve their goals.
            </div>
            <div className="who-card-design who-we-are-design"></div>
          </div>
          <div className="who-card who-values">
            <div className="who-card-header">Our Values:</div>
            <div className="who-card-body">
              Integrity, innovation, and excellence define us at TagZero. We prioritize collaboration and client success, delivering tailored, high-quality solutions. Transparency and a commitment to results guide everything we do.
            </div>
            <div className="who-card-design who-values-design"></div>
          </div>
          <div className="who-card who-mission">
            <div className="who-card-header">Our Mission:</div>
            <div className="who-card-body">
              Our mission is to empower businesses with innovative, data-driven solutions that deliver real results. We are committed to being your trusted partner in navigating the complexities of data and turning challenges into opportunities.
            </div>
            <div className="who-card-design who-mission-design"></div>
          </div>
          <div className="who-card who-why-choose-us">
            <div className="who-card-header">Why Choose Us:</div>
            <div className="who-card-body">
              TagZero offers proven expertise, tailored solutions, and end-to-end support to help you achieve your goals. Our client-focused approach ensures we understand your unique needs, delivering impactful results that drive your success.
            </div>
            <div className="who-card-design who-why-choose-us-design"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
