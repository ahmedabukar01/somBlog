import {Form, Button, Container} from 'react-bootstrap'

const Login = () => {
  return (
    <Container md={4}>
        <Form className='form py-3'>
            <Form.Group className="input-group">
                <Form.Control type="email" 
                    placeholder='Email'
                    className="mb-3"
                    name="email" 
                    required
                    />
            </Form.Group>
            <Form.Group className="input-group">
                <Form.Control type="password" 
                    placeholder='Password'
                    className="mb-3"
                    name="password"
                    required
                    />
            </Form.Group>
            <Button variant='primary' type='submit' className="my-3 mx-3">Submit</Button>
        </Form>
    </Container>
  )
}

export default Login