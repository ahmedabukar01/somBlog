import {Button, Form, Container} from 'react-bootstrap'

const AddPost = () => {
  return (
    <Container className="my-4">
        <Form>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' placeholder='Title'/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Body</Form.Label>
                <Form.Control type='text' placeholder='Body'/>
            </Form.Group>
            <Form.Group className="my-3 ">
                <Button variant="success" type="submit">Post</Button>
            </Form.Group>
        </Form>
    </Container>
  )
}

export default AddPost