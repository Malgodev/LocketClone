import React from "react";
import './LoginRegister.css';

const LoginRegister = () => {
    return (
        <div className="full-height">
            <div className="container">
                <div className="login">
                    <div className="Icon">
                        {/* <div className="header-text">Sign Up</div> */}
                    </div>      
                    <div className="input">
                        <img src="./Icon/User_alt.svg" alt="" className="icon"/>
                        <input type="username" placeholder="Username"/>
                    </div>  
                    <div className="input">
                        <img src="./Icon/Password.svg" alt="" className="icon"/>
                        <input type="password" placeholder="Password"/>
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
