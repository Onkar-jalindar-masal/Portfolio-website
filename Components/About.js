//About.js
import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <section id="about"
            className="container text-center">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="profile-image-container">

                        <h2 className="section-title">
                            <h2 className="section-title">
                                <FontAwesomeIcon icon={faUser} 
                                className="d-block mx-auto mb-2 text-primary" size="3x" />
                            </h2>
                        </h2>
                    </div>
                    <p className="section-description mt-4">
                        I have completed Diploma in Computer Science & Engineering at Shivaji Polytechnic College Sangola.
                        And also I'm pursuing a 4 year B.Tech Computer Science and Engineering Degree at Annasaheb Dange College Of Engineering And Technology Ashta. 🎓
                    </p>
                </div>
            </div>
        </section>
    );
};
export default About;