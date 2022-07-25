import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import blogService from './blogService';

const initialState = {
    blogs: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// get blogs
export const allBlogs = createAsyncThunk('blogs/blogs', async (_, thunkApi)=>{
    try {
        const token = thunkApi.getState().auth.user.token;
        return blogService.getBlogs(token)
    } catch (error) {
        const message = (error.response && error.response.data && 
            error.response.data.message) || error.message || error.toString();
            return thunkApi.rejectWithValue(message);

    }
})

// add Blog
export const addPost = createAsyncThunk('blogs/add', async (userData, thunkApi)=>{
    try {
        const token = thunkApi.getState().auth.user.token;
        console.log(token, 'there was token')
        return blogService.addPost(userData,token);
    } catch (error) {
        const message = (error.response && error.response.data && 
            error.response.data.message) || error.message || error.toString();
            return thunkApi.rejectWithValue(message);
        
    }
})

export const blogSlice = createSlice({
    name: 'blogs',
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
        .addCase(allBlogs.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(allBlogs.rejected, (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload

        })
        .addCase(allBlogs.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.blogs = action.payload
        })
        .addCase(addPost.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(addPost.rejected, (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload

        })
        .addCase(addPost.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.blogs.push(action.payload)
        })
    }
})


export const {reset} = blogSlice.actions;
export default blogSlice.reducer