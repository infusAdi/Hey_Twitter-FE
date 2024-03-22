import AppleLogo from "/appleLogo.jpg";
import Logo from "/twitterLogo.jpg";
import "./Home.css";
import { Gogglesvg } from "../../data";
import { useNavigate } from "react-router-dom";
import { Button, Grid, styled } from "@mui/material";
import TwitterImage from "/twitter.jpg";

export const Home = () => {
    //styled componet
    const Image = styled("img")({
        width: "600px",
        height: "900px",
        objectFit: "cover",
    });
    const ButtonDiv = styled(Button)({
        textTransform: "none",
        border: "none",
        background: "none"

    });
    const Footer = [
        "About",
        "Help Center",
        "Terms of Service",
        "Privacy Policy",
        "Cookie Policy",
        "Ads info",
        "Blog",
        "Status",
        "Carrres",
        "Brand Resources",
        "Advertsing",
        "Marketing",
        "Twitter for Business",
        "Developers",
        "Directory",
        "Settings",
        "© 2021 Twitter, Inc.",
    ];
    const navigate = useNavigate();
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div>
                        <Image src={TwitterImage} alt="image" />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div style={{ marginTop: "100px" }}>
                        <div>
                            <img className="logo-image" src={Logo} alt="twitter logo" />
                            <p className="heading-element">Happening now</p>
                            <p className="subHeading">Join Twitter today</p>
                        </div>
                        <div className="button-parent">
                            <button
                                className="button"
                                onClick={() => navigate("/googleLogin")}
                            >
                                {Gogglesvg} Sign up with Google
                            </button>
                            <button
                                className="button"
                                onClick={() => navigate("/appleLogin")}
                            >
                                <img src={AppleLogo} alt="apple logo" />
                                Sign up with Apple
                            </button>
                            <button className="button" onClick={() => navigate("/signup")}>
                                Sign up with phone or email
                            </button>
                        </div>
                        <p className="Condition-Element">
                            By singing up you agree to the <span>Terms of Service </span>and
                            <span>Privacy Policy</span>, including <span>Cookie Use</span>.
                        </p>
                        <p>
                            Already have an account?
                            <ButtonDiv onClick={() => navigate("/login")}>Log in</ButtonDiv>
                            
                        </p>
                    </div>
                </Grid>
            </Grid>
            <div className="footer">
                {Footer.map((item, index) => (
                    <div key={index}>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
