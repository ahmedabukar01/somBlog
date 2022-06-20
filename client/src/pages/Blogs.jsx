import axios from 'axios';
import {useState, useEffect} from 'react'



const Blogs = () => {
  const [blogs,setBlogs] = useState(null);

  useEffect(()=>{
    const fetchData = async () =>{
     const res = await axios.get('http://localhost:5000/posts');
     setBlogs(res.data.posts);
    }

    fetchData();
  },[])

  console.log(blogs)

  return (
    <div className='blogs'>
       <h1>All Blogs...</h1>

       {blogs && blogs.map(blog=>(
        <h3>{blog.body}</h3>
       ))}

    </div>
  )
}

export default Blogs