import React from 'react';
import {filmsApi} from "../services/PostService.ts";
import FilmsItem from "./FilmsItem.tsx";
import '../style/filmsContaniet.css'

const FilmsContainer = () => {
    const {data, isLoading, error} = filmsApi.useFilmAllQuery('')



    // @ts-ignore
    return (

        <div className="blockFilm" >
            {error && <h1>Ошибка</h1>}
            {isLoading && <h1>Идет загрузка...</h1>}
            {data && data.items.map((_, index: number) =>
            <FilmsItem key={data.items[index].kinopoiskId} film={data.items[index]} />
            )}
        </div>
    );
};

export default FilmsContainer;