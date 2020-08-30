import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import logo from "../logo.jpg";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark-transparent px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand rounded-circle"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Products</Link>
                    </li>
                </ul>    
                <Link to="/cart" className="ml-auto">
                    <button className="btn btn-outline-light">
                        <i className="fas fa-cart-plus"/>
                        My Cart
                    </button>
                </Link>
            </nav>
        )
    }
}