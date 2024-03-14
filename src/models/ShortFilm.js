import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

class ShortFilm {
    constructor(name, roles, description, id) {
        this.name = name;
        this.roles = roles;
        this.description = description;
        this.id = id;
    }

    listPane(color) {
        return (
            <div
                className="feature-container"
                key={this.name}
                style={{ backgroundColor: color }}
            >
                <div className="youtube-embed">
                    <LiteYouTubeEmbed id={this.id} title={this.title} />
                </div>
                <div>
                    <h1>{this.name}</h1>
                    <sub>{this.roles}</sub>
                    <p>{this.description}</p>
                </div>
            </div>
        );
    }
}

export default ShortFilm;
