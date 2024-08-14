import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateSearch {
    page: {
        name: string,
        id: number
    }[]
}

const initialState: InitialStateSearch = {
    page: [{
        name: '',
        id: 0
    }]
}

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        addFilms: (state, action: PayloadAction<{ name: string, id: number }>) => {
            state.page.push(action.payload)
        },

    },
});

export const { addFilms, } = filmsSlice.actions;
export default filmsSlice.reducer;