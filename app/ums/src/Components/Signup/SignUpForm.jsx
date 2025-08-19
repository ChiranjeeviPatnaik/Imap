import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './SignUpForm.css';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup:", { firstName, lastName, role, email, phoneNumber, password });
    alert("Account created! Please log in.");
    navigate("/");
  };

  return (
    <div className='signUp_popUp'>
      <form onSubmit={handleSignup}>
        <h1>Sign Up</h1>
        <div className='input-box'>
          <input type='text' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className='input-box'>
          <input type='text' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className='input-box'>
          <input type='email' placeholder='Email Id' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='input-box'>
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="" disabled>Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Guest">Guest</option>
          </select>
        </div>
        <div className='input-box'>
          <input type='text' placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type='submit'>Sign Up</button>
        <div className="register-link">
          <p>Already have an account? <a href="#" onClick={() => navigate("/login")} >Login</a></p>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
