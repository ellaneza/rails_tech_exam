import React from 'react'
import { Accordion, Container, Row } from 'react-bootstrap';

import Styled from './styled-css'

function FAQs() {
  return (
    <Styled.FAQsContainer>
        <Styled.SectionRow text_align="center" style={Styled.rowSectionSubStyle}>
            <h1>Frequently Asked Questions</h1>
            <Styled.CenteredAccordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Dedicated customer support and help portal</Accordion.Header>
                    <Accordion.Body>
                        with our dedicated customer support team, you can rest easy knowing that we're doing everything we can to save you time, money, and stress
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Volutpat est velit egestas dui id ornare arcu.</Accordion.Header>
                    <Accordion.Body>
                    Volutpat est velit egestas dui id ornare arcu. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Sit amet est placerat in. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Nullam non nisi est sit amet facilisis magna etiam tempor. Habitant morbi tristique senectus et netus et malesuada. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Hac habitasse platea dictumst vestibulum..
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Styled.CenteredAccordion>
        </Styled.SectionRow>
    </Styled.FAQsContainer>
  );
}

export default FAQs;