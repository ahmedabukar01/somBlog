import axios from 'axios';
import {useState, useEffect} from 'react'



const Blogs = () => {
  const [blogs,setBlogs] = useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
     const res = await fetch('http://localhost:5000/posts');
     console.log('hi')
     console.log(res)
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