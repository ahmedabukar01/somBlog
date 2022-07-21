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

// register
export const register = createAsyncThunk('auth/register', async (user, thunkApi)=>{
    try {
        return authServices.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && 
            error.response.data.message) || error.message || error.toString();
            return thunkApi.rejectWithValue(message);

    }
})

// login 
export const login = createAsyncThunk('auth/login', async (user, thunkApi)=>{
    try {
        return authServices.login(user)
    } catch (error) {
        const message = (error.response && error.response.data && 
            error.response.data.message) || error.message || error.toString();
            return thunkApi.rejectWithValue(message);

    }
})

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
    },
    extraReducers: (builder) =>{
        builder
        .addCase(register.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(register.rejected, (state,actions)=>{
            state.isLoading = false
            state.isError = true
            state.message = actions.payload

        })
        .addCase(register.fulfilled, (state,actions)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = actions.payload
        })
        .addCase(login.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(login.rejected, (state,actions)=>{
            state.isLoading = false
            state.isError = true
            state.message = actions.payload

        })
        .addCase(login.fulfilled, (state,actions)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = actions.payload
        })
    }
})


export const {reset} = authSlice.actions;
export default authSlice.reducer