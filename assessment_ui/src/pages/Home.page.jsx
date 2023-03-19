import React from 'react'
import { Row } from 'react-bootstrap';
import Details from '../components/Details.component';
import PageContent from '../components/PageContent.component';
import ProductPreview from '../components/ProductList.component';
import Comment from '../components/Comment.component';


import Styled from '../components/styled-css'
import FAQs from '../components/FAQs.component';

function Home() {
  return (
    <>
      <Row>
        <PageContent/>
      </Row>
      <Row>
        <Styled.HomeContainer>
          <ProductPreview/>
          <Details/>
          <Comment/>
        </Styled.HomeContainer>
      </Row>
      <Row>
        <FAQs/>
      </Row>
    </>
  );
}

export default Home;