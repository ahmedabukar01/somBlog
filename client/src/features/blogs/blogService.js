import axios from 'axios'

const API_URL = 'http://localhost:5000/posts'
const USER_URL = 'http://localhost:5000/users/user'

// get all post
const getBlogs = async (token) => {

    const response = await axios.get(API_URL);

    // const newRes = await getUser(response.data.user);
    // console.log(newRes)

    if(response.data){
        localStorage.setItem('blogs', JSON.stringify(response.data));
    }


    return response.data
}

// get post's user
const getUser = async (id) =>{
    const res = await axios.post(USER_URL, id);
    return res.data;
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