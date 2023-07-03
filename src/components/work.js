import React from "react";
import '../App.css'
import Img from "./image";
import Pic from "../pictures/work.jpg"

export default function Work () {
    return (
        <div id="work" className="homeBody">
        <div className="homeMsg">
            <h1 className="h1Msg">My Work</h1>
            <h2 className="h2Msg">Check out some of my personal projects on GitHub.</h2>
        </div>
        <div className="portfolioPic">
            <Img src={Pic} alt={"Picture of Me"} className={"pic"} />
        </div>
    </div>
    )
}