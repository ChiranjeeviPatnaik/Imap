import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './ForgotPassword.css';
import { IoIosClose } from "react-icons/io";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <div className='forgotPassword_popUp'>
            <button className='closeButton' onClick={() => navigate("/login")}><IoIosClose /></button>
            <form>
                <h1>Forgot Password</h1>
                <div className='input-box'>
                    <input type='email' placeholder='Email Id' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='input-box'>
                    <input type='text' placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
                <button type='submit' className='saveButton'>save</button>
            </form>
        </div>
    )
}

export default ForgotPassword
