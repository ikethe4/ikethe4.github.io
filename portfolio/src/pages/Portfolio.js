import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Earbud from "../photos/earbud.png";
import Password from "../photos/password.png";
import Photophriend from "../photos/photophriend.png";
import Schedule from "../photos/schedule.png";
import Webpage from "../photos/webpage.png"







function Portfolio(props){

    return (
        <>
        <div className="container">
    <h1 className="contact-header">
        Portfolio</h1>
    </div>
    <div className="row">
        <figure className="col-md-4">
            <img src={Schedule} className="img-thumbnail" alt="schedule"/>
            <a href="https://ikethe4.github.io/day-planner/" className="link-text">Work Day Schedule Planner</a>
        </figure>
        <figure className="col-md-4">
            <img src={Password} className="img-thumbnail" alt="password"/>
            <a href="https://ikethe4.github.io/password-generator/" className="link-text">Password Generator</a>
        </figure>
        <figure className="col-md-4">   
            <img src={Photophriend} className="img-thumbnail" alt="photophriend"/>
            <a href="https://ikethe4.github.io/photophriend/" className="link-text">PhotoPhriend</a>
        </figure>
        <figure className="col-md-4">   
            <img src={Webpage} className="img-thumbnail" alt="team-profile"/>
            <a href="https://github.com/ikethe4/team-profile-generator" className="link-text">Team Profile Generator</a>
        </figure>
        <figure className="col-md-4">   
            <img src={Earbud} className="img-thumbnail" alt="earbud"/>
            <a href="https://earbudteam8.herokuapp.com/" className="link-text">EarBud</a>
        </figure>
    </div>
      </>
    )
}

export default Portfolio;