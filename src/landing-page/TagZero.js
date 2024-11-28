import React from 'react';
import Nav from '../components/nav/nav';
import StartJourney from '../components/start-journey/startjourney';
import OurServices from '../components/our-services/ourservices';
import Services from '../components/our-services/services';
import Who from '../components/who-we-are/who';
import Stats from '../components/who-we-are/stats';
import Work from '../components/how-we-work/work';
import Structure from '../components/how-we-work/structure';
import Case from '../components/case-study/caseStudy';
import Carousel from '../components/case-study/carousel';
import Footer from '../components/Footer/footer';

const TagZero = () => {
  return (
    <div className="tagzero-container">
      <Nav />
      <section id="home"><StartJourney /></section>
      <section id="services"><OurServices /><Services /></section>
      <section id="about-us" className="about-us-section">
      {/* <div className="stats-overlay">
        <Stats />
      </div> */}
      <Who />
      </section>
      <section id="how-we-work"><Work /><Structure /></section>
      <section id="case-study"><Case /><Carousel /></section>
      <Footer />
    </div>
  );
};

export default TagZero;
