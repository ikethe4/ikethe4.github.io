import React, {useState} from "react";

function Project(props) {
    const {source, alt, href, linkText} = props


    return (
        <>
            <figure className="col-md-4">
                <img src= {source} className="img-thumbnail" alt={alt} />
                <a href={href} className="link-text">{linkText}</a>
            </figure>
        </>
    );
}

export default Project;