import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";




function Contact(props){

    return (
        <>
         <div className="container">
        <h1 className="contact-header">
            Contact
        </h1>
       <ul>
         <li>Email: isaac@iaivphotography.com</li>
         <li>LinkedIn:
           <a href= "https://www.linkedin.com/in/isaac-arnold-iv-6b019b157/" target= "_blank"> Isaac Arnold IV</a>
           </li>
           <li>GitHub:
           <a href= "https://github.com/ikethe4" target= "_blank"> ikethe4</a>
         </li>
       </ul>
    
    </div>  
        </>
    )
  
}

export default Contact;