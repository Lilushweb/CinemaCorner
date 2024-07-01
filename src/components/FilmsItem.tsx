import React, {useState} from 'react';
import {filmsApi} from "../services/PostService.ts";
import {IFilmItem} from "../models/IFilmItem.ts";
import ModalWind from "./ModelWind.tsx"
import StarRating from "./StarRating.tsx";
import ErrorModalWind from "./ErrorModalWind.tsx"
import { NavLink, useNavigate } from "react-router-dom";
import IdFilmPage from "./IdFilmPage.tsx";



const FilmsItem: React.FC<IFilmItem> = ({film}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/films/${film.kinopoiskId}`, {replace: true, state:{id: film.kinopoiskId}})
    }


    return (
        <div className="films">
            <button className="info" onClick={handleClick}>Подробнее</button>
            <div className="ratingContener"><StarRating rating={film.ratingKinopoisk}/></div>
            <img alt={film.posterUrl} src={film.posterUrl}></img>
            <div className="infoIsFilm">

                <span className="naemFilm">{film.nameOriginal || film.nameRu}</span>
                <span className="yearFilm">Year of issue:
                <span>{film.year}</span>
                </span>
                {film.genres.map((item, index) =>
                    index < 2 ? <span className="genre" key={index}>{item.genre}</span> : null
                )}


            </div>
        </div>
    );
};

export default FilmsItem;