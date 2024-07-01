import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { page: { [index: number]: any } } = {
    page: {
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
    }
}

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        setFilms: (state, action: PayloadAction<{ page: number, films: any }>) => {
            state.page[action.payload.page] = action.payload.films;
        },

    },
});

export const { setFilms, } = filmsSlice.actions;
export default filmsSlice.reducer;