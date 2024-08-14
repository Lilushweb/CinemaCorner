// import { useFilmAllQuery } from "../../services/FIlmsServerApi.ts";
// import { useAppDispatch } from "./redux.ts";
// import { setFilms } from "../reducers/filmsSlice.ts";



// export const useStateSearch = (page: number, pageSize: number): void => {
//     const dispatch = useAppDispatch()
//     const { data } = useFilmAllQuery(page);
//     dispatch(setFilms({films: data }));
//     if (page == pageSize) return data;
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     return useStateSearch(page + 1, pageSize)
// };