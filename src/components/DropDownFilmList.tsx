import React from 'react'
import '../style/dropDownFilmList.css'
import { useNavigate } from 'react-router-dom';

interface IDropDownFilmListProps {
  arrFilm: {
    id: number,
    name: string;
  }[]

}

export default function DropDownFilmList({ arrFilm }: IDropDownFilmListProps) {
  const navigate = useNavigate()
  const handleClickSearchFilm = (index: number) => {
    navigate(`/films/${arrFilm[index].id}`, { replace: true, state: { id: arrFilm[index].id } })
  }
  return (
    <>
      {arrFilm.length > 1 &&

        arrFilm
          .filter(value => value.name != '')
          .map((el, i) =>
            <button
              className='searchName'
              key={el.id}
              onClick={() => handleClickSearchFilm(i)}>
              {el.name}
            </button>
          )
      }
    </>
  )
}
