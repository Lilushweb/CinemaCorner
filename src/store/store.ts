import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { filmsApi } from "../services/FIlmsServerApi"
import { filmsApiPlayer } from "../services/FIlmsPlayerApi"
import filmsReducer from "./reducers/filmsSlice"
import likeReducer from "./reducers/likeSlice"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const likePersistConfig = {
    key: 'like',
    version: 1,
    storage,
}

const persistedLikeReducer = persistReducer(likePersistConfig, likeReducer)

const rootReducer = combineReducers({
    like: persistedLikeReducer,
    films: filmsReducer,
    [filmsApiPlayer.reducerPath]: filmsApiPlayer.reducer,
    [filmsApi.reducerPath]: filmsApi.reducer,
})


const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(
                filmsApi.middleware,
                filmsApiPlayer.middleware
            ),
    })
}

const store = setupStore()

export const persistor = persistStore(store)
export default store

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']