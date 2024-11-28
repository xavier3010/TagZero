import React, { useState } from 'react';
import './startjourney.css';
import ContactUsModal from '../../contact-us/ContactUsModal'; 

const StartJourney = () => {
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    // Toggle modal visibility
    const handleModalToggle = (status) => {
        setShowModal(status);
    };

    return (
        <div className="start-journey-container">
            <div className="background-gradient" />
            <div className="journey-content">
                <div className="tagline-container">
                    <p className="tagline">Custom web solutions that elevate your brand</p>
                </div>
                <div className="main-text-container">
                    <div className="main-text">Transform Your</div>
                    <div className="main-text">Data into Insights.</div>
                </div>
                <div className="subtext-container">
                    <p className="subtext">
                        Empowering your business with tailored analytics solutions to drive smarter decisions and sustainable success.
                    </p>
                </div>
                <div className="journey-button" onClick={() => handleModalToggle(true)}>
                    <span className="journey-button-text">start your journey</span>
                </div>
            </div>

            {/* ContactUsModal, passing showModal and handleModalToggle as props */}
            <ContactUsModal showModal={showModal} updateModal={handleModalToggle} />
        </div>
    );
};

export default StartJourney;
