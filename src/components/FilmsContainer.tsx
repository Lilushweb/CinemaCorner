import React, {FC} from 'react';
import {filmsApi} from "../services/PostService.ts";
import FilmsItem from "./FilmsItem.tsx";
import '../style/filmsContaniet.css'
import {NavLink} from "react-router-dom";

interface IFilmsContainerProps {
    page: number
}

const FilmsContainer: FC <IFilmsContainerProps>= ({page})  => {
    const {data, isLoading, error} = filmsApi.useFilmAllQuery(page)

    console.log(page)

    // @ts-ignore
    return (
        <div>
            <div className="pageContenirTop">
                <button className="page"><NavLink to={`/films/page/${1}`}>1</NavLink></button>
                <button className="page"><NavLink to={`/films/page/${2}`}>2</NavLink></button>
            </div>
              <div className="blockFilm">
                    {error && <h1>Ошибка</h1>}
                    {isLoading && <h1>Идет загрузка...</h1>}
                    {data && data.items.map((_, index: number) =>
                <FilmsItem key={data.items[index].kinopoiskId} film={data.items[index]} />
            )}
             <div className="pageContenirBottom">
                 <button className="page"><NavLink to={`/films/page/${1}`}>1</NavLink></button>
                 <button className="page"><NavLink to={`/films/page/${2}`}>2</NavLink></button>
            </div>
            </div>
        </div>

    );
};

export default FilmsContainer;