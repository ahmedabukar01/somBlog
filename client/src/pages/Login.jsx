import { useState, useEffect } from 'react';
import {Form, Button, Container, Spinner} from 'react-bootstrap'
import {login, reset} from '../features/auth/authSlice';
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { toast } from 'react-toastify';

const Login = () => {

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  // input handler
  const inputHandler = (e) =>{
    setCredentials(prevCreden => (
      {
        ...prevCreden, [e.target.name]: e.target.value
      }
    ));

  }

  const {email, password} = credentials;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user,isError, isLoading, isSuccess, message} = useSelector(state=> state.auth);

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }
    if(isSuccess){
      navigate('/')
    }

    dispatch(reset())
  },[user, isError, message, dispatch])

  // submit email and password
   const submitForm = async (e) =>{
    e.preventDefault();

    const userData = {email, password};
    dispatch(login(userData));
   }

   if(isLoading){
    return <Spinner />
   }
  return (
    <Container md={4} className='text-center'>
      <h1 className='my-2'>Please Login</h1>
        <Form className='form py-3' onSubmit={submitForm}>
            <Form.Group className="input-group">
                <Form.Control type="email" 
                    placeholder='Email'
                    className="mb-3"
                    name="email" 
                    required
                    onChange={inputHandler}
                    />
            </Form.Group>
            <Form.Group className="input-group">
                <Form.Control type="password" 
                    placeholder='Password'
                    className="mb-3"
                    name="password"
                    required
                    onChange={inputHandler}
                    />
            </Form.Group>
            <Button variant='primary' type='submit' className="my-3 mx-3">Submit</Button>
        </Form>
    </Container>
  )
}

export default Login