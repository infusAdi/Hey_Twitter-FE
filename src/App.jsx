import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./component/Home/Home";

import { Login } from "./component/Login/Login";
import { AppleLogin } from "./component/SignUpAccount/Apple/Apple";
import { GoogleLogin } from "./component/SignUpAccount/Google/Google";
import { SignUp } from "./component/SignUp/SignUp";
import { GoogleLoginPassword } from "./component/SignUpAccount/Google/GooglePassword";
import { useState } from "react";
import { Twitter } from "./Twitter Page";




function App() {
  const [googleemail, setGoogleEmail] = useState("");
  return (
    <>
      <Routes>
        <Route path="/twitter" element={<Twitter />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appleLogin" element={<AppleLogin />} />
        <Route path="/googleLogin" element={<GoogleLogin googleemail={googleemail} setGoogleEmail={setGoogleEmail} />} />
        <Route path="/googleLoginPassword" element={<GoogleLoginPassword googleemail={googleemail} setGoogleEmail={setGoogleEmail} />} />
      </Routes>
    </>
  );
}

export default App;
