import React, { useState } from "react";
import logo from './img/logo.png';
import axios from 'axios'; 
import { useLocation, useNavigate } from 'react-router-dom';
import './passcreate.css';

function Password() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleSubmit = async () => { 
    if (password === confirm && password !== "") {
      try {
        console.log("Sending to backend:", { email, password });
        const res = await axios.post("http://localhost:5000/password", {email,password });
        alert("User registered successfully");
        navigate("/"); 
      } catch (err) {
        alert("Error while saving to database");
        console.error(err);
      }
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="password-container">
      <div className="password-card">
        <div className="password-left">
          <img src={logo} alt="Gmail logo" className="logo" />
          <div className="gmail-text">Gmail</div>
          <h2 className="password-title">Create a strong password</h2>
          <p className="password-subtitle">
            Create a strong password with a mix of letters, numbers and symbols
          </p>
        </div>

        <div className="password-right">
          <input
            type="password"
            placeholder="Enter password"
            className="password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="password-input"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          <div className="button-row">
            <button className="next-btn" onClick={handleSubmit}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;