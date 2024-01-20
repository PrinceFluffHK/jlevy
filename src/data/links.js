import Page from "../models/Page";
import cameraLens from "../images/camera-lens.jpg"
import pencilTip from "../images/Closeup_of_pencil_graphite.jpg"
import portfolio from "../images/portfoloi.jpg"
import screenplay from "../images/screenplay-2651055_960_720.jpg"

import Art from "../components/Art";
import Homepage from "../components/Homepage";
import Films from "../components/Films";
import Writing from "../components/Writing";
import Screenplays from "../components/Screenplays";

export const homePage = new Page("Home", "/", "", Homepage)
export const filmsPage = new Page("Films", "/films", cameraLens, Films)
export const artPage = new Page("Art", "/art", pencilTip, Art)
export const writingPage = new Page("Writing", "/writing", portfolio, Writing)
export const screenplayPage = new Page("Screenplays", "/screenplay", screenplay, Screenplays)

export const pageList = [
    filmsPage,
    artPage,
    writingPage,
    screenplayPage
]
