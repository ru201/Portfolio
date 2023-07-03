import React from "react";

export default function Img ({ src, className, alt, onClick }) {

    return (
        <>
            <img src={src} alt={alt} className={className} onClick={() => onClick()}></img>
        </>
    )
}