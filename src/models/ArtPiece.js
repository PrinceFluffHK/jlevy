import { Grid } from "@mui/material";
import React from "react";

class ArtPiece {
    constructor(image, alt) {
        this.image = image;
        this.alt = alt;
    }

    displayPane(index) {
        return (
            <Grid item xs={12} md={6} lg={3} key={index}>
                <div className="center">
                    <img className="art" src={this.image} alt={this.alt} />
                </div>
            </Grid>
        );
    }
}

export default ArtPiece;
