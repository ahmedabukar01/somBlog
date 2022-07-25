import {Button, Form, Container} from 'react-bootstrap'
import {useState } from 'react'

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
    console.log(title,body)
  return (
    <Container className="my-4">
        <Form>
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