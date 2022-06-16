import React from "react";
import { Link } from "react-router-dom";

import "./IntroPages.module.css";

export default function ForgetPasswordPage() {
  return (
    <div className="text-center m-5-auto">
      <header className="header" />
      <h2>Reset your password</h2>
      <h5>Enter your email address and we will send you a new password</h5>
      <form action="/login">
        <p>
          <label id="reset_pass_lbl">Email address</label>
          <br />
          <input type="email" name="email" required />
        </p>
        <p>
          <button className="primary-button" id="reg_btn" type="submit">
            Send email
          </button>
        </p>
      </form>
      <footer>
        <p>
          First time? <Link to="/register">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
