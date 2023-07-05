import React from "react";
import '../App.css'
import Img from "./image";
import Pic from "../pictures/work.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Work () {
    return (
        <div id="work" className="homeBody">
        <div className="homeMsg">
            <h1 className="h1Msg">My Work</h1>
            <h2 className="h2Msg">Check out some of my personal projects on GitHub.</h2>
            <a onclick="" href="https://www.github.com/ru201" rel="noreferrer" target='_blank'><FontAwesomeIcon icon={faGithub} className="social_icon gh" /></a>
        </div>
        <div className="portfolioPic">
            <Img src={Pic} alt={"Picture of Me"} className={"pic"} />
        </div>
    </div>
    )
}