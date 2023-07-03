import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Landing from "../components/landingArea";
import About from "../components/about";
import Work from "../components/work";
import Contact from "../components/contact";

export default function Home () {

    return (
        <>
            <NavBar/>
            <Landing/>
            <About/>
            <Work/>
            <Contact/>
            <Footer/>
        </>
    )
}