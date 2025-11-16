import React,{useState} from "react";
import logo from './img/logo.png';
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import './signin.css';

function Signin() {
  const [email, setEmail] = useState(""); 
  const navigate = useNavigate();

  const handleNext = () => {
    if (email.includes("@")) {
      navigate("/password2", { state: { email } }); 
    } else {
      alert("Enter a valid email address");
    }
  };
    return (
        <div className="signin-container">
            <div className="signin-card">
                <div className="header">
                    <img src={logo} alt="gmail logo" />
                 <div class="mail-text">Gmail</div>
                </div>
                <h2 className="signin-title">Sign in</h2>
                <p className="subtext">to continue to Gmail</p>

                <input
                  type="email"
                  placeholder="Email or phone"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />


                <div className="forgot-link">Forgot email?</div>
                <br></br>
                <p className="description">
                    Not your computer? Use Guest mode to sign in privately.<br></br> 
                    <span className="learn-link"> Learn more</span>
                </p>
                <br></br>
                <div className="button-row">
                <button className="create-btn">
                <Link className="create-btn" to="/create">Create account</Link>
                </button>
                <button className="next-btn" onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default Signin;