import React from "react";
import '../App.css'
import Img from "./image";
import Pic from "../pictures/profile.jpg"

export default function Landing () {
    return (
        <div id="welcome" className="homeBody">
        <div className="homeMsg">
            <h1 className="h1Msg">Hi there!</h1>
            <h2 className="h2Msg">My name is Rubin Roy.<br/> I am a software engineer looking to help you out.<br/><br/><span className="workLink">Learn more about me below.</span></h2>
        </div>
        <div className="portfolioPic">
            <Img src={Pic} alt={"Picture of Me"} className={"pic"} />
        </div>
    </div>
    )
}
