import React from 'react';
import './Confirmation.css'; // Optional, for styling

function Confirmation() {
    return (
        <div className="confirmation-container">
            <h1>Registration Successful!</h1>
            <p>Congratulations! You have successfully registered. You can now log in with your credentials.</p>
            <a href="/login" className="button">Go to Login</a>
        </div>
    );
}

export default Confirmation;
