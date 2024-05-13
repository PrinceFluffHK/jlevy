import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Production from "./Production";

class ShortFilm {
    constructor(name, roles, description, id, links) {
        this.name = name;
        this.roles = roles;
        this.description = description;
        this.id = id;
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
            <div
                className="feature-container block-outline"
                key={this.name}
            >
                <div className="youtube-embed">
                    <LiteYouTubeEmbed id={this.id} title={this.title} />
                </div>
                <div>
                    <h1>{this.name}</h1>
                    <sub>{this.roles}</sub>
                    <p>{this.description}</p>

                    <div className="align-center">{linksList}</div>
                </div>
            </div>
        );
    }
}

export default ShortFilm;
