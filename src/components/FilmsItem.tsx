import React, {useState} from 'react';
import {filmsApi} from "../services/PostService.ts";
import {IFilmItem} from "../models/IFilmItem.ts";
import ModalWind from "./ModelWind.tsx"
import StarRating from "./StarRating.tsx";
import ErrorModalWind from "./ErrorModalWind.tsx"



const FilmsItem: React.FC<IFilmItem> = ({film}) => {
    const {data} = filmsApi.useStaffQuery(film.kinopoiskId);

    const parsRetingKinopoisk = film.ratingKinopoisk as number;



    return (
        <div className="films" >
            {!data && <ErrorModalWind/>}
            {data && <ModalWind staff={data}/>}
            <img alt={film.posterUrl} src={film.posterUrl}></img>
            <div className="infoIsFilm">
                <span className="naemFilm">{film.nameOriginal || film.nameRu}</span>
                <span className="yearFilm">Year of issue:
                <span>{film.year}</span>
                </span>
                {film.genres.map((item, index) =>
                    index < 2 ? <span className="genre" key={index}>{item.genre}</span> : null
                )}
                <div className="ratingContener">{<StarRating key={film.kinopoiskId} selectedStar={Math.floor(parsRetingKinopoisk)}/>}</div>
            </div>
        </div>
    );
};

export default FilmsItem;