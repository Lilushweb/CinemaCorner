import { createSlice } from '@reduxjs/toolkit';

const filmsSlice = createSlice({
    name: 'films',
    initialState: {
        items: [],
    },
    reducers: {
        setFilms: (state, action) => {
            state.items = action.payload;
        },

    },
});

export const { setFilms, } = filmsSlice.actions;
export default filmsSlice.reducer;