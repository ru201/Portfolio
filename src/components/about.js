import React from "react";
import '../App.css'
import Img from "./image";
import Pic from "../pictures/about.jpg"

export default function About () {
    return (
        <div id="about" className="homeBody">
        <div className="homeMsg">
            <h1 className="h1Msg">About Me</h1>
            <h2 className="h2Msg aboutMeText">I live in Sydney, Australia, where I am currently studying software engineering and commerce at the University of New South Wales, while doing some casual high school tutoring for mathematics and, information processes and technology. <br/> <br/>
            After completing high school in 2016 I completed 2 years of National Service in the Singaporean Army. <br/> <br/> Here's a pic of me and my section on our final day of service.</h2>
        </div>
        <div className="portfolioPic">
            <Img src={Pic} alt={"Picture of Me"} className={"pic"} />
        </div>
    </div>
    )
}