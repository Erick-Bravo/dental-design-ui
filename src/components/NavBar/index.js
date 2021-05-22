import React from "react";

import "./index.css"

const NavBar = () => {


    return (

        <nav className="nav-bar">

            <section className="left">
                <img src="https://beam.dental/assets/71e9428553ee396edc7b33877ee6c5f4.svg" alt="Beam-Dental-logo" />
            </section>

            <section className="right">
                <div class="dropdown">
                    <button class="dropbtn">Explore
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Thing 1</a>
                        <a href="#">Thing 2</a>
                        <a href="#">Thing 3</a>
                    </div>
                </div>

                <div class="dropdown">
                    <button class="dropbtn">Company
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Thing 1</a>
                        <a href="#">Thing 2</a>
                        <a href="#">Thing 3</a>
                    </div>
                </div>

                <div class="dropdown">
                    <button class="dropbtn">Resources
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
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