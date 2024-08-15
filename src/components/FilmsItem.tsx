import { useState, FC } from 'react'
import { IFilmItem } from "../models/IFilmItem.ts"
import StarRating from "./StarRating.tsx"
import { useNavigate } from "react-router-dom"
import { FcLike } from "react-icons/fc"
import { FcLikePlaceholder } from "react-icons/fc"
import { useAppDispatch, useAppSelector } from '../store/hooks/redux.ts'
import { likes, unLikes } from "../store/reducers/likeSlice.ts"


const FilmsItem: FC<IFilmItem> = ({ film }) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const likeList = useAppSelector((state) => state.like.like)
    const getLike = (id: number) => {
        if (likeList.find((el) => el.kinopoiskId === id)) {
            return true
        } else { return false }
    }
    const [like, setLike] = useState<boolean>(getLike(film.kinopoiskId))

    const handleClickStaff = () => {
        navigate(`/films/${film.kinopoiskId}`, { replace: true, state: { id: film.kinopoiskId } })
    }
    const handleClick = () => {
        if (like) {
            dispatch(unLikes(film.kinopoiskId))
        } else {
            dispatch(likes(film))
        }
        setLike(!like)
    }


    return (
        <div className="films">
            <StarRating ratingKinopoisk={film.ratingKinopoisk} />
            <button className='btnlike' onClick={handleClick}>
                {
                    like ?
                        <FcLike />
                        :
                        <FcLikePlaceholder />
                }
            </button>


            <img alt={film.posterUrl} src={film.posterUrlPreview}></img>
            <div className="infoIsFilm">
                <span className="nameFilm">{film.nameRu || film.nameOriginal}</span>
                <div className="yearFilm">
                    <strong>Год выпуска:</strong>
                    <span>{film.year}</span>
                </div>
                <span className="genre">{film.genres[0].genre}</span>
                <button className="info" onClick={handleClickStaff}>Подробнее</button>


            </div>
        </div>
    )
}

export default FilmsItem
