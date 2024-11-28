import React, { useEffect, useRef, useState } from 'react';
import './services.css'; // Ensure to import the updated CSS file

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description: "Enhance your website's functionality and performance with our expert web development team.",
    imageClass: "web-development",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Transform your business idea into a successful mobile app with our experienced app developers.",
    imageClass: "app-development",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Maximize your website traffic and conversions with our tailored SEO, PPC, social media marketing solutions.",
    imageClass: "digital-marketing",
  },
  {
    id: 4,
    title: "Marketing Analytics",
    description: "Unlock data-driven insights and optimize your strategies with our expert marketing analytics services, designed to boost your growth.",
    imageClass: "marketing-analytics",
  },
  {
    id: 5,
    title: "Web Deployment",
    description: "Ensure seamless online presence and accessibility with our expert web deployment services, tailored for efficiency and reliability.",
    imageClass: "web-deployment",
  },
  {
    id: 6,
    title: "Software Development",
    description: "Transform your ideas into powerful solutions with our expert software development team, delivering innovation and quality.",
    imageClass: "software-development",
  },
];

const Services = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current; // Copy the ref to a local variable
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  

  return (
    <div 
      className={`box ${inView ? 'fade-in' : ''}`} 
      ref={sectionRef}
    >
      {servicesData.map((service) => (
        <div key={service.id} className={`property-${service.imageClass}`}>
          <div className={`component-${service.imageClass}`}>
            <div className={`img ${service.imageClass}`}></div>
            <div className={`heading-${service.imageClass}`}>{service.title}</div>
            <p className={`p-${service.imageClass}`}>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
