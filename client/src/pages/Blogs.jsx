import axios from 'axios';
import {useState, useEffect} from 'react'



const Blogs = () => {
  const [blogs,setBlogs] = useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
     const res = await axios.get('http://localhost:5000/posts');
     console.log('this is me', res.data)
    }

    fetchData();
  },[])

  return (
    <div className='blogs'>
       <h1>All Blogs...</h1>

    </div>
  )
}

export default Blogs