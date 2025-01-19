import React from 'react';
import './AnnouncementSlide.css';

const AnnouncementSlide = () => {
  const handleBack = () => {
    alert('You chose to go back!');
  };

  const handleApply = () => {
    alert('You want to apply for this cource!');
  };

  return (
    <div className="announcement-container">
      <h1 className="main-heading">CICO needs people in Java for one week!</h1>
      <div className="info-container">
        {/* About Section */}
        <div className="info-group">
          <h2>About</h2>
          <div className="info-item">
            <strong>Subject Area:</strong> IT
          </div>
          <div className="info-item">
            <strong>Location:</strong> Oslo, 0586
          </div>
        </div>

        {/* Information Section */}
        <div className="info-group">
          <h2>Information</h2>
          <div className="info-item">
            <strong>Remaining Tickets:</strong> 15
          </div>
          <div className="info-item">
            <strong>Cost:</strong> Free
          </div>
          <div className="info-item">
            <strong>Duration:</strong> 1 week
          </div>
          <div className="info-item">
            <strong>Subject Area:</strong> Java Development
          </div>
          <div className="info-item">
            <strong>Description:</strong> Join us for a week-long Java coding workshop to boost your skills and network with peers!
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="button-container">
        <button onClick={handleBack} className="button back-button">
          Back
        </button>
        <button onClick={handleApply} className="button apply-button">
          Apply
        </button>
      </div>
    </div>
  );
};

export default AnnouncementSlide;
