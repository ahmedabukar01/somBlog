import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import blogSlice from '../features/blogs/blogSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        blogs: blogSlice
    }
})