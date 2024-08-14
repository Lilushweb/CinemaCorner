import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPayloadActionLikeAdd } from '../models/IPayloadActionLike'

export interface initialStateLike {
    like: {
        genres: {
            genre: string
        }[],
        imdbId: string,
        kinopoiskId: number,
        nameEn: string,
        nameOriginal: string,
        nameRu: string,
        posterUrl: string,
        posterUrlPreview: string,
        ratingImdb: number,
        ratingKinopoisk: number,
        type: string,
        year: number
    }[]
}

const initialState: initialStateLike = {
    like: []

}

const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        likes: (state, action: PayloadAction<IPayloadActionLikeAdd>) => {
            if (state.like.find((value) => value.kinopoiskId === action.payload.kinopoiskId) == undefined)
                state.like.push(action.payload)
        },
        unLikes: (state, action: PayloadAction<number>) => {
            // state.like.filter((value) => value.kinopoiskId === action.payload)
            const indexDelete = state.like.findIndex(likeFilms => likeFilms.kinopoiskId === action.payload)
            state.like.splice(indexDelete, 1)
        }
    }
})

export const { likes, unLikes, } = likeSlice.actions
export default likeSlice.reducer