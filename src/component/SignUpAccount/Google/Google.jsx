import { Button, Card, Grid, TextField, styled } from "@mui/material";
import { Googlesvg } from "../../../data";
import "./Google.css";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const GoogleLogin = ({ googleemail, setGoogleEmail }) => {
    //usestate
    const navigate = useNavigate();

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

    //onclick function

    const handleClick = () => {
        if (!googleemail) {
            alert("Email is Required");
        } else {
            alert("Login successfully");
            navigate("/googleLoginPassword", { state: { email: googleemail } });
        }
    };
    return (
        <div className="div-Google">
            <Card className="div-container">
                <Grid container spacing={3}>
                    <Grid item md={6}>
                        {Googlesvg}
                        <p className="signin-google">Sign in </p>
                        <p className="signin-second-google">to continue to Gmail</p>
                    </Grid>
                    <Grid item md={6}>
                        <TextField
                            label="Email or phone"
                            variant="outlined"
                            className="Google-textfield"
                            value={googleemail}
                            onChange={(e) => setGoogleEmail(e.target.value)}
                        />

                        <p className="forgot-google">Forgot Email</p>
                        <div className="div-element">
                            <p>
                                Not your computer? Use Guest mode to sign in privately.{" "}
                                <span>Learn more about using Guest mode</span>
                            </p>
                        </div>
                        <ButtonDiv>
                            <CreateButton>Create Account </CreateButton>
                            <NextButton variant="contained" onClick={handleClick}>
                                Next
                            </NextButton>
                        </ButtonDiv>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
};
