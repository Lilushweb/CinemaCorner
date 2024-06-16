import {AppDispatch} from "../store.ts";
import axios from "axios";
import {IUser} from "../models/IUser.ts";
import {userSlise} from "./UserSlice.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) =>  {
//     try {
//         dispatch(userSlise.actions.userFetching())
//     const respons = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
//         dispatch(userSlise.actions.userFetchingSucces(respons.data))
//     } catch (error) {
//         let errorMessage = "Failed to do something exceptional";
//         if (error instanceof Error) {
//             errorMessage = error.message;
//         }
//         dispatch(userSlise.actions.userFetchingError(errorMessage));
//     }
// }
export  const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async  (_, thunkApi) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return response.data
        } catch (e){
            return thunkApi.rejectWithValue("Не удалось загрузить пользователей")
        }

    })