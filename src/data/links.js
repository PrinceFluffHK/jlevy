import Page from "../models/Page";
import cameraLens from "../images/camera-lens.jpg"
import pencilTip from "../images/Closeup_of_pencil_graphite.jpg"
import portfolio from "../images/portfoloi.jpg"
import screenplay from "../images/screenplay-2651055_960_720.jpg"

import Art from "../components/Art";
import Homepage from "../components/Homepage";
import Films from "../components/Films";
import Screenplays from "../components/Screenplays";
import Contact from "../components/Contact";
import MyProductions from "../components/Productions";

// export const homePage = new Page("Home", "/", "", Homepage)
export const contactPage = new Page("Contact", "/contact", "", Contact)
export const filmsPage = new Page("Short Films", "/films", cameraLens, Films)
export const artPage = new Page("Art", "/art", pencilTip, Art)
export const productionPage = new Page("Productions", "/productions", portfolio, MyProductions)
export const screenplayPage = new Page("Screenplays", "/screenplay", screenplay, Screenplays)

export const pageList = [
    contactPage,
    screenplayPage,
    filmsPage,
    productionPage,
    artPage,
]

export const displayList = [
    screenplayPage,
    filmsPage,
    productionPage,
    artPage,
]
