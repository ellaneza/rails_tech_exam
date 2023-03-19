import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import Styled from './styled-css';
import ProductCard from './ProductCard.component';

function ProductList() {

  const previewTitles = [
    'Doughnuts and Doom',
    'The Bend Of Luck',
    'The Underwater Welder',
  ];

  return (
    <Container>
      <Styled.SectionRow text_align="center" style={Styled.rowSectionSubStyle}>
        <h1>Explore our Books</h1>
        <p>with our dedicated customer support team, you can rest easy knowing that we're doing everything we can to save you time, money, and stress</p>
      </Styled.SectionRow>
      <Row style={Styled.rowSectionSubStyle}>
        {
          previewTitles.map(
            (e , i) => {
              return (
                <Col md={4} key={i}>
                  <ProductCard title={e}/>
                </Col>
              )
            }  
          )
        }
      </Row>
    </Container>
  );
}

export default ProductList;