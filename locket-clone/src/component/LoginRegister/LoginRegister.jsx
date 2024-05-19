import React from "react";
import './LoginRegister.css';

const LoginRegister = () => {
    return (
        <div className="full-height">
            <div className="container">
                <div className="login">
                    <div className="header">
                        <div className="header-text">Sign Up</div>
                    </div>      
                    <div className="inputs">
                        <img src="" alt="" />
                        <input type="username" />
                    </div>  
                    <div className="inputs">
                        <img src="" alt="" />
                        <input type="password" />
                    </div>                     
                </div>
                <div className="forgot-password">Lost password?</div>
                <div className="submit-container">
                    <div className="submit">Sign Up</div>
                    <div className="submit">Login</div>
                </div>
            </div>
        </div>
    );
}

export default LoginRegister;
