import axios from 'axios';
import {useState, useEffect} from 'react'



const Blogs = () => {
  const [blogs,setBlogs] = useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
      try {
        console.log('hi')
        const res = await fetch('http://localhost:3000/posts');
        const posts = await res.json();

        console.log(posts)
        
      } catch (error) {
        console.log(error)
      }
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