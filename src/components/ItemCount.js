import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap';
import './ItemCount.css';

export const ItemCount = (props) => {

    const [cont,setCont] = useState(0);
    const addProduct = () =>{
        if (cont <props.stock) {
            setCont(cont+1);
        }
    }
    const removeProduct = () =>{
        if (cont> 0) {
            setCont(cont-1);
        }
    }
    return (
        <div>
            <Container className='item'>
                <Row>
                    <Col><Button variant="outline-dark" onClick={removeProduct}><RemoveIcon/></Button></Col>
                    <Col><h3 >{cont}</h3></Col>
                    <Col><Button variant="outline-dark" onClick={addProduct}><AddIcon/></Button></Col>
                </Row>
            </Container>
            <Container className='item'>
                <Row>
                    <Col><Button className='w-100' variant="outline-dark"> Agregar al carrito</Button></Col>
                </Row>
            </Container>
        </div>
    )
}
