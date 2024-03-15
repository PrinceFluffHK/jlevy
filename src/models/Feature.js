import React from "react";

class Feature {
    constructor(name, link, description, category, thumbnail, alt) {
        this.name = name;
        this.link = link;
        this.description = description;
        this.category = category;
    }

    listPane() {
        return (
            <div
                className="feature-container block-outline"
                key={this.name}
            >
                <h1>
                    {this.category}: {this.name}
                </h1>
                <p>{this.description}</p>
            </div>
        );
    }
}

export default Feature;
