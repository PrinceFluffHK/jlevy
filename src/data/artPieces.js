import ArtPiece from "../models/ArtPiece";

import blackPantherArt from "../images/black-panther.jpeg"
import rexxarArt from "../images/gruk.jpeg"
import gotArt from "../images/game-of-thrones.jpeg"
import alienThinArt from "../images/alien-thing.png"
import spiderManArt from "../images/alien-thing.png"
import hollowKnightArt from "../images/alien-thing.png"
import r2d2Art from "../images/alien-thing.png"
import spaceShipArt from "../images/space-station.jpeg"
import robotDemocracy from "../images/democracy-bot.png"

export const blackPanther = new ArtPiece(blackPantherArt, "A waist-up pencil portrait of Marvel's Black Panther")
export const gruk = new ArtPiece(rexxarArt, "Pencil drawing of Rexxar from World of Warcraft.")
export const gameOfThrones = new ArtPiece(gotArt, "Pencil drawing of the Stark and Lannister emblems and phrases.")
export const alienThing = new ArtPiece(alienThinArt, "Pencil drawing of a quadrupedal alien.")
export const spiderMan = new ArtPiece(spiderManArt, "Ink drawing of Miles Morales as Spider Man.")
export const theKnight = new ArtPiece(hollowKnightArt , "Pencil drawing of The Knight from Hollow Knight.")
export const r2d2 = new ArtPiece(r2d2Art, "Pencil drawing of R2D2 from Star Wars.")
export const spaceStation = new ArtPiece(spaceShipArt , "Pencil drawing of a large circular space station.")
export const democracyBot = new ArtPiece(robotDemocracy, "Probability of mission hinderance: 0%; Democracy is non-negotiable.")