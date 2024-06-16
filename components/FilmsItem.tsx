import React from 'react';
import {filmsApi} from "../services/PostService.ts";
import {IFilmItem} from "../models/IFilmItem.ts";
import '../components/filmItem.css'



const FilmsItem: React.FC<IFilmItem> = ({film}) => {


    return (
        <div className="films">
            <img alt={film.posterUrl} src={film.posterUrl}></img>
            <span>{film.nameRu}</span>
            <span>{film.year}</span>

        </div>
    );
};

export default FilmsItem;