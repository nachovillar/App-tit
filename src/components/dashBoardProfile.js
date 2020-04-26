import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import {Pedidos} from './Pedidos';

import {Reservas} from './Reservas'
 
export const dashBoardProfile = () =>(
    <div >
        <Accordion defaultActiveKey='0'>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey='0'>
                        <h4>Pedidos 📝</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='0'>
                        <Card.Body>
                            <Pedidos/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card.Header>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey='1'>
                        <h4>Reservas 📘</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='1'>
                        <Card.Body>
                            <Reservas/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card.Header>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey='2'>
                        <h4>Créditos💲</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='2'>
                        <Card.Body>
                            
                        </Card.Body>
                    </Accordion.Collapse>
                </Card.Header>
            </Card>
        </Accordion>
    </div>
)