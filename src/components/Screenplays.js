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
        if (index % 2) {
            return feature.listPane("white");
        }
        return feature.listPane("lightcyan");
    });

    return <div>{featurePanes}</div>;
};

export default Screenplays;
