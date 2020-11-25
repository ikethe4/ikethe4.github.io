import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Earbud from "../photos/earbud.png";
import Password from "../photos/password.png";
import Photophriend from "../photos/photophriend.png";
import Schedule from "../photos/schedule.png";
import Webpage from "../photos/webpage.png"
import Project from "../components/project";
import Budget from "../photos/budget.png";








function Portfolio(props){

    return (
        <>
        <div className="container">
    <h1 className="contact-header">
        Portfolio</h1>
    </div>
    <div className="row">
        <Project source= {Schedule} alt= "schedule" href= "https://ikethe4.github.io/day-planner" linkText= "Work Day Schedule Planner"/>
        <Project source= {Password} alt= "password" href= "https://ikethe4.github.io/password-generator/" linkText= "Password Generator"/>
        <Project source= {Photophriend} alt= "photophriend" href= "https://ikethe4.github.io/photophriend/" linkText= "PhotoPhriend"/>
        <Project source= {Webpage} alt= "team-profile" href= "https://github.com/ikethe4/team-profile-generator/" linkText= "Team Profile Generator"/>
        <Project source= {Earbud} alt= "earbud" href= "https://earbudteam8.herokuapp.com/" linkText= "Earbud"/>
        <Project source= {Budget} alt= "budget" href= "https://guarded-forest-47798.herokuapp.com/" linkText= "Budget Buddy"/>
    </div>
      </>
    )
}

export default Portfolio;