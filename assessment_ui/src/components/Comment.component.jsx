import React from 'react'
import { Card, Container, Col } from 'react-bootstrap';
import usrIcon from '../assets/user.png';
import binanceLogo from "../assets/logo-binance.svg";
import stars from "../assets/star.svg";


import Styled from './styled-css';

function BoilerPlate() {
  return (
    <Container>
        <Styled.SectionRow text_align="center" style={{...Styled.rowSectionSubStyle, ...{paddingTop: '80px'}}}  >
            <h4>Andrew Santellan</h4>
            <p>Product Manageer, Binance</p>
            <Col md={{span:4, offset: 4}}>
                <img src={binanceLogo} />
                Binance
            </Col>
            <Col md={{span: 10, offset: 1}}>
                <Card>
                    <Styled.CommentCardImg variant="top" src={usrIcon}/>
                    <Card.Text>
                        Aliquam etiam erat velit scelerisque. Fringilla ut morbi tincidunt augue interdum velit euismod. Sagittis vitae et leo duis. Quis varius quam quisque id diam. Id velit ut tortor pretium viverra suspendisse potenti nullam. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum.
                    </Card.Text>
                    <Card.Footer>
                        <img src={stars} />
                    </Card.Footer>
                </Card>
            </Col>
            
        </Styled.SectionRow>
    </Container>
  );
}

export default BoilerPlate;