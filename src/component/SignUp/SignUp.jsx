import { Button, MenuItem, TextField } from "@mui/material";
import Logo from "/twitterLogo.jpg";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import "./SignUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const SignUp = () => {
    //usestate
    const [Name, setName] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Month, setMonth] = useState("");

    const navigate = useNavigate();
    //data
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    //handle function
    const handleClick = () => {
        if (!Name || !PhoneNumber || !Month) {
            alert("Input is Required");
        } else {
            alert(" Login successfully");
            navigate("/twitter");
        }
    };
    return (
        <div className="card-signup">
            <img src={Logo} alt="Logo" className="logo-twitter" />
            <p className="pelemet-signup">Create an account</p>
            <div className="signup-input">
                <TextField
                    type="text"
                    placeholder="Name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    type="number"
                    placeholder="PhoneNumber"
                    value={PhoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            <p className="sigup-pElement">Use Email</p>
            <p className="sigup-DateElement">Date Of Birth</p>
            <p className="sigup-DesElement">
                Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
                Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
                nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra
                dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
            </p>
            <div className="date-input">
                <TextField
                    select
                    placeholder="Month"
                    defaultValue=""
                    variant="outlined"
                    label="Month"
                    value={Month}
                    onChange={(e) => setMonth(e.target.value)}
                    sx={{ width: "240px" }}
                >
                    {month.map((item, index) => (
                        <MenuItem key={index} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </TextField>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                        <DatePicker label={"Day"} views={["day"]} sx={{ width: "159px" }} />
                    </DemoContainer>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                        <DatePicker
                            label={"Year"}
                            views={["year"]}
                            sx={{ width: "159px" }}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </div>

            <Button
                className="signup-button"
                type="submit"
                variant="contained"
                sx={{ borderRadius: "76px", textTransform: "none" }}
                onClick={handleClick}
            >
                Next
            </Button>
        </div>
    );
};
