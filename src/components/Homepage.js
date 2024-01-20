import React from "react";
import headshot from "../images/pic1.png";
import { Grid } from "@mui/material";

const Homepage = (props) => {
    return (
        <div className="margins-mobile">
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <img
                        className="headshot"
                        src={headshot}
                        alt="Headshot of Jacob Levy smiling"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <div id="bioAndLinks" className="flex column">
                        <p>Hello my name is Jacob WAHOOOOOOO</p>
                        <p>Contact Me</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Homepage;
