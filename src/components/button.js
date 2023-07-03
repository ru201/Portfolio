import React from "react";
import { Button } from "@mui/material";

export default function Btn ({ onClick, children, variant, sx }) {

    return (
        <>
            <Button sx={sx} variant={variant} onClick={() => onClick()}>{children}</Button>
        </>
    )
}