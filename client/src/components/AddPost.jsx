import {Button, Form, Container} from 'react-bootstrap'
import {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {addPost, reset} from '../features/blogs/blogSlice'
import {toast} from 'react-toastify'
import { allBlogs } from '../features/blogs/blogSlice'
import Spinner from '../components/Spinner'

const AddPost = () => {
    const [postData, setPostData] = useState({
        title: '',
        body: '',
    })
    const dataHandler = (e)=>{
        setPostData(prevData => ({
            ...prevData, [e.target.name]: e.target.value
        }) )
    }
    
    const { title, body} = postData;

    const dispatch = useDispatch();
    const navigate = useNavigate();
                                                 
    const {isError, isSuccess, isLoading, message} = useSelector(state => state.blogs)

    // useEffect(()=>{
    //     if(isError){
    //         toast.error(message)
    //     }

    //     if(isSuccess){
            
    //     }

    //     return ()=>{
    //         dispatch(reset())
    //     }
    // },[isError, message, dispatch])

    const onSubmit = (e)=>{
        e.preventDefault();
    
        if(isError){
            toast.error(message);
        }
        if(isSuccess){
            const userData = {title,body}
            dispatch(addPost(userData));
            dispatch(allBlogs())

        }

    }

    if(isLoading){
        return <Spinner />
    }

  return (
    <Container className="my-4">
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' placeholder='Title' name="title" onChange={dataHandler}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Body</Form.Label>
                <Form.Control type='text' placeholder='Body' name="body" onChange={dataHandler}/>
            </Form.Group>
            <Form.Group className="my-3 ">
                <Button variant="success" type="submit">Post</Button>
            </Form.Group>
        </Form>
    </Container>
  )
}

export default AddPost