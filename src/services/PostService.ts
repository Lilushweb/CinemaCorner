import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"





export const filmsApi = createApi({
    reducerPath: 'filmsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://kinopoiskapiunofficial.tech/'
    }),
    endpoints: (build) => ({
        filmAll: build.query({
            query: (page: number)=>({
                url: `api/v2.2/films?page=${page}`,
                method: 'GET',
                headers: {
                    'X-API-KEY': '9def1b59-95af-4bed-ba7a-7c03a501568e',
                    'Content-Type': 'application/json',
                },
            }),
        }),
        staff: build.query({
            query: (filmId: number) => ({
                url: `api/v1/staff/${filmId}`,
                method: 'GET',
                headers: {
                    'X-API-KEY': '9def1b59-95af-4bed-ba7a-7c03a501568e',
                    'Content-Type': 'application/json',
                }
            })
        })
    })
})



