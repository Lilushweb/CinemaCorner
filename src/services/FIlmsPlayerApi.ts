import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const filmsApiPlayer = createApi({
    reducerPath: 'filmsApiPlayer',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://kinobox.tv/api'
    }),
    endpoints: (build) => ({
        PlayerSources: build.query({
            query: (kinopoiskID: number | undefined) => ({
                url: `/players?kinopoisk=${kinopoiskID}`,
                method: 'GET',
            }),
        }),
    })
})