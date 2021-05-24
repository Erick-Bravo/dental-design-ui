import React from "react";

import "./index.css"

const NavBar = () => {


    return (

        <nav className="nav-bar">

            <section className="left">
                <img src="https://beam.dental/assets/71e9428553ee396edc7b33877ee6c5f4.svg" alt="Beam-Dental-logo" />
            </section>

            <section className="right">


                <div classNamw="dropdown">
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