import { Grid } from "@mui/material";
import React from "react";
import { Link, Route } from "react-router-dom";

class Page {
    constructor(name, link, picture, component) {
        this.name = name;
        this.link = link;
        this.picture = picture;
        this.component = component;
    }

    menuLink() {
        return (
            <Link className="link-text" to={this.link} key={this.name}>
                <p className="">{this.name}</p>
            </Link>
        );
    }

    route() {
        return (
            <Route
                exact
                path={this.link}
                Component={this.component}
                key={this.name}
            />
        );
    }

    gridDisplay() {
        return(
            <Grid item xs={6} md={3}>
                <div className="flex center">
                    <Link to={this.link} key={this.name}>
                        <img src={this.picture} className="top-bar-container grid-image">

                        </img>
                    </Link>
                </div>
            </Grid>
        )
    }
}

export default Page;
