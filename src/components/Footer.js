import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import logo from "../logo.jpg";

export default class Navbar extends Component {
    render() {
        return (
            <footer className="navbar navbar-expand-sm navbar-dark bg-dark-transparent px-sm-5">
                <img src={logo} alt="store" className="navbar-brand rounded-circle"/>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5 text-light">
                    Hafseeman Project Copyright 2020
                </li>
        
            </ul>    
            <Link to="/cart" className="ml-auto">
                <button className="btn btn-outline-light">
                    <i className="fas fa-cart-plus"/>
                    My Cart
                </button>
            </Link>
        </footer>
        )
    }
}