import { Button, Card, Grid, TextField, styled } from "@mui/material";
import { Googlesvg } from "../../../data";
import "./Google.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export const GoogleLoginPassword = ({ googleemail }) => {
    //usestae
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [show, setshow] = useState(false)
    //styled componet
    const NextButton = styled(Button)({
        borderRadius: "50px",
        textTransform: "none",
    });
    const CreateButton = styled(Button)({
        textTransform: "none",
    });
    const ButtonDiv = styled("div")({
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: "10px",
    });

    //handle function
    const handleClick = () => {
        if (!password) {
            alert("paasord is Required");
        } else {
            alert(" Login Successfully");
            navigate("/twitter")
        }
    };
    return (
        <div className="div-Google">
            <Card className="div-container">
                <Grid container spacing={3}>
                    <Grid item md={6}>
                        {Googlesvg}
                        <p className="signin-google">Welcome </p>
                        <input type="text" value={googleemail} className="input-pass" />
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            label="Password"
                            type={show ? "text" : "password"}
                            variant="outlined"
                            className="Google-textfield"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="check-boc">
                            <input type="checkbox" onChange={() => setshow(!show)} />
                            <p className="forgot-google">ShowPassword</p>
                        </div>
                        <div className="div-element">
                            <p>
                                Not your computer? Use Guest mode to sign in privately.{" "}
                                <span>Learn more about using Guest mode</span>
                            </p>
                        </div>
                        <ButtonDiv>
                            <CreateButton>Forget Password </CreateButton>
                            <NextButton
                                variant="contained"
                                type="submit"
                                onClick={handleClick}
                            >
                                Next
                            </NextButton>
                        </ButtonDiv>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
};
