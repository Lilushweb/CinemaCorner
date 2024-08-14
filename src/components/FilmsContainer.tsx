import React, { FC, useEffect, useMemo, useState } from 'react'
import { filmsApi } from "../services/FIlmsServerApi.ts"
import FilmsItem from "./FilmsItem.tsx"
import '../style/filmsContaniet.css'
import { IMapRender } from "../models/IMapRender.ts"
import { useAppDispatch, } from '../store/hooks/redux.ts'
import { addFilms } from '../store/reducers/filmsSlice.ts'

interface IFilmsContainerProps {
    page: number
}

const FilmsContainer: FC<IFilmsContainerProps> = ({ page }) => {
    const { data, isLoading, error } = filmsApi.useFilmAllQuery<IMapRender>(page)
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
    const [sortType, setSortType] = useState<'year' | 'ratingKinopoisk'>('year')
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (data && data.items) {
            data.items.forEach(item => {
                if (item?.nameRu) {
                    const pushObj = {
                        name: item.nameRu,
                        id: item.kinopoiskId,

                    }
                    dispatch(addFilms(pushObj))
                }
            })
        }
    }, [data, dispatch])

    const handleSortChange = (type: 'year' | 'ratingKinopoisk') => {
        setSortType(type)
    }
    const handleOrderChange = () => {
        setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'))
    }

    const sortedFilms = useMemo(() => {
        if (!data) return []
        const filmsCopy = [...data.items]

        filmsCopy.sort((a, b) => {
            const valueA = sortType === 'year' ? a.year : a.ratingKinopoisk
            const valueB = sortType === 'year' ? b.year : b.ratingKinopoisk

            if (sortOrder === 'asc') {
                return valueA > valueB ? 1 : -1
            } else {
                return valueA < valueB ? 1 : -1
            }
        })

        return filmsCopy
    }, [data, sortType, sortOrder])

    if (isLoading) return <div>Загрузка...</div>
    if (error) return <div>Ошибка загрузки данных.</div>

    return (
        <div>
            <div>
                <input
                    type="checkbox"
                    id="sortByYear"
                    checked={sortType === 'year'} // Устанавливаем состояние чекбокса
                    onChange={() => handleSortChange('year')}
                />
                <label htmlFor="sortByYear">Сортировать по году</label>

                <input
                    type="checkbox"
                    id="sortByRating"
                    checked={sortType === 'ratingKinopoisk'} // Устанавливаем состояние чекбокса
                    onChange={() => handleSortChange("ratingKinopoisk")}
                />
                <label htmlFor="sortByRating">Сортировать по рейтингу</label>
                <button onClick={handleOrderChange}>
                    Сортировка по {sortOrder === 'asc' ? 'возрастанию' : 'убыванию'}
                </button>
            </div>
            <div className="films-container">
                {sortedFilms.map(film => (
                    <FilmsItem key={film.kinopoiskId} film={film} />
                ))}
            </div>
        </div>
    )
}

export default FilmsContainer