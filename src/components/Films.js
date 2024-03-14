import React from 'react';

import * as films from "../data/shortFilms"
const { oneMansTrash, boomerangBall, setupToSmash } = films

const filmList = [
    oneMansTrash,
    boomerangBall,
    setupToSmash
]

const filmPanes = filmList.map((film, index) => {
    if (index % 2) {
        return film.listPane("white")
    }
    return film.listPane("lightcyan")
})

const Films = (props) => {
    return (
        <div>
            {filmPanes}
        </div>
    )
}

export default Films