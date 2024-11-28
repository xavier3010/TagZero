import React from 'react';
import Slider from 'react-slick';
import './carousel.css'; // Custom styles

// Import the local images from the 'asserts' folder
import codeLogo from '../../asserts/images/code.png';
import healthLogo from '../../asserts/images/Digital marketing-corousel.png'; // Assuming another image
import eduLearnLogo from '../../asserts/images/code.png'; // Assuming another image
import finSecureLogo from '../../asserts/images/Digital marketing-corousel.png'; // Assuming another image
import fitLifeLogo from '../../asserts/images/code.png'; // Assuming another image

const Carousel = () => {
  const cardData = [
    {
      title: 'Revamping E-Commerce for TrendShop',
      challenge: 'Outdated platform struggling with high traffic and user experience.',
      solution: 'Develop a scalable, user-friendly e-commerce platform with modern payment integrations.',
      outcome: '500% increase in traffic, 30% lower cart abandonment, 25% higher conversions.',
      logo: codeLogo, // Use the imported image here
    },
    {
      title: 'Digital Marketing Success for HealthPlus',
      challenge: 'Low brand visibility in a competitive market.',
      solution: 'Implemented SEO, PPC campaigns, and content marketing.',
      outcome: '200% boost in organic traffic, 40% growth in lead generation.',
      logo: healthLogo, // Use the imported image here
    },
    {
      title: 'Scaling for EduLearn',
      challenge: 'Platform couldn’t handle growing user base.',
      solution: 'Implemented cloud solutions for scalability.',
      outcome: 'Supported a 300% growth in users with 99.9% uptime.',
      logo: eduLearnLogo, // Use the imported image here
    },
    {
      title: 'Enhancing Security for FinSecure',
      challenge: 'Frequent security breaches impacting customer trust.',
      solution: 'Introduced advanced security protocols and monitoring tools.',
      outcome: 'Zero breaches in the past 12 months.',
      logo: finSecureLogo, // Use the imported image here
    },
    {
      title: 'Improving Engagement for FitLife',
      challenge: 'Low user engagement on the mobile app.',
      solution: 'Introduced gamification and social sharing features.',
      outcome: 'User engagement increased by 60%.',
      logo: fitLifeLogo, // Use the imported image here
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000, // Very slow and constant speed for smooth scrolling
    slidesToShow: 5, // Default value for desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Seamless auto-scroll
    cssEase: 'linear', // Maintain linear scrolling effect
    pauseOnHover: false, // Prevent stopping on hover
    responsive: [
      {
        breakpoint: 1024, // For tablets and below
        settings: {
          slidesToShow: 3, // Show 3 cards for tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 2, // Show 2 cards on mobile
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For very small mobile screens
        settings: {
          slidesToShow: 1.2, // Show 1 card for small mobile devices
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="carousel-card">
            <div className="card-header">
              <img src={card.logo} alt="Logo" className="card-logo" />
              <div className="card-title">{card.title}</div>
            </div>
            <div className="card-content">
              <p><strong>Challenge:</strong> {card.challenge}</p>
              <p><strong>Solution:</strong> {card.solution}</p>
              <p><strong>Outcome:</strong> {card.outcome}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
