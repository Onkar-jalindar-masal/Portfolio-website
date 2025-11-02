// Resume.js
import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import Breadcrumbs from './Breadcrumbs';
import Skills from './Skills';
import './style.css';

const Resume = () => {
  const [resumeFile, setResumeFile] = useState(null); // state to store uploaded file
  const fileInputRef = useRef(null); // ref to trigger file input

  const breadcrumbsPaths = [
    { title: 'Home', to: '/' },
    { title: 'Resume', to: '/resume' }
  ];

  // Handle file selection
  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setResumeFile(event.target.files[0]);
    }
  };

  // Trigger hidden file input
  const handleAddResumeClick = () => {
    fileInputRef.current.click();
  };

  return (
    <section id="resume" className="container text-center">
      {/* Breadcrumbs navigation */}
      <Breadcrumbs paths={breadcrumbsPaths} />

      <div className="row justify-content-center align-items-center">
        <div className="col-md-8">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faFileDownload} className="mr-2" />
            Resume
          </h2>

          <p className="section-description">
            Click "Add Resume" to Add Resume
          </p>

          {/* Hidden file input */}
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />

          {/* Add Resume button */}
          <button
            className="resume-add-btn"
            onClick={handleAddResumeClick}
            style={{ marginBottom: '15px' }}
          >
            Add Resume
          </button>

          <br />

          {/* Download button */}
          {resumeFile ? (
            <a
              href={URL.createObjectURL(resumeFile)}
              className="resume-download-btn"
              download={resumeFile.name}
            >
              Download Resume
            </a>
          ) : (
            <button className="resume-download-btn" disabled>
              Download Resume
            </button>
          )}

          {/* Skills component */}
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default Resume;
