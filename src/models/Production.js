import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPodcast,
    faAppleWhole,
    faGlobe,
} from "@fortawesome/free-solid-svg-icons";

class Production {
    constructor(title, description, links) {
        this.title = title;
        this.description = description;
        this.links = links;
    }

    listPane() {
        const linksList = this.links.map((link, index) => {
            return (
                <div key={index}>
                    <a href={link.link} target="_blank">
                        {Production.getIcon(link.icon)}
                    </a>
                </div>
            );
        });

        return (
            <div className="feature-container block-outline" key={this.title}>
                <h1>{this.title}</h1>
                <p>{this.description}</p>
                <div className="align-center">{linksList}</div>
            </div>
        );
    }

    static getIcon(iconName) {
        switch (iconName) {
            case "fa-apple-whole":
                return (
                    <FontAwesomeIcon
                        className="production-link"
                        icon={faAppleWhole}
                        size="xl"
                        color="black"
                    />
                );
            case "fa-podcast":
                return (
                    <FontAwesomeIcon
                        className="production-link"
                        icon={faPodcast}
                        size="xl"
                        color="black"
                    />
                );
            case "fa-globe":
                return (
                    <FontAwesomeIcon
                        className="production-link"
                        icon={faGlobe}
                        size="xl"
                        color="black"
                    />
                );
        }
    }
}

export default Production;
