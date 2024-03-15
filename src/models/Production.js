import React from "react";

class Production {
    constructor(title, description, extra) {
        this.title = title;
        this.description = description;
        this.extra = extra;
    }

    listPane(color) {
        return (
            <div
                className="feature-container block-outline"
                key={this.title}
            >
                <h1>{this.title}</h1>
                <p>{this.description}</p>
                <p>{this.extra}</p>
            </div>
        );
    }
}

export default Production;
