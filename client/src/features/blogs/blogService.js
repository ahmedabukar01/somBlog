import axios from 'axios'

const API_URL = 'http://localhost:5000/posts'

// get all post
const getBlogs = async (token) => {
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // }

    const response = await axios.get(API_URL);

    if(response.data){
        localStorage.setItem('blogs', JSON.stringify(response.data));
    }

    return response.data
}

// add new post
const addPost = async (userData, token) =>{

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL,userData, config);

    return response.data

}
const blogService = {
    getBlogs,
    addPost
}

export default blogService