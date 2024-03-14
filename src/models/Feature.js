import { Grid } from "@mui/material";
import React from "react";

class Feature {
    constructor(name, link, description, category, thumbnail, alt) {
        this.name = name;
        this.link = link;
        this.description = description;
        this.category = category

        // this.thumbnail = thumbnail;
        // this.altText = alt;
    }

    listPane(color) {
        return (
            <div className="feature-container" key={this.name} style={{ backgroundColor: color }}>
                {/* <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <div className="flex center">
                            <img
                                className="feature-thumbnail"
                                src={this.thumbnail}
                                alt={this.altText}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}> */}
                        <h1>{this.category}: {this.name}</h1>
                        <p>{this.description}</p>
                    {/* </Grid>
                </Grid> */}
            </div>
        );
    }
}

export default Feature;
