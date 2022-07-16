import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

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

        }
    }
})


export const {reset} = authSlice.actions;
export default authSlice.reducer