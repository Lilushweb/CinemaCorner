import React from 'react';
import {filmsApi} from "../services/PostService.ts";
import FilmsItem from "./FilmsItem.tsx";
import {IFilmItem} from "../models/IFilmItem.ts";
import '../components/filmsContaniet.css'

const FilmsContainer = () => {
    const {data, isLoading, error} = filmsApi.useFilmAllQuery('')




    return (
        <div className="blockFilm">
            {data && console.log(data.items[0].genres[0].genre)}
            {data && data.items.map((_, index: number) =>
            <FilmsItem key={data.items[index].kinopoiskId} film={data.items[index]} />
            )}
        </div>
    );
};

export default FilmsContainer;