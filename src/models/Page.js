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
        return (
            <Grid item xs={6} md={3} key={this.name}>
                <div className="flex center">
                    <Link to={this.link} key={this.name}>
                        <div className="pos-relative">
                            <img
                                src={this.picture}
                                className="top-bar-container grid-image pos-absolute"
                                alt="wahoo"
                            />
                            <div className="grid-overlay-shadow">
                                <p className="grid-overlay-text">{this.name}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </Grid>
        );
    }
}

export default Page;
