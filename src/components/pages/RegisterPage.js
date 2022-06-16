import React from "react";
import { Link } from "react-router-dom";

import "./IntroPages.module.css";

export default function SignUpPage() {
  return (
    <div className="text-center m-5-auto">
      <header className="header" />
      <h2>Join us</h2>
      <h5>Create your personal account</h5>
      <form action="/home">
        <p>
          <label>Username</label>
          <br />
          <input type="text" name="first_name" required />
        </p>
        <p>
          <label>Email address</label>
          <br />
          <input type="email" name="email" required />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input type="password" name="password" requiredc />
        </p>
        <p>
          <input type="checkbox" name="checkbox" id="checkbox" required />{" "}
          <span className="termsText">
            I agree all statements in{" "}
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              terms of service
            </a>
          </span>
          .
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Register
          </button>
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </form>
    </div>
  );
}
