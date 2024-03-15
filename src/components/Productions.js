import React from 'react';
import * as productions from "../data/productions.js"
const { uncontacted, gotFinalSeason, trekCentral } = productions

const MyProductions = () => {
    const productionList = [
        uncontacted,
        gotFinalSeason,
        trekCentral
    ]

    const productionPanes = productionList.map((production, index) => {
        return production.listPane()
    })

    return (
        <div className="ninety-container top-bar-margin">
            <div className="narrow-container feature-block">{productionPanes}</div>;
        </div>
    );
}

export default MyProductions