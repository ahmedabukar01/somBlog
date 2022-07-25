import { allBlogs, reset } from '../features/blogs/blogSlice';
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import { Button, Container } from 'react-bootstrap';
import Posts from '../components/Posts';
import Spinner from '../components/Spinner';
import AddPost from '../components/AddPost';



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
  
  return (
    <div className='blogs'>
       <div className="d-flex align-items-center justify-content-around">
        <h1 className='text-center my-3'>All Blogs...</h1>
        <Button>Add new Post</Button>
       </div>
       
       <AddPost />

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