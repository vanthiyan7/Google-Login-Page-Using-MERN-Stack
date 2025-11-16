import React from "react";
import logo from './img/logo.png';
import {Link} from 'react-router-dom';
import './create.css';

function Create() {
  
  return (
    <div className="create-container">
      <div className="create-card">
        <div className="create-left">
          <img src={logo} alt="Gmail logo" className="logo" />
          <div className="gmail-text">Gmail</div>
          <h2 className="create-title">Create a Google account</h2>
          <p className="subtitle">Enter your name</p>
        </div>

        <div className="create-right">
          <input type="text" placeholder="First name" className="input-box" />
          <input type="text" placeholder="Last name" className="input-box" />

          
            {/* <button className="next-btn1"><Link class="next-btn" to="/mail">Next</Link></button> */}
          <button class="next-button"><Link class="next-button" to="/mail">Next</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Create;