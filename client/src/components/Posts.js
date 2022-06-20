import {Container, Row, Col, Card, ListGroup} from 'react-bootstrap'
import moment from 'moment'

const Posts = ({post}) => {
    const updatedDate = moment(post.updateAt).format('D-M-YYYY');
  return (
        <Row className='my-2'>
            <Col className="my-2 col" md={3}>
                <Card className="px-4 py-3 text-center"> 
                    <h5>{post.title}</h5>
                    <p>{post.body}</p>
                     Last updated: {updatedDate}
                </Card>
            </Col>
        </Row>
  )
}

export default Posts