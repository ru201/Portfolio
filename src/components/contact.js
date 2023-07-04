import React from "react";
import '../App.css'
// import Img from "./image";
// import Pic from "../pictures/about.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function Contact () {
    return (
    <div id="contact" className="homeBody">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="homeMsg">
            <h1 className="h1Msg">Contact Me</h1>
            <h2 className="h2Msg">Feel free to reach out to me anytime!<br/><br/>Here are some links to my socials.<br/><br/>My email is rubinroy12@gmail.com</h2>
        </div>
        <div className="portfolioPic">
            {/* <Img src={Pic} alt={"Picture of Me"} className={"pic"} /> */}
            <a href="https://www.instagram.com/" rel="noreferrer" target='_blank' ><FontAwesomeIcon icon={faInstagram} className="social_icon ig" /></a>
            <a href="https://www.facebook.com/rubin.roy.9" rel="noreferrer" target='_blank'><FontAwesomeIcon icon={faFacebook} className="social_icon fb" /></a>
            <a href="https://www.linkedin.com/in/rubin-roy-51592b23b" rel="noreferrer" target='_blank'><FontAwesomeIcon icon={faLinkedin} className="social_icon lin" /></a>
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=rubinroy12@gmail.com&su=SUBJECT&body=BODY&tf=cm" rel="noreferrer" target='_blank'><FontAwesomeIcon icon={faEnvelope} className="social_icon email" /></a>
        </div>
    </div>
    )
}