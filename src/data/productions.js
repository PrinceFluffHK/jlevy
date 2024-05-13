import Production from "../models/Production";
import ShortFilm from "../models/ShortFilm";

export const uncontacted = new ShortFilm(
    "Uncontacted",
    "",
    '"Uncontacted" is a screenplay, written by myself, that has been adapted into a three part audio drama. I wrote, edited, and produced the entire project and hired actors for narration and character voices. Includes original music and art.',
    "mGTZrmUUMi4",
    [
        {
            icon: "fa-apple-whole",
            link: "https://podcasts.apple.com/us/podcast/uncontacted/id1668218175"
        },
        {
            icon: "fa-podcast",
            link: "https://open.spotify.com/show/1eKIt7tpWgDIRC64h4tETl"
        }
    ]
);

export const gotFinalSeason = new Production(
    "Game of Thrones: The Virtual Final Season",
    "I served as a screenwriter for a classroom-simulated writer’s room that penned six one-hour drama scripts of a predicted version of the final season of the show. I helped produce a live staged event and casted 15+ actors for an HBO-sponsored reading of the six written episodes. The recordings  of the performances have collectively generated more than 3.5 million views on YouTube.",
    // "Check out more at: http://www.virtualfinalseason.com/GoT/",
    [
        {
            icon: "fa-globe",
            link: "http://www.virtualfinalseason.com/GoT/"
        }
    ]
);

export const trekCentral = new Production(
    "Trek Central",
    "I write monthly articles for the Trek Central website. These include thought pieces and reviews of comics and television episodes. I also provide scripts for Trek Central's YouTube videos and consult with the head producer on video production.",
    []
)