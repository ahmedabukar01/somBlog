import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authServices from './authServices';

const user = localStorage.getItem('user');

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) =>{
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.message = ''
        }
    }
})


export const {reset} = authSlice.actions;
export default authSlice.reducer