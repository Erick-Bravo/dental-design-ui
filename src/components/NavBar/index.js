import React from "react";
import { NavLink } from "react-router-dom";

import "./index.css"

const NavBar = () => {


    return (

        <nav className="nav-bar">

            <section className="nav-left">
                <NavLink to="*">
                    <img src="https://beam.dental/assets/71e9428553ee396edc7b33877ee6c5f4.svg" alt="Beam-Dental-logo" />
                </NavLink>
            </section>

            <section className="nav-right">
        
                <img className="beam-hamburger" src="https://beam.dental/assets/8eb71cc2430c40e1ebcce7a014604816.svg" alt="beam-hamburger" />
               

                <div className="dropdown">
                    <button className="dropbtn">Explore
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Thing 1</a>
                        <a href="#">Thing 2</a>
                        <a href="#">Thing 3</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">Company
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Thing 1</a>
                        <a href="#">Thing 2</a>
                        <a href="#">Thing 3</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">Resources
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Thing 1</a>
                        <a href="#">Thing 2</a>
                        <a href="#">Thing 3</a>
                    </div>
                </div>

                <button className="button-1">Find a dentist</button>
                <button className="button-2">Login</button>
            </section>

        </nav>
    );
};

export default NavBar