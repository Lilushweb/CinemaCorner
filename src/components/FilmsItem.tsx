import React, { } from 'react';
import { IFilmItem } from "../models/IFilmItem.ts";
import StarRating from "./StarRating.tsx";
import { useNavigate } from "react-router-dom";




const FilmsItem: React.FC<IFilmItem> = ({ film }) => {
    const navigate = useNavigate()

    const handleClickStoff = () => {
        navigate(`/films/${film.kinopoiskId}`, { replace: true, state: { id: film.kinopoiskId } })
    }

    const handleClickPlayer = () => {
        navigate(`/films/player/${film.kinopoiskId}`, { replace: true, state: { kinopoiskId: film.kinopoiskId } })
    }


    return (
        <div className="films">
            <button className="info" onClick={handleClickStoff}>Подробнее</button>
            <div className="ratingContener"><StarRating rating={film.ratingKinopoisk} /></div>
            <img alt={film.posterUrl} src={film.posterUrl}></img>
            <div className="infoIsFilm">

                <span className="naemFilm">{film.nameRu || film.nameOriginal}</span>
                <span className="yearFilm">Year of issue:
                    <span>{film.year}</span>
                </span>
                {film.genres.map((item, index) =>
                    index < 2 ? <span className="genre" key={index}>{item.genre}</span> : null
                )}

                <button onClick={handleClickPlayer} className="watch">Смотреть</button>
            </div>
        </div>
    );
};

export default FilmsItem;