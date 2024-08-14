import React, { useEffect, useState } from 'react'
import '../style/navigate.css'
import { NavLink } from "react-router-dom"
import { useAppSelector } from '../store/hooks/redux'
import DropDownFilmList from "./DropDownFilmList"
import useOutsideClick from "../hooks/useOutsideClick"


const Navigate = () => {
    const searchArr = useAppSelector((state) => state.films.page)
    const [searchText, setSearchText] = useState<string>('')
    const [filmList, setFilmList] = useState<{ name: string, id: number }[]>(searchArr)
    const handleCloseClick = useOutsideClick(() => setFlag(false))
    const [flag, setFlag] = useState<boolean>(false)
    const filtersFilm = ((text: string, arrObj: { name: string, id: number }[]) => {
        if (!text) return arrObj
        return arrObj.filter((obj) => obj.name.toLowerCase().includes(searchText.toLowerCase()))
    })
    console.log(filmList)

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredSearch = filtersFilm(searchText, searchArr)
            setFilmList(filteredSearch)
        }, 300)
        return () => clearTimeout(Debounce)
    }, [searchText])


    return (
        <nav>
            <div className="pageNavigateTop">
                <NavLink className="page" to={`/films/page/${1}`}>1</NavLink>
                <NavLink className="page" to={`/films/page/${2}`}>2</NavLink>
                <NavLink className="page" to={`/films/page/${3}`}>3</NavLink>
                <NavLink className="page" to={`/films/page/${4}`}>4</NavLink>
                <NavLink className="page" to={`/films/page/${5}`}>5</NavLink>
            </div>
            <input
                className="search"
                placeholder="Search film"
                onChange={((e) => {
                    setSearchText(e.target.value)
                    setFlag(true)
                })}
            ></input>
            {flag &&
                <div className='dropDownFilmList' ref={handleCloseClick}>
                    <DropDownFilmList arrFilm={filmList} />
                </div>
            }
            <NavLink className='like' to={'/films/like'}>Понравившиеся фильмы</NavLink>
        </nav>
    )
}

export default Navigate