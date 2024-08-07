import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { filmsApi } from "../services/FIlmsServerApi";
import { filmsApiPlayer } from "../services/FIlmsPlayerApi"


const rootReducer = combineReducers({
    [filmsApiPlayer.reducerPath]: filmsApiPlayer.reducer,
    [filmsApi.reducerPath]: filmsApi.reducer
})

export const setupStore = () => {


    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(filmsApi.middleware, filmsApiPlayer.middleware)
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
