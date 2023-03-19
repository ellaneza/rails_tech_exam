import React from 'react'
import { Button, Row, Col } from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';
import heroIllustration from "../assets/hero-illustration.svg"
import mainImg from "../assets/group-13597.png"
import Styled from './styled-css'

function PageContent() {
  const mainImgStyle = {
    height: 'auto',
    width: '100%'
  }
                    
  const clients = ['Binance', 'Bitcoin', 'Solana', 'Ethereum', 'Tether', 'XRP'];

  return (
    <Styled.MainContainer>
      <Styled.SectionRow text_align="left" style={Styled.rowSectionSubStyle}>
        <Col style={Styled.columnCenteredText} md={{span: '3', offset: '2'}}>
          <h1>The Cheapest Textbooks</h1>
          <h3>Save Up To 90% On Millions Of Titles</h3>
          <p>Pellentesque adipiscing commodo elit at imperdiet dui. Nunc sed blandit libero volutpat sed. Ornare massa eget egestas purus viverra.</p>
          <Button>Get Started <ChevronRight/></Button>
        </Col>
        <Col md={6}>
          <img src={heroIllustration}></img>
        </Col>
      </Styled.SectionRow>
      <Styled.SectionRow text_align="left" style={Styled.rowSectionSubStyle}>
        <Col md={{span: '4', offset: '2'}}>
          <img style={mainImgStyle} src={mainImg}></img>
        </Col>
        <Col style={Styled.columnCenteredText} md={{span: '3'}}>
          <h3>Our Commitment</h3>
          <p>Purus in massa tempor nec feugiat nisl pretium fusce id. Morbi enim nunc faucibus a. Ultricies mi quis hendrerit dolor magna. Ullamcorper velit sed ullamcorper morbi tincidunt. Sem nulla pharetra diam sit amet nisl suscipit adipiscing.</p>
          <Button>Learn More <ChevronRight/></Button>
        </Col>
      </Styled.SectionRow>
      <Styled.SectionRow text_align="center" style={Styled.rowSectionSubStyle}>
        <Styled.SubContainer>
          <Row>
            <h1>Trusted By Our Awesome Clients</h1>
          </Row>
          <Row>
            {
              clients.map((e, i)=>{
                return(
                  <Col md={2} key={i}>
                    <img style={{height: '100%', marginRight: '10px'}} alt="" src={require('../assets/logo-' + e.toLowerCase() + '.svg')}></img>
                    <a style={{fontSize: '20px', fontWeight: 'bold'}}>{e}</a>
                  </Col>
                )
              })
            }
          </Row>
        </Styled.SubContainer>
      </Styled.SectionRow>
    </Styled.MainContainer>
  );
}

export default PageContent;