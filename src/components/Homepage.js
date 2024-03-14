import React from "react";
import headshot from "../images/HS_JacobLevy_2.jpg";
import { Grid } from "@mui/material";
import { displayList } from "../data/links";

const Homepage = (props) => {
    // console.log(displayList)
    const pageGrid = displayList.map((link) => {
        return link.gridDisplay();
    });

    return (
        <div style={{ paddingTop: "2rem" }}>
            <Grid container spacing={1} className="content-container bio-container">
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
                    <div id="bioAndLinks" className="column">
                        <div>
                            <p>
                                <span
                                    style={{
                                        fontSize: "2rem",
                                        fontWeight: "bolder",
                                    }}
                                >
                                    Jacob Levy
                                </span>{" "}
                                won Second Place in Scriptapalooza's Screenplay
                                Competition for his feature film, Uncontacted.
                                Before receiving this award, Jacob
                                self-produced, edited, and directed a three part
                                narrative podcast adaptation of Uncontacted
                                which garnered thousands of listens.
                            </p>
                            <p>
                                Jacob was hired to write two feature films
                                currently in pre-production. Jacob loves writing
                                science fiction, but excels in writing both
                                dramatic and comedic features and pilots. Jacob
                                is currently working on his latest narrative
                                podcast, The Gray Side, with intentions of
                                having it professionally produced and
                                distributed.
                            </p>
                        </div>
                        <p>Contact Me</p>
                    </div>
                </Grid>
            </Grid>
            <div
                id="other-pages"
                className="homepage-grid-container content-container"
            >
                <Grid container rowSpacing={2} className="grid-container">
                    {pageGrid}
                </Grid>
            </div>
        </div>
    );
};

export default Homepage;
