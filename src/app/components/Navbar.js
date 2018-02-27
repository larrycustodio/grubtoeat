import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = props => (
    <nav className="transparent" role="navigation">
        <div className="nav-wrapper">
            <a id="logo-container" href="#" className="brand-logo">Grub2Eat</a>
            <ul className="right hide-on-med-and-down">
                <li>
                    <a href="#">Register</a>
                </li>
                <li>
                    <a href="#">
                        My Cart
                </a>
                </li>
                <li>
                </li>
            </ul>

            <ul id="nav-mobile" className="side-nav">
                <li>
                    <a href="#">Navbar Link</a>
                </li>
            </ul>
            <a href="#" data-activates="nav-mobile" className="button-collapse">
                <i className="material-icons">menu</i>
            </a>
        </div>
    </nav>
)

export default Navbar