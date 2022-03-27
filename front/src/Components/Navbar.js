import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

export const Navbar = () => {
    return (
        <header className="header">
            <nav className="nav">
                <Link
                    className="logo nav-link"
                    to="/"
                >
                    <img src="https://www.ecomsur.com/wp-content/uploads/2020/01/ecomsur-logo.png" alt="Logo" />

                </Link>
            </nav>
        </header>
    )
}