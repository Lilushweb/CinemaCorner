import React, { FC, useMemo, useState, } from 'react';
import { filmsApi } from "../services/FIlmsServerApi.ts";
import FilmsItem from "./FilmsItem.tsx";
import '../style/filmsContaniet.css'
import { IMapRender } from "../models/IMapRender.ts";

interface IFilmsContainerProps {
    page: number
}

const FilmsContainer: FC<IFilmsContainerProps> = ({ page }) => {
    const { data, isLoading, error } = filmsApi.useFilmAllQuery(page)
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortType, setSortType] = useState('year')
    data && console.log(data.items)
    const sortedFilms = useMemo(() => {
        if (!data) return false;
        if (sortType === "year") {
            return [...data.items].sort((a, b) => sortOrder === 'возрастание' ? a.year - b.year : b.year - a.year);
        } else if (sortType === "rating") {
            return [...data.items].sort((a, b) => sortOrder === 'возрастание' ? a.ratingKinopoisk - b.ratingKinopoisk : b.ratingKinopoisk - a.ratingKinopoisk);
        }
    }, [data, sortOrder, sortType]);

    const handleSortChange = () => {
        setSortOrder(sortOrder === 'возрастание' ? 'убывание' : 'возрастание');
    };

    const handleSortTypeChange = (type: string) => {
        setSortType(type)
    }

    return (
        <div>
            <button onClick={handleSortChange}>По {sortOrder === 'возрастание' ? 'возрастание' : 'убывание'}</button>
            <button onClick={() => handleSortTypeChange("rating")}>Сортировка по рейтингу</button>
            <button onClick={() => handleSortTypeChange("year")}>Сортировка по году</button>
            <div className="blockFilm">
                {error && <h1>Ошибка</h1>}
                {isLoading && <h1>Идет загрузка...</h1>}
                {sortedFilms && sortedFilms.map((element: IMapRender) =>
                    <FilmsItem key={element.kinopoiskId} film={element} />
                )}
            </div>
        </div>

    );
};

export default FilmsContainer;