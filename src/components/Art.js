import React from "react";

import * as artwork from "../data/artPieces.js";
import { Grid } from "@mui/material";
const artList = [
    artwork.blackPanther,
    artwork.gruk,
    artwork.gameOfThrones,
    artwork.alienThing,
    artwork.spiderMan,
    artwork.theKnight,
    artwork.r2d2,
    artwork.spaceStation,
    artwork.democracyBot,
];

const Art = (props) => {
    const artPanes = artList.map((art, index) => {
        return art.displayPane(index);
    });
    return (
        <div className="top-bar-margin ninety-container">
            <div className="wide-container feature-block">
                <Grid container spacing={3}>
                    {artPanes}
                </Grid>
            </div>
        </div>
    );
};

export default Art;
