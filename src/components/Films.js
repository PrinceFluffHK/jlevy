import React from "react";

import * as films from "../data/shortFilms";
const { oneMansTrash, boomerangBall, setupToSmash } = films;

const filmList = [oneMansTrash, boomerangBall, setupToSmash];

const filmPanes = filmList.map((film, index) => {
    return film.listPane();
});

const Films = (props) => {
    return (
        <div className="ninety-container top-bar-margin">
            <div className="narrow-container feature-block">{filmPanes}</div>;
        </div>
    );
};

export default Films;
