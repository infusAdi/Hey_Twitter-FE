import { TextField } from "@mui/material"
import Logo from "/twitterLogo.jpg";
import "./Login.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
    //usestate
    const [Email, setName] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate();
    //handle function 

    const handleClick = () => {
        if (!Email || !Password) {
            alert("Input is Required");
        } else {
            alert(" Login successfully");
            navigate("/twitter");
        }

    }
    return (
        <>
            <div className="login-container" >
                <img src={Logo} alt="Logo" />
                <p className="login-element">Log in to Twitter</p>
                <div className="input-div">
                    <TextField type="text" placeholder="Phone Number ,email Address" className="input" value={Email}
                        onChange={(e) => setName(e.target.value)} />
                    <TextField type="password" placeholder="Password" className="input" value={Password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button className="login-button" type="submit" onClick={handleClick}>Login</button>
                <div className="forget-signup-con">
                    <a className="forget-signup">Forgot password?</a>
                    <a href="/" className="forget-signup">Sign up to Twitter</a>
                </div>
            </div>
        </>
    )
}