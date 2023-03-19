import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';

import Styled from './styled-css'

function Details() {

    const cardData = [
        {
            icon: 'package-box',
            title: 'All textbook rentals come with free return shipping.',
        },
        {
            icon: 'help',
            title: 'Dedicated customer support and help portal.',
        },
        {
            icon: 'piggy-bank',
            title: 'Buy or rent cheap textbooks & save up to $500 per year!',
        },
    ]

    return (
        <Container style={{color: 'white'}}>
            <Styled.SectionRow text_align="left" style={Styled.rowSectionSubStyle}>
                <p><small>Lorem Ipsum</small></p>
                <h2>3 Reasons To Shop With Us</h2>
            </Styled.SectionRow>
            <Row style={Styled.rowSectionSubStyle}>
                {
                    cardData.map((e, i)=>{
                        return (
                            <Col md={4} key={i}>
                                <Card style={{background: 'rgba(6, 26, 54, 0)'}}>
                                    <Styled.DetailsCardImg variant="top" src={require('../assets/' + e.icon.toLowerCase().replace(/ /g,"_") + '.svg')}/>
                                    <Card.Body>
                                        <Card.Title>{e.title}</Card.Title>
                                        <Card.Text>Arcu dictum varius duis at consectetur lorem donec massa sapien. Nunc non blandit massa enim nec dui nunc. At auctor urna nunc id.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    );
}

export default Details;