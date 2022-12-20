import React from "react";
import { Link } from "react-router-dom";
import SocialBox from "../../components/SocailBox/SocialBox";
import TextWithLine from "../../components/TextWithLine/TextWithLine";
import "./SignInPage.css";
export default function SignInPage() {
  return (
    <>
      <div className="signin_container">
        <div className="signin_box">
          <h1>Sign In</h1>
          <br />
          <div className="signbox">
            <h4>
              New user? <a href="/">Create Account</a>
            </h4>
            <br />
            <input placeholder="Username or email" />
            <input placeholder="Password" type="password"/>
            <div className="checkbox_container">
              <input type="checkbox" className="checkbox" />
              Keep me signed in
            </div>
            <br />
            <Link to='/home'><button className="button1">Sign In</button></Link>
            <br />
            <br />
            <TextWithLine>Or Sign in with</TextWithLine>
            <br />
            <SocialBox />
          </div>
        </div>
        <div className="signin_art">
        <img src="./illustration.svg" alt="" />
        </div>
      </div>
    </>
  );
}
