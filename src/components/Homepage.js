import React from "react";
import headshot from "../images/HS_JacobLevy_5.jpg";
import { Grid } from "@mui/material";
import { displayList } from "../data/links";
import { Link } from "react-router-dom";

const Homepage = () => {
    const pageGrid = displayList.map((link) => {
        return link.gridDisplay();
    });

    return (
        <div className="top-bar-margin center">
            <div className="wide-container">
                <div className="width-100 center">
                    <div className="width-90 top-bar-margin">
                        <Grid
                            container
                            columnSpacing={1}
                            rowSpacing={3}
                            className=""
                        >
                            <Grid item xs={12} md={6}>
                                <div
                                    className="center"
                                    style={{ height: "100%" }}
                                >
                                    <img
                                        className="headshot block-outline"
                                        src={headshot}
                                        alt="Headshot of Jacob Levy smiling"
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} className="center">
                                <div id="bioAndLinks" className="center">
                                    <div className="width-90" 
                                    style={{ height: "100%" }}>
                                        <p>
                                            <span
                                                style={{
                                                    fontSize: "2rem",
                                                    fontWeight: "bolder",
                                                }}
                                            >
                                                Jacob Levy
                                            </span>{" "}
                                            won Second Place in Scriptapalooza's
                                            Screenplay Competition for his
                                            feature film, Uncontacted. Before
                                            receiving this award, Jacob
                                            self-produced, edited, and directed
                                            a three part narrative podcast
                                            adaptation of Uncontacted which
                                            garnered thousands of listens.
                                        </p>
                                        <p>
                                            Jacob was hired to write two feature
                                            films currently in pre-production.
                                            Jacob loves writing science fiction,
                                            but excels in writing both dramatic
                                            and comedic features and pilots.
                                            Jacob is currently working on his
                                            latest narrative podcast, The Gray
                                            Side, with intentions of having it
                                            professionally produced and
                                            distributed.
                                        </p>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div id="Contact Me" className="width-100 center">
                    <Link
                        to="/contact"
                        className="contact-me-container block-outline center suppress-link"
                    >
                        <h1>Lets Connect!</h1>
                    </Link>
                </div>
                <div
                    className="ninety-container"
                    style={{ margin: "2rem 0 2rem 0" }}
                >
                    <div className="width-90 center">
                        <Grid container rowSpacing={6}>
                            {pageGrid}
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
