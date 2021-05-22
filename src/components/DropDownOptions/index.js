import React from "react";

import ".index.css"

const DropDownOptions = () => {


    return (

        <nav className="nav-bar">
            <section className="left">
                <img src="https://beam.dental/assets/71e9428553ee396edc7b33877ee6c5f4.svg" alt="Beam-Dental-logo" />
            </section>

            <section className="right">

                <div class="dropdown">
                    <button class="dropbtn">Dropdown
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                
                <button>Find a dentist</button>
                <button>Login</button>
            </section>
        </nav>
    );
};

export default DropDownOptions