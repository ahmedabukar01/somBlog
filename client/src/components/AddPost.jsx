import {Button, Form, Container} from 'react-bootstrap'

const AddPost = () => {
  return (
    <div>
        <h2>Add New Post</h2>
        <Form>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' placeholder='Title'/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Body</Form.Label>
                <Form.Control type='text' placeholder='Body'/>
            </Form.Group>
            <Form.Group>
                <Button variant="primary" type="submit">Post</Button>
            </Form.Group>
        </Form>
    </div>
  )
}

export default AddPost