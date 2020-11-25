import React, { useState, useEffect } from "react";
import Home from "../pages/Home"
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import { Link } from "react-router-dom";





function Navbar(props) {

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/"> Isaac Arnold </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link className="navbar-brand" to="/"> About Me </Link>
                    <Link className="navbar-brand" to="/contact"> Contact </Link>
                    <Link className="navbar-brand" to="/portfolio"> Portfolio </Link>
                    </div>
                </div>
            </nav>
            <br></br>

        </>
    )
}

export default Navbar;
