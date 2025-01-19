import React, { useState } from "react";
import './CardForm.css';
 
function CardForm() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
  };
 
  return (
    <div className="card-form-container">
      <div className="card-form-box">
        <h2 className="card-form-header">Make the Payment on Your Booking</h2>
        <form onSubmit={handleSubmit} className="card-form">
          <div className="form-group">
            <label className="form-label">Card Number:</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              maxLength="16"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Expiry Date:</label>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">CVV:</label>
            <input
              type="password"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="123"
              maxLength="3"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Name on Card:</label>
            <input
              type="text"
              name="nameOnCard"
              value={formData.nameOnCard}
              onChange={handleChange}
              placeholder="Ola normann"
              className="form-input"
            />
          </div>
          <button type="submit" className="form-submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
 
export default CardForm;