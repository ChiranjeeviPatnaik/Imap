import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './LoginForm.css';
import { MdEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (email != "" && password != "") {
            setError("");
            if (rememberMe) {
                localStorage.setItem("rememberedEmail", email);
            } else {
                localStorage.removeItem("rememberedEmail");
            }
            navigate("/users");
        } else {
            setError("Invalid email or password. Please try again.");
        }
    };

    return (
        <div className='logIn_popUp'>
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                {error && (
                    <div className="alert alert-danger py-2" role="alert">
                        {error}
                    </div>
                )}
                <div className='input-box'>
                    <input type='email' placeholder='Email Id' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <MdEmail className='icon' />
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <TbLockPassword className='icon' />
                </div>
                <div className="remember-forgot">
                    <label><input type='checkbox' checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />Remember me</label>
                    <a href="#" onClick={() => navigate("/forgotPassword")}>Forgot Password?</a>
                </div>
                <button type='submit'>Login</button>
                <div className="regester-link">
                    <p>Don't have an account? <a href="#" onClick={() => navigate("/signup")} >Register</a></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
