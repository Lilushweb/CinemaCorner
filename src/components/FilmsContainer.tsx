import React, { FC, useState, useEffect, useMemo } from 'react';
import FilmsItem from "./FilmsItem.tsx";
import '../style/filmsContaniet.css'
import { IMapRender } from "../models/IMapRender.ts";
import {useInfiniyLode} from "../store/hooks/infinituLoder.ts";
import {useAppSelector} from "../store/hooks/redux.ts";

interface IFilmsContainerProps {
    page: number
}

const FilmsContainer: FC<IFilmsContainerProps> = ({  }) => {

    const [pages, setPages] = useState(1);
    useInfiniyLode(1,5)
    const selecter = useAppSelector((state) => state.films);
    const films = selecter && selecter.page[pages]? selecter.page[pages].items : [];
    const [currenPage, setCurrenPage] = useState(films.length > 0 ? [...films] : []);



    const [sortOrder, setSortOrder] = useState('asc');
    const [sortType, setSortType] = useState('year')

    const sortedFilms = useMemo(() => {
        if (!films) return [];
        if(sortType === "year"){
            return [...films].sort((a, b) => sortOrder === 'возрастание' ? a.year - b.year : b.year - a.year);
        } else if (sortType === "rating"){
            return [...films].sort((a, b) => sortOrder === 'возрастание' ? a.ratingKinopoisk - b.ratingKinopoisk : b.ratingKinopoisk - a.ratingKinopoisk);
        }
    }, [films, sortOrder, sortType]);

    const handleSortChange = () => {
        setSortOrder(sortOrder === 'возрастание' ? 'убывание' : 'возрастание');
    };

    const handleSortTypeChange = (type: string) => {
        setSortType(type)
    }

    const handClickLoder = () => {
            setCurrenPage([...currenPage, films])
            setPages(pages + 1)
    }

    useEffect(() => {
        console.log(selecter)
        console.log(currenPage)
        console.log(films)
    }, [pages, films, currenPage]);
    return (
        <div>
            <button onClick={handleSortChange}>По {sortOrder === 'возрастание' ? 'возрастание' : 'убывание'}</button>
            <button onClick={() => handleSortTypeChange("rating")}>Сортировка по рейтингу</button>
            <button onClick={() => handleSortTypeChange("year")}>Сортировка по возрасту</button>
            <div className="blockFilm">


                {sortedFilms.map((element: IMapRender) =>
                    <div>
                       <FilmsItem key={element.kinopoiskId} film={element} />
                    </div>
                )}
            </div>
            {pages <= 4 && <button onClick={handClickLoder}>загрузить</button>}
        </div>
    );
};

export default FilmsContainer;