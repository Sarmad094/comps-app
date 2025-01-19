import React, { useState } from "react";
import "./CourseDetail.css";
 
const CourseDetail = ({ course }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [remaining, setRemaining] = useState(15); // Initialt 15 plasser igjen
 
  const handleFavorite = () => {
    setIsFavorited((prev) => !prev);
  };
 
  const handleBooking = () => {
    if (remaining > 0) {
      setIsBooked(true);
      setRemaining(remaining - 1); // Reduserer antall plasser
    }
  };
 
  return (
    <div className="course-detail">
      <p>Course Name: Databases with PostgreSQL</p>
      <p>Type: {course.type}</p>
      <p>Location: {course.location}</p>
      <p>Level: {course.level}</p>
      <p>Remaining: {remaining}</p> {/* Vist antall gjenværende plasser */}
 
      <div className="favorite-section">
        <button
          className={`favorite-button ${isFavorited ? "favorited" : ""}`}
          onClick={handleFavorite}
        >
          ♥
        </button>
        {isFavorited && <p className="favorite-message">The course has been added to favorites</p>}
      </div>
 
      <div className="booking-section">
        <button
          className={`book-button ${isBooked ? "booked" : ""}`}
          onClick={handleBooking}
          disabled={isBooked || remaining === 0} // Deaktiver knappen hvis kurs allerede er booket eller ingen plasser er tilgjengelige
        >
          {isBooked ? "Successfully booked" : "Book now"}
        </button>
        {isBooked && <p className="booking-message">Successfully booked!</p>}
      </div>
    </div>
  );
};
 
export default CourseDetail;