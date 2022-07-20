import {useState, useEffect} from 'react'
import {toast} from 'react-toastify'
import {useDispatch, useSelector} from 'react-redux'
import {reset, register} from '../features/auth/authSlice'
import {useNavigate} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import Spinner from '../components/Spinner'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const {name, email, password, password2} = formData;

    // onChane
    const onChange = (e) =>{
        setFormData(prevData => ({
            ...prevData, [e.target.name] : e.target.value
        }))
    }

    // initiate somethings
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {user, isError, isLoading, isSuccess, message} = useSelector((state)=> state.auth);

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user){
            navigate('/')
        }
        dispatch(reset)

    },[user, isError, isLoading, isSuccess, message, dispatch, navigate])

    const submitForm = async (e) =>{
        e.preventDefault();

        // userdata 
        if(password !== password2){
            toast.error('passwords did not match !')
        } else{
            const userData = {name,email,password}
            dispatch(register(userData))
        }
    }
    
    if(isLoading) {
        return <Spinner />
    }

  return (
    <div className='register'>
        <h1>Register</h1>
        <p>Welcome please create new account</p>

        <Form className='form py-3' onSubmit={submitForm}>
            <Form.Group className="input-group">
                <Form.Control type="text" 
                    placeholder='Name'
                    className="mb-3"
                    name="name"
                    required
                    value={name}
                    onChange={onChange}
                    />
            </Form.Group>
            <Form.Group className="input-group">
                <Form.Control type="email" 
                    placeholder='Email'
                    className="mb-3"
                    name="email" 
                    required
                    value={email}
                    onChange={onChange}
                    />
            </Form.Group>
            <Form.Group className="input-group">
                <Form.Control type="password" 
                    placeholder='Password'
                    className="mb-3"
                    name="password"
                    required
                    value={password}
                    onChange={onChange}
                    />
            </Form.Group>
            <Form.Group className="input-group">
                <Form.Control type="password" 
                    className="mb-3"
                    placeholder='Confirm password'
                    name="password2" 
                    required
                    value={password2}
                    onChange={onChange}
                    />
            </Form.Group>
            <Button variant='primary' type='submit' className="my-3 mx-3">Submit</Button>
        </Form>
    </div>
  )
}

export default Register