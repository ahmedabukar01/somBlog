import { allBlogs, reset } from '../features/blogs/blogSlice';
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {useState, useEffect} from 'react'
import { Container, Spinner } from 'react-bootstrap';
import Posts from '../components/Posts';



const Blogs = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state)=> state.auth.user)
  const {blogs,isError, isLoading, message} = useSelector((state)=> state.blogs)

  useEffect(()=>{

    if(!user){
      navigate('/login')
    }
    if(isError){
      console.log(message)
    }

    dispatch(allBlogs());

    return ()=>{
      dispatch(reset())
    }

  },[user, isError, message, navigate, dispatch])

  if(isLoading){
    return <Spinner />
  }
  console.log(typeof blogs, blogs)
  return (
    <div className='blogs'>
       <h1 className='text-center my-3'>All Blogs...</h1>

    <Container>
      {
      blogs.length > 0 ? ( blogs.map(blog=>(
        <Posts key={blog._id} post={blog}/>
       ))) : (<h3>you dont have any posts</h3>)
       }
    </Container>

    </div>
  )
}

// pull request test

export default Blogs