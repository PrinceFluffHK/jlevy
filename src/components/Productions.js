import React from 'react';
import * as productions from "../data/productions.js"
const { uncontacted, gotFinalSeason, trekCentral } = productions

const MyProductions = (props) => {
    const productionList = [
        uncontacted,
        gotFinalSeason,
        trekCentral
    ]

    const productionPanes = productionList.map((production, index) => {
        if (index % 2) {
            return production.listPane("lightcyan")
        }
        return production.listPane("white")

    })

    return (
        <div>
            {productionPanes}
        </div>
    )
}

export default MyProductions