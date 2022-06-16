import React from 'react'
import { Link } from 'react-router-dom'

import './IntroPages.module.css'

export default function LandingPage() {
    return (
        <header>
            <header className="header" />
            <h1 className="main-title text-center">NGMeals</h1>
            <p className="main-para text-center">Order from us and don't waste time</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button" id="reg_btn"><span>Login </span></button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>Register </span></button>
                </Link>
            </div>
        </header>
    )
}