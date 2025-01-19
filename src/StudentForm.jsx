import React from 'react';

const StudentForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log('Form data:', data);
    alert('Form data:' + JSON.stringify( data));
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input small"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input small"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          className="form-input small"
          min="0"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          name="country"
          className="form-input small"
          required
        >
          <option value="">Select</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="uk">UK</option>
          <option value="australia">Australia</option>
          <option value="norway">Norway</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="university">University:</label>
        <input
          type="text"
          id="university"
          name="university"
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="studyProgram">Study Program:</label>
        <input
          type="text"
          id="studyProgram"
          name="studyProgram"
          className="form-input"
          required
        />
      </div>
      <button type="submit" className="form-button">Next</button>
    </form>
  );
};

export default StudentForm;
