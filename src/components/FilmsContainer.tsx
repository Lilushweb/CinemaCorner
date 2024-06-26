import React, { FC, useState, useEffect, useMemo } from 'react';
import { filmsApi } from "../services/PostService.ts";
import FilmsItem from "./FilmsItem.tsx";
import '../style/filmsContaniet.css'
import { NavLink } from "react-router-dom";
import { IQueckSort } from "../models/IQueckSort.ts";
import { IMapRender } from "../models/IMapRender.ts";
import { IFilmItem } from "../models/IFilmItem.ts";
import { useDispatch, useSelector } from "react-redux";
import { setFilms } from "../store/reducers/filmsSlice.ts";

interface IFilmsContainerProps {
    page: number
}

const FilmsContainer: FC<IFilmsContainerProps> = ({ page }) => {
    const { data, isLoading, error } = filmsApi.useFilmAllQuery(page)
    const dispatch = useDispatch()
    const films = useSelector((state) => state.films.items);
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortType, setSortType] = useState('year')

    useEffect(() => {
        if (data) {
            dispatch(setFilms(data.items))
        }
    }, [data, dispatch,])

    const sortedFilms = useMemo(() => {
        if (!films) return [];
        if(sortType === "year"){
            return [...films].sort((a, b) => sortOrder === 'asc' ? a.year - b.year : b.year - a.year);
        } else if (sortType === "rating"){
            return [...films].sort((a, b) => sortOrder === 'asc' ? a.ratingKinopoisk - b.ratingKinopoisk : b.ratingKinopoisk - a.ratingKinopoisk);
        }
    }, [films, sortOrder, sortType]);

    const handleSortChange = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const handleSortTypeChange = (type: string) => {
        setSortType(type)
    }
    return (
        <div>
            <button onClick={handleSortChange}>Sort by year {sortOrder === 'asc' ? 'ASC' : 'DESC'}</button>
            <button onClick={() => handleSortTypeChange("rating")}>Sort by rating</button>
            <button onClick={() => handleSortTypeChange("year")}>Sort by year</button>
            <div className="blockFilm">
                {error && <h1>Ошибка {error.status}</h1>}
                {isLoading && <h1>Идет загрузка...</h1>}
                {sortedFilms.map((element: IMapRender) =>
                    <FilmsItem key={element.kinopoiskId} film={element} />
                )}
            </div>
        </div>
    );
};

export default FilmsContainer;