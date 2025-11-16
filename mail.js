import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from './img/logo.png';
import './mail.css';

function Mail() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (email.includes("@") && email.length > 5) {
      navigate("/password", { state: { email } }); 
    } else {
      alert("Enter valid email");
    }
  };

  return (
    <div className="mail-container">
      <div className="mail-card">
        <div className="mail-left">
          <img src={logo} alt="Gmail logo" className="logo" />
          <div className="gmail-text">Gmail</div>
          <h2 className="mail-title">How You'll Sign in</h2>
          <p className="mail-subtitle">Create a Gmail address for signing in to your Google Account</p>
        </div>

        <div className="mail-right">
          <div className="email-row">
            <input 
              type="text" 
              placeholder="@gmail.com" 
              className="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <p className="info-text">You can use letters, numbers & periods</p>

          <div className="button-row">
            <button className="next-btn" onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mail;