import React, { useEffect, useState } from 'react';
import './work.css';
import work from '../../asserts/images/How-we-work.jpg';

const Work = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true); // Section is in view, trigger animation
        }
      });
    }, {
      threshold: 0.5, // Trigger when at least 50% of the section is visible
    });

    const section = document.querySelector('.work-container');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section); // Clean up observer when component unmounts
      }
    };
  }, []);

  return (
    <div className={`work-container ${inView ? 'in-view' : ''}`}>
      <div className="work-content">
        <div className="how-we-work">
          <div style={{ width: '8px', height: '8px', background: 'linear-gradient(207deg, #0FD2ED 23%, #008DF3 82%)', borderRadius: '6px' }}></div>
          <h4 className="how-we-work-text">How We Work</h4>
          <div style={{ width: '8px', height: '8px', background: 'linear-gradient(207deg, #0FD2ED 23%, #008DF3 82%)', borderRadius: '6px' }}></div>
        </div>
        <div className="work-heading">
          <span className="bold">Your Partner for<br /></span>
          <span className="light">Software Innovation</span>
        </div>
        <div className="text-section regular">
          Tagzero Private Limited is a software partner and innovator that specializes in providing
          <span className="bold"> top-notch design and development solutions </span>
          to businesses of all sizes.
        </div>
        <div className="text-section regular">
          With our expert team of <span className="bold">developers and designers</span>, we have a proven track record of delivering
          <span className="bold"> high-quality and customized software and web solutions </span>
          that help our clients stay ahead of the competition.
        </div>
        <div className="text-section regular">
          At <span className="bold">Tagzero</span>, we believe in building <span className="bold">long-term relationships</span>
          with our clients and providing them with ongoing support to <span className="bold">ensure their continued success.</span>
        </div>
      </div>
      <div className="work-img-content">
        <img src={work} alt="How we work process" className="work-image" />
      </div>
    </div>
  );
};

export default Work;
