import React, { useState, useEffect } from 'react';
import logo from '../../asserts/images/logo.svg';  // Fixed the typo "asserts" to "assets"
import ContactUsModal from '../../contact-us/ContactUsModal'; // Adjust path accordingly
import './nav.css';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showContactButton, setShowContactButton] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false); // Close the menu after clicking a section
    };

    const handleModalToggle = (show) => {
        setShowModal(show); // This toggles the modal visibility
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            setShowContactButton(scrollPosition > 100); // Button appears after scrolling 100px
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="nav-container">
                <div className="nav-header">
                    <div className="nav-logo">
                        <img src={logo} alt="Logo" className="nav-logo-img" />
                    </div>
                    <button className="nav-toggle-btn" onClick={toggleNav} aria-label="Toggle navigation">
                        <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
                    </button>
                </div>
                <div className={`nav-links-container ${isOpen ? 'open' : ''}`}>
                    <div className="nav-links">
                        <div className="nav-item" onClick={() => scrollToSection('home')}>
                            <span>Home</span>
                            <div className="nav-underline"></div>
                        </div>
                        <div className="nav-item" onClick={() => scrollToSection('services')}>
                            <span>Services</span>
                            <div className="nav-underline"></div>
                        </div>
                        <div className="nav-item" onClick={() => scrollToSection('about-us')}>
                            <span>About Us</span>
                            <div className="nav-underline"></div>
                        </div>
                        <div className="nav-item" onClick={() => scrollToSection('how-we-work')}>
                            <span>How We Work</span>
                            <div className="nav-underline"></div>
                        </div>
                        <div className="nav-item" onClick={() => scrollToSection('case-study')}>
                            <span>Case Study</span>
                            <div className="nav-underline"></div>
                        </div>
                    </div>
                </div>
                <div className={`nav-contact ${showContactButton ? 'visible' : ''}`}>
                    <button className="nav-contact-btn" onClick={() => handleModalToggle(true)}>Contact us</button>
                </div>
            </div>

            {/* Include the ContactUsModal and manage its visibility */}
            <ContactUsModal
                showModal={showModal} // Pass modal visibility state as a prop
                updateModal={handleModalToggle} // Pass the function to update modal visibility
            />
        </>
    );
};

export default Nav;
