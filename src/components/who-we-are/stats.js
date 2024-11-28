import React, { useState, useEffect, useRef } from 'react';
import './stats.css'; // Importing the CSS file

const Stats = () => {
  // State for numbers
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [advisors, setAdvisors] = useState(0);
  const [years, setYears] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // To track visibility

  // Function to animate the number counting up
  const animateCounter = (target, setter) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < target) {
        count++;
        setter(count);
      } else {
        clearInterval(interval); // Stop once target is reached
      }
    }, 30); // Adjust speed by changing the interval
  };

  // Set up intersection observer to detect when the stats section is in view
  const statsRef = useRef(null);

  useEffect(() => {
    const currentRef = statsRef.current; // Capture the ref value in a local variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          // If the section is in view, start the animation
          animateCounter(50, setClients); // Set target number for each stat
          animateCounter(120, setProjects);
          animateCounter(15, setAdvisors);
          animateCounter(6, setYears);
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (currentRef) {
      observer.observe(currentRef); // Start observing the stats section
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Cleanup observer when component unmounts
      }
    };
  }, [isVisible]);

  return (
    <div className="stats-container" ref={statsRef}>
      <div className="stats-wrapper">
        <div className="stats-content">
          <div className="stat-box">
            <div className="stat-number">{clients}+</div>
            <div className="stat-label">Active Clients</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{projects}+</div>
            <div className="stat-label">Projects Done</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{advisors}+</div>
            <div className="stat-label">Team Advisors</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{years}+</div>
            <div className="stat-label">Glorious Years</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
