import {combineReducers, configureStore} from '@reduxjs/toolkit'
import  userReducer from './reducers/UserSlice'
import {filmsApi} from "../services/PostService.ts";
import filmsReduser from "../store/reducers/filmsSlice.ts"


export const rootReducer = combineReducers( {
    films: filmsReduser,
    [filmsApi.reducerPath]: filmsApi.reducer,
})



export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(filmsApi.middleware)
    })
}

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = typeof store.dispatch;
