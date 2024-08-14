import React from 'react'
import { useAppDispatch, useAppSelector } from "../store/hooks/redux"
import StarRating from "./StarRating"
import { IoMdClose } from "react-icons/io"
import { unLikes } from "../store/reducers/likeSlice"
import '../style/likePage.css'
import { NavLink } from "react-router-dom"

export default function LikePage() {
    const likeList = useAppSelector((state) => state.like.like)
    const dispatch = useAppDispatch()

    return (
        <div>
            <NavLink to={'/films/page/1'}>Вернутся на главную</NavLink>
            <div className="films-container">

                {likeList.length > 0 ? (
                    likeList.map((el) => (
                        <div key={el.kinopoiskId} className="films">
                            <button className="btnlike" onClick={() => dispatch(unLikes(el.kinopoiskId))}><IoMdClose /></button>
                            <img src={el.posterUrlPreview} alt={`${el.nameRu} poster`} />
                            <StarRating ratingKinopoisk={el.ratingKinopoisk} />
                            <div className="infoIsFilm">
                                <span className="nameFilm">{el.nameRu || el.nameOriginal}</span>
                                <div className="yearFilm">
                                    <strong>Год выпуска:</strong>
                                    <span>{el.year}</span>
                                </div>
                                <div className="genre">{el.genres[0].genre}</div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1 className="notLike">No likes yet.</h1> // Сообщение, если список пуст
                )
                }
                { }
            </div >
        </div>
    )
}
