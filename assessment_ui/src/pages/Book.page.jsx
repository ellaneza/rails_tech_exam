import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, ListGroup, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

import Styled from '../components/styled-css'

function Book() {
  const { isbn } = useParams();
  const [loading, setLoading] = useState(true);
  const [bookData, setBookData] = useState(null);
  const [authors, setAuthors] = useState('');
  const [respError, setRespError] = useState(null);
  const [publisherData, setPublisherData] = useState(null);

  const getBookData = () => {
    axios.get('http://localhost:3000/api/v1/book/' + isbn)
      .then((resp) => {
        setBookData(resp.data.book);
        setAuthors(resp.data.authors)
        setPublisherData(resp.data.publisher);
      })
      .catch((err)=>{
        if (err.response.status === 404){
          setRespError(404);
        }
      });
    setLoading(false);
  }

  useEffect(()=>{
    getBookData();
  },[isbn]);

  return (
    <Container>
      <Row style={{...Styled.rowSectionSubStyle, ...{backgroundColor: '#f2f5f8'}}}>
      {
        loading ? 
          <Spinner animation="border" />
          : 
          <>
            {
              bookData && 
              <>
                <Col md={4}>
                  <Image fluid src={require('../assets/default-book.jpg')}/>
                </Col>
                <Col md={8}>
                  <ListGroup>
                    <ListGroup.Item>
                      <h2>{bookData.title}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h6>by {authors}</h6>
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup>
                    <ListGroup.Item><h6>Edition: {bookData.edition}</h6></ListGroup.Item>
                    <ListGroup.Item><h6>Price: {bookData.list_price}</h6></ListGroup.Item>
                    <ListGroup.Item><h6>ISBN: {bookData.isbn_13}</h6></ListGroup.Item>
                    <ListGroup.Item><h6>Publication Year: {bookData.publication_year}</h6></ListGroup.Item>
                    <ListGroup.Item><h6>Publisher: {publisherData}</h6></ListGroup.Item>
                  </ListGroup>
                </Col>
              </>
            }
            {
              respError === 404 && 
              <div style={{textAlign: 'center'}}>
                <h3>Oops!</h3>
                <p>Looks like we haven't registered that book yet!</p>
              </div>

            }
          </>
      }
      </Row>
    </Container>
  )
}

export default Book;