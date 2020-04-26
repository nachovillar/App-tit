import React from 'react';
import {NavBarProfile} from '../components/navBarProfile'
import './Pedir.css'
import { Container, Jumbotron, Row, Col, Card, Form, Accordion, Button } from 'react-bootstrap';

export const Pedir = ()=>(
    <div>
        <div>
            <NavBarProfile/>
        </div>
        <div>
            <Container>
                <div className='Content'>
                    <Jumbotron>
                        <Row>
                            <Col sm={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="/icons/mestizo.jpg" />
                                    <Card.Body>
                                    <Card.Title>Mestizo Sushi - Tabla sushi (30 piezas)</Card.Title>
                                        <Card.Text>
                                            $9.000 
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Row>
                                    <Col sm={2}>
                                        <Form.Label>
                                            Unidades
                                        </Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control size="sm" type="text" placeholder="1, 2, 3..." />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={4}>
                                        <Form.Label>Forma de Pago</Form.Label>  
                                    </Col>
                                    <Col >
                                        <Form.Control as="select" size="sm">
                                            <option>  </option>
                                            <option>Junaeb</option>
                                            <option>RedCompra</option>
                                            <option>Efectivo</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label>Comentarios</Form.Label>
                                        <Form.Control as="textarea" rows="3"></Form.Control>
                                    </Col>
                                </Row>
                                <Row>
                                    <Accordion fluid>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                                Retiro en Local
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <Row>
                                                    <div className='Grupo'>
                                                            <Col>
                                                                <Form.Group>
                                                                    <Form.Label>Nombre</Form.Label>
                                                                    <Form.Control size='sm'></Form.Control>
                                                                </Form.Group>
                                                            </Col>
                                                        </div>
                                                        <div className='Grupo'>
                                                            <Col>
                                                                <Form.Group>
                                                                    <Form.Label>Fono</Form.Label>
                                                                    <Form.Control size="sm"></Form.Control>
                                                                </Form.Group>
                                                            </Col>
                                                        </div>
                                                        <div>
                                                            <Col>
                                                                <Form.Label>Hora</Form.Label>
                                                                <Form.Control size="sm" as="select">
                                                                    <option>15:45</option>
                                                                    <option>12</option>
                                                                    <option>13</option>
                                                                </Form.Control>
                                                            </Col>
                                                        </div>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <Button variant="danger" size="sm" onClick= {(e) =>{Alarma();}}>Encargar</Button>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                                Servicio a Domicilio (Por Parte de Appetit Group ltda.)  
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>
                                                <Row>
                                                        <div className='Grupo'>
                                                            <Col>
                                                                <Form.Group>
                                                                    <Form.Label>Nombre</Form.Label>
                                                                    <Form.Control size='sm'></Form.Control>
                                                                </Form.Group>
                                                            </Col>
                                                        </div>
                                                        <div className='Grupo'>
                                                            <Col>
                                                                <Form.Group>
                                                                    <Form.Label>Fono</Form.Label>
                                                                    <Form.Control size="sm"></Form.Control>
                                                                </Form.Group>
                                                            </Col>
                                                        </div>
                                                        <div>
                                                            <Col>
                                                                <Form.Label>Direccion</Form.Label>
                                                                <Form.Control size="sm" >
                                                                </Form.Control>
                                                            </Col>
                                                        </div>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <Button variant="danger" size="sm" onClick= {(e) =>{Alarma();}}>Encargar</Button>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Row>
                            </Col>
                        </Row>
                    </Jumbotron>
                </div>
            </Container>
        </div>
    </div>
)

function Alarma() {
    alert("REVISA TU PERFIL PARA MÁS INFORMACIÓN");
  }