import React from 'react'
import { Col, Container } from 'react-bootstrap';
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({Item}) => {

    return (
        <div>
            <Container>
                <Col><img src={Item.pictureUrl}/></Col>
                <Col>
                    <h3>{Item.title}</h3>
                    <p>{Item.description}</p>
                    <h4>${Item.price}</h4>
                    <ItemCount stock ={5} inital = {0}/>
                </Col>
            </Container>
        </div>
    )
}
