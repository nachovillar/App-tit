import React from 'react';
import {Container, Image, Form, FormControl, Button, Card, Jumbotron, Row, Col} from 'react-bootstrap';
import './tipoUsuario.css';
import {NavBarSalir} from '../components/navBarSalir';
import {Link} from 'react-router-dom';

export const TipoUsuario = () =>(
<div>
    <div>
    <NavBarSalir/>
    </div>
    <div>
        <Container>
            <div >
                <Jumbotron className='thisjumbo'>
                    <div>
                        <Row>
                            <Col>
                                <div className='user' id='res'>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="/userIcons/res.svg" />
                                        <Card.Body>
                                            <Row>
                                                <Col/>
                                                    <Col>
                                                        <h3> Locales </h3>
                                                    </Col>
                                                <Col/>
                                            </Row>
                                            <Row>
                                                <Col/>
                                                <Col><Button variant="danger"><Link to="/Log2">Vamos a Servir!</Link></Button></Col>
                                                <Col/>
                                            </Row>
                                        </Card.Body>
                                    </Card> 
                                </div>
                            </Col>
                            <Col>
                                <div className='user' id='std'>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="/userIcons/user.svg" />
                                        <Card.Body>
                                            <Row>
                                                <Col/>
                                                <Col>
                                                    <h3> Usuario </h3>
                                                </Col>
                                                <Col/>
                                            </Row>
                                            <Row>
                                                <Col/>
                                                <Col><Button variant="danger"><Link to= "/TypUser/Log">Antojos?</Link></Button></Col>
                                                <Col/>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col>
                                <div className='user' id='deli'>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="/userIcons/delivery-guy.svg" />
                                        <Card.Body>
                                            <Col>
                                                <Row>
                                                    <Col/>
                                                        <Col><h3>Delivery</h3></Col>
                                                    <Col/>
                                                </Row>
                                                <Row>
                                                    <Col/>
                                                        <Col xl={true}><Button variant="danger"><Link to="/Log3">Pizza time</Link></Button></Col>
                                                    <Col/>    
                                                </Row>
                                            </Col>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Jumbotron>
            </div>
        </Container>
    </div>
</div>
)