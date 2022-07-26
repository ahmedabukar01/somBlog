import {Container, Row, Col, Card, ListGroup} from 'react-bootstrap'
import moment from 'moment'
import authServices from '../features/auth/authServices'
import { useEffect } from 'react'

const Posts = ({post}) => {

    const updatedDate = moment(post.updateAt).format('D-M-YYYY');
  return (
        <Row className='my-2'>
            <Col className="my-2 col" md={3} sm={6}>
                <Card className="px-4 py-3 text-center"> 
                   <h5>name</h5>
                    <h6>{post.title}</h6>
                    <p>{post.body}</p>
                     <small>Last updated: {updatedDate}</small>
                </Card>
            </Col>
        </Row>
  )
}

export default Posts