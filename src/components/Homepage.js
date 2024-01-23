import React from "react";
import headshot from "../images/pic1.png";
import { Grid } from "@mui/material";
import { displayList } from "../data/links";

const Homepage = (props) => {
    console.log(displayList)
    const pageGrid = displayList.map((link) => {
        return link.gridDisplay();
    });

    return (
        <div>
            <div className="content-container">
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <div className="flex justify-center">
                            <img
                                className="headshot"
                                src={headshot}
                                alt="Headshot of Jacob Levy smiling"
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div id="bioAndLinks" className="flex column">
                            <p>Hello my name is Jacob WAHOOOOOOO</p>
                            <p>Contact Me</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div id="other pages">
                <Grid container spacing={2}>
                    {pageGrid}
                </Grid>
            </div>
        </div>
    );
};

export default Homepage;
