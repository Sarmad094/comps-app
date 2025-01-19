import React, { useState } from "react";
import "./CourseFilter.css";
 
const CourseFilter = () => {
  const courses = [
    { name: "Web Development with React", type: "Technology", location: "Oslo", level: "Advanced" },
    { name: "Introduction to Python", type: "Technology", location: "Bergen", level: "Beginner" },
    { name: "Databases with PostgreSQL", type: "Technology", location: "Oslo", level: "Intermediate" },
    { name: "Philosophy", type: "Social science", location: "Stavanger", level: "Beginner" },
    { name: "AI Introduction for Beginners", type: "Technology", location: "Bergen", level: "Beginner" },
  ];
 
  const [filters, setFilters] = useState({
    type: "",
    location: "",
    level: "",
  });
 
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
 
  const filteredCourses = courses.filter((course) => {
    return (
      (!filters.type || course.type === filters.type) &&
      (!filters.location || course.location === filters.location) &&
      (!filters.level || course.level === filters.level)
    );
  });
 
  return (
    <div className="course-filter">
      <h1>Find Courses</h1>
 
      <div className="filters">
        <select name="type" value={filters.type} onChange={handleFilterChange}>
          <option value="">Select Type</option>
          <option value="Technology">Technology</option>
          <option value="Social science">Social Science</option>
        </select>
 
        <select name="location" value={filters.location} onChange={handleFilterChange}>
          <option value="">Select Location</option>
          <option value="Oslo">Oslo</option>
          <option value="Bergen">Bergen</option>
          <option value="Stavanger">Stavanger</option>
        </select>
 
        <select name="level" value={filters.level} onChange={handleFilterChange}>
          <option value="">Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
 
      <ul className="course-list">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <li key={index} className="course-item">
              {course.name} - {course.location} ({course.level})
            </li>
          ))
        ) : (
          <li className="no-results">No courses available.</li>
        )}
      </ul>
    </div>
  );
};
 
export default CourseFilter;