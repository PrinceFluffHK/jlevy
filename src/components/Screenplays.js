import React from "react";
import {
    almostMusicPilot,
    amnesiaDMinor,
    copyPasteFeature,
    criminalEtiquetteFeature,
    gotFinalSeason,
    invasionPilot,
    notOfThisWorldFeature,
    premiumLubricantsShort,
    siliconValleySpec,
    strangerThingsSpec,
    uncontactedFeature,
} from "../data/featurePanes";

const Screenplays = (props) => {
    const featureList = [
        uncontactedFeature,
        copyPasteFeature,
        criminalEtiquetteFeature,
        notOfThisWorldFeature,
        almostMusicPilot,
        invasionPilot,
        gotFinalSeason,
        strangerThingsSpec,
        siliconValleySpec,
        premiumLubricantsShort,
        amnesiaDMinor,
    ];

    const featurePanes = featureList.map((feature, index) => {
        return feature.listPane();
    });

    return (
        <div className="ninety-container top-bar-margin">
            <div className="narrow-container feature-block">{featurePanes}</div>;
        </div>
    );
};

export default Screenplays;
