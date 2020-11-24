import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";




function Contact(props){

    return (
        <>
         <div className="container">
        <h1 className="contact-header">
            Contact
        </h1>
        <form>
            <div className="form-group">
              <label for="formGroupExampleInput">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Name"/>
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput2">Email</label>
              <input type="text" className="form-control" id="email" placeholder="Email"/>
              <label for="message">Message</label> 
                <textarea className="form-control" id="message-textbox" rows="3" placeholder="Message"></textarea>
            </div>
            <button type="button" className="btn btn-primary btn-lg">Submit</button>
          </form>   
    </div>  
        </>
    )
  
}

export default Contact;