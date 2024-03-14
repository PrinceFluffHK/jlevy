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
        <div>
            <div className="center">
                <h1>Art</h1>
            </div>

            <Grid container spacing={3}>
                {artPanes}
            </Grid>
        </div>
    );
};

export default Art;
