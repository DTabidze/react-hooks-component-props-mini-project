import React from "react";
import Assets from "../assets/logo.js"

function About (props) {
    return (
        <>
            <aside>
                <img src={props.image || "https://via.placeholder.com/215"} alt="blog logo"></img>
                <p>{props.about}</p>
            </aside>
        </>
    )
}

export default About