import React, { useEffect, useState } from 'react';
import './structure.css';

// Import logos from the assets folder
import discoveryLogo from '../../asserts/images/Discovery.png';
import designLogo from '../../asserts/images/Design.svg';
import developmentLogo from '../../asserts/images/Development.svg';
import launchLogo from '../../asserts/images/Launch.svg';

const Structure = () => {
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

    const section = document.querySelector('.structure-container');
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
    <div className={`structure-container ${inView ? 'in-view' : ''}`}>
      <div className="structure-row">
        <Card
          iconSrc={discoveryLogo}
          title="Discovery"
          description="We begin by understanding your business needs, goals, and challenges to create a strategic plan."
        />
        <Card
          iconSrc={designLogo}
          title="Design"
          description="We develop intuitive designs that reflect your vision, focusing on user experience and functionality."
        />
        <Card
          iconSrc={developmentLogo}
          title="Development"
          description="We bring your project to life with clean coding, seamless integration, and thorough testing."
        />
        <Card
          iconSrc={launchLogo}
          title="Launch"
          description="We ensure a smooth and successful launch, handling all technical aspects and final checks."
        />
      </div>
    </div>
  );
};

const Card = ({ iconSrc, title, description }) => (
  <div className="structure-card">
    <div className="structure-icon">
      {iconSrc && <img src={iconSrc} alt={`${title} icon`} />}
    </div>
    <div className="structure-title">{title}</div>
    <div className="structure-divider"></div>
    <div className="structure-description">{description}</div>
  </div>
);

export default Structure;
