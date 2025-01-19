import React, { useState } from "react";
import "./CourseSearch.css";
 
const CourseSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const courses = [
    "Web Development with React",
    "Introduction to Python",
    "Databases with PostgreSQL",
    "Philosophy",
    "AI Introduction for Beginners",
    "Economy and Administration"
  ];
 
  const filteredCourses = courses.filter(course =>
    course.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  return (
    <div className="course-search">
      <h1>Course Overview</h1>
      <input
        type="text"
        placeholder="Search for a course..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <ul className="course-list">
        {filteredCourses.map((course, index) => (
          <li key={index} className="course-item">{course}</li>
        ))}
      </ul>
    </div>
  );
};
 
export default CourseSearch;