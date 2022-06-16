import React from 'react'
import { Link } from 'react-router-dom'

import './IntroPages.module.css'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <header className="header" />
            <h2 className='h2Login'>Sign in</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forgot password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button className='primary-button' id="reg_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
