import { Button, Card, Paper, TextField } from "@mui/material";
import "./Apple.css";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const AppleLogin = () => {
    //usestate
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    //handle function
    const handleClick = () => {
        if (email.length > 0) {
            setShow(true);
        }
    };
    const HandleKey = () => {
        if (email.length == 0) {
            setShow(false);
        }
    };

    const handleSubmit = () => {
        if (!email || !password) {
            alert("Email and password is Required");
        } else {
            alert("Login successfully");
            navigate("/twitter");
        }
    }
    return (
        <div className="apple-con">
            <Paper elevation={10} sx={{ borderRadius: "30px" }}>
                <Card className="apple-card" sx={{ borderRadius: "30px" }}>
                    <div>
                        <img
                            className="apple-logo"
                            src="https://www.icloud.com/system/icloud.com/2410Project42/en-us/4f72d89d71e9abcc4e37c71fb77fe65b.svg"
                            alt="apple logo"
                        />
                    </div>
                    <div>
                        <p className="heading">Sign in with Apple ID</p>
                        <div className="input-div">
                            <TextField
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyUp={HandleKey}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "10px 10px 0px 0px ",
                                    },
                                    width: "500px",
                                    position: "relative",
                                }}
                                placeholder="Email or Phone Number"
                                InputProps={{
                                    endAdornment: (
                                        <>
                                            {!show && (
                                                <Button onClick={handleClick}>
                                                    <ArrowCircleRightOutlinedIcon
                                                        fontSize="large"
                                                        sx={{ color: "#9e9e9e" }}
                                                    />
                                                </Button>
                                            )}

                                        </>

                                    ),
                                }}
                            />
                            {show && (
                                <TextField
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "0px 0px 10px 10px ",
                                        },
                                        width: "500px",
                                        position: "relative",
                                    }}
                                    placeholder="Password"
                                    InputProps={{
                                        endAdornment: (
                                            <ArrowCircleRightOutlinedIcon
                                                fontSize="large"
                                                sx={{ color: "#9e9e9e" }}
                                            />
                                        ),
                                    }}
                                />
                            )}
                        </div>
                        <div className="check-box">
                            <input type="checkbox" />
                            <p>Keep me signed in</p>
                            <Button type="submit" onClick={handleSubmit}>Login</Button>
                        </div>
                        <div className=" button-apple">
                            <p>Forgot password?</p>
                            <p>Create Apple ID</p>
                        </div>
                    </div>
                </Card>
            </Paper>
        </div>
    );
};
