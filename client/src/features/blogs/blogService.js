import axios from 'axios'

const API_URL = 'http://localhost:5000/posts'

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

const blogService = {
    getBlogs
}

export default blogService