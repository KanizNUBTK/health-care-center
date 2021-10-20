import React from 'react';
import './AboutUs.css';
import hospital from "../../image/hospital.jpg";

const AboutUs = () => {
    return (
        <div className="body">
            <h2 className="aboutUs-text">About Us</h2>
            <div><img className="hospital-img" src={hospital} alt="" /></div>
            <div className="about-details">
                <h6>CHK Mission</h6>
                <p>The mission of the National Health Council is to provide a united voice for the 160 million people living with chronic diseases and disabilities and their family caregivers.</p>
                <h6>CHK Vision</h6>
                <p>We envision a society in which all people have access to quality, affordable health care that respects personal goals and aspirations to promote their best possible health outcomes.</p>
                <h6>CHK Values</h6>
                <p>Integrity, collaboration, and transparency guide all aspects of the National Health Council’s interactions among the diverse sectors of the health community. We are patient-focused and forward-thinking, ever mindful of our mission.</p>
                <h6>Who We Are</h6>
                <p>Created by and for patient organizations 100 years ago, the National Health Council (NHC) brings diverse organizations together to forge consensus and drive patient-centered health policy. We promote increased access to affordable, high-value, sustainable health care. Made up of more than 140 national health- related organizations and businesses, the NHC’s core membership includes the nation’s leading patient organizations. Other members include health-related associations and nonprofit organizations including the provider, research, and family caregiver communities; and businesses representing biopharmaceutical, device, diagnostic, generic drug, and payer organizations.</p>
                <h6>CHK Partnership Policy</h6>
                <p>The NHC welcomes partnership proposals that address broad health ecosystem issues and elevate the patient voice. We encourage potential collaborators to contact us as early as possible to explore potential partnerships. This helps us engage as true partners to co-develop project objectives and deliverables.</p>
                
            </div>
        </div>
    );
};

export default AboutUs;