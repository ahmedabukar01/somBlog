import { useState } from 'react';
import {Form, Button, Container} from 'react-bootstrap'

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

    console.log(credentials);
  }

  // submit email and password
   const submitForm = async (e) =>{
    e.preventDefault();

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