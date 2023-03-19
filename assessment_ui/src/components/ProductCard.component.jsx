import React from 'react'
import { Card, Button } from 'react-bootstrap';

function ProductCard(props) {
    const {title} = props;
    return (
        <Card style={{textAlign: 'left', color: 'white', background: 'rgba(1, 2, 3, 0)'}}>
            <Card.Img variant="top" src={require('../assets/' + title.toLowerCase().replace(/ /g,"-") + '.png')}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <Button>View Book Details ›</Button>
            </Card.Footer>
        </Card>
    );
}

export default ProductCard;