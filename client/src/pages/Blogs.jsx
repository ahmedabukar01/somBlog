import axios from 'axios';
import {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap';
import Posts from '../components/Posts';



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
       <h1 className='text-center my-3'>All Blogs...</h1>

    <Container>
      {blogs && blogs.map(blog=>(
        <Posts key={blog._id} post={blog}/>
       ))}
    </Container>

    </div>
  )
}

// pull request test

export default Blogs