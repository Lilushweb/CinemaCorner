import {useEffect, useState} from "react";
import {useFilmAllQuery} from "../../services/PostService.ts";

import {IFilmsInfinity} from "../../models/IFilmsInfinity.ts";
import {useDispatch} from "react-redux";
import {useAppDispatch} from "./redux.ts";
import {setFilms} from "../reducers/filmsSlice.ts";



export const useInfiniyLode = (page: number, pageSize: number):  void => {
    const dispatch = useAppDispatch()
    const {data, isLoading, error} = useFilmAllQuery(page);
    dispatch(setFilms({ page, films: data }));
    if(page == pageSize) return data;
    return useInfiniyLode(page+1, pageSize)
};