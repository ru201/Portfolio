import React from "react";
import '../App.css';
import Btn from "./button";
import Img from "./image";
import logo from '../logo.png'

export default function NavBar () {
    const btn_style = {
        color: 'white',
        letterSpacing: '2px',
        margin: '10px',
        fontSize: '12px'
    }

    function mylinkfunction(targetDiv) {

        window.location.href=`#${targetDiv}`;
 
    }

    return (
        <div className="navBar">
            <div className="navLogo">
                <Img src={logo} alt={"logo"} className={"logo"} onClick={() => mylinkfunction("welcome")} />
            </div>
            <div className="navBtnsContainer">
                <Btn sx={btn_style} onClick={() => mylinkfunction("about")}>About</Btn>
                <Btn sx={btn_style} onClick={() => mylinkfunction("work")}>Work</Btn>
                <Btn sx={btn_style} onClick={() => mylinkfunction("contact")}>Contact</Btn>
            </div>
        </div>
    )
}