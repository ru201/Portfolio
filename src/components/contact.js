import React from "react";
import '../App.css'
import Img from "./image";
import Pic from "../pictures/about.jpg"

export default function Contact () {
    return (
    <div id="contact" className="homeBody">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="homeMsg">
            <h1 className="h1Msg">Contact Me</h1>
            <h2 className="h2Msg">Feel free to reach out to me anytime!<br/><br/>Here are some links to my socials.<br/><br/>My email is rubinroy12@gmail.com</h2>
        </div>
        <div className="portfolioPic">
            <Img src={Pic} alt={"Picture of Me"} className={"pic"} />
        </div>
    </div>
    )
}