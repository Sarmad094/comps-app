import React from "react";

const PublisherForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    alert("Form data: " + JSON.stringify(data));
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
      <div className="main-content">
        <form onSubmit={handleSubmit}>
          <h2>Organization: Fill in the information below</h2>
          <div className="form-container">
            {/* Venstre del */}
            <div className="left-section">
              <div>
                <label>Name:</label>
                <input type="text" name="name" required />
              </div>
              <div>
                <label>Organisation ID/Number:</label>
                <input type="text" name="orgId" required />
              </div>
              <div>
                <label>Organization Name:</label>
                <input type="text" name="orgName" required />
              </div>
              <div>
                <label>Subject area:</label>
                <select name="subject">
                  <option value="drama">Drama, theater and music</option>
                  <option value="sports">Sports and physical activity</option>
                  <option value="crafts">Maths, science and technology</option>
                  <option value="science">IT and informatics</option>
                  <option value="languages">Languages, religion and teology</option>
                  <option value="environment">Health and medicine</option>
                  <option value="technology">Law and political science</option>
                  <option value="other">Economy, administration and management</option>
                </select>
              </div>
              <div>
                <label>Email address:</label>
                <input type="email" name="email" required />
              </div>
            </div>

            {/* Høyre del */}
            <div className="right-section">
              <div>
                <label>Description:</label>
                <textarea name="description" required></textarea>
              </div>
              <div>
                <label>Number of participants:</label>
                <input type="number" name="participants" required />
              </div>
              <div>
                <label>Cost:</label>
                <input type="text" name="cost" required />
              </div>
              <div>
                <label>Type of arrangement:</label>
                <select name="type">
                  <option value="event">Event</option>
                  <option value="course">Course</option>
                </select>
              </div>
              <div>
                <label>Duration:</label>
                <select name="duration">
                  <option value="30min">30 minutes</option>
                  <option value="1hr">1 hour</option>
                  <option value="2hr">2 hours</option>
                  <option value="1 day">1 day</option>
                  <option value="1 w">1 week or less</option>
                  <option value="1 month">Month or less</option>
                </select>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PublisherForm;
