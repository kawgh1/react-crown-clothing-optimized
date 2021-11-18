import React from "react";

import "./signin-signup.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { SignInAndSignUpContainer } from "./signin-signup.styles";

const SigninSignupPage = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
);

export default SigninSignupPage;
