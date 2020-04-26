import React from 'react';
import {NavBarProfile} from '../components/navBarProfile'
import './ResMestizzo.css'

import {Link} from 'react-router-dom';

import {Jumbotron,Container, Card, Row, Col,Button, CardDeck} from 'react-bootstrap';


export const ResMestizzo = ()=>(
    <div>
        <div>
            <NavBarProfile/>
        </div>
        <div class='budy'>
            <Container>
                <div>
                    <Jumbotron>
                        <div class='ResInfo'>
                            <Row md>
                                <Col md={4} >
                                    <Card className="mt-1">
                                        <Card.Img className='prod' variant="top" src={'/icons/Mestizzo.png'} />
                                        <Card.Body>
                                            <Card.Title>Mestizzo</Card.Title>
                                            <Card.Text>
                                                <ul>
                                                    <li>Dir: CALLE BRASIL 2089, Valparaíso</li>
                                                    <li>Fono: 85425333</li>
                                                    <li>@: jesus.cafeteria@hotmail.com</li>
                                                </ul>
                                                    
                                            </Card.Text>
                                            <Col>
                                                <Row>
                                                    <Card.Text>
                                                        <div className='Center'>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star"></span>
                                                            <span class="fa fa-star"></span>
                                                            <br/>
                                                        </div>
                                                    </Card.Text>
                                                </Row>
                                                <Row>
                                                    <Button size='lg' variant="danger" className="reservar"><Link to='/Reserve/Mestizzo'>Reservar </Link></Button>
                                                </Row>
                                            </Col>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Row>
                                        <Card>
                                            <Card.Body>
                                                <div className='Descripcion'>
                                                    <Card.Title>Descripcion</Card.Title>
                                                    <Card.Text>
                                                        puedes pagar toda la carta con tarjeta juaneb ,red compra y efectivo la carta de sushi, sandwich, papas fritas y completo
                                                    </Card.Text>    
                                                </div>                                                
                                            </Card.Body>
                                        </Card>
                                    </Row>
                                    <Row>
                                        <div className="item">
                                        <Card >
                                            <Row>
                                                <Col>
                                                    <Card.Img variant="top" src={'/icons/Mestizo.jpg'} />
                                                </Col>
                                                <Col>
                                                    <Card.Body>
                                                        <Card.Title>Tabla Picoteo (30 piezas)</Card.Title>
                                                        <Card.Text>
                                                            <ul>
                                                                <li>Base de arroz</li>
                                                                <li>Cobertura de Nori, Panko y tempura a eleccion</li>
                                                                <li>rellenos de Queso Filadelfia, cebollin, palta, pollo, carne y camaron a eleccion</li>
                                                            </ul>
                                                        </Card.Text>
                                                        <div className='boton'>
                                                            <Row>
                                                                <Col md={{offset: 8 }}>
                                                                    <Button variant="danger"><Link to="/Order14167605/Mestizzo">Pedir</Link></Button>
                                                                    
                                                                </Col>
                                                            </Row>     
                                                        </div>                         
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                        </div>
                                    </Row>
                                </Col>
                            </Row>
                            <div className='Review'>
                                <h3>
                                    Reseñas <span class="fa fa-star checked"></span>
                                </h3>
                                <Row>
                                    <Col>
                                        <CardDeck>
                                            <Card>
                                                <Card.Body>
                                                <Card.Title>CrazyCatLady</Card.Title>
                                                    <Card.Text>
                                                        Rico y suavesito tal cual como me gusta
                                                    </Card.Text>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <small className="text-muted"><span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star"></span>
                                                            <span class="fa fa-star"></span></small>
                                                </Card.Footer>
                                            </Card>
                                            <Card>
                                                <Card.Body>
                                                <Card.Title>Carlos Gutierres</Card.Title>
                                                    <Card.Text>
                                                        GUGUL COMO ESCRIBIR UNA RESEÑA
                                                    </Card.Text>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <small className="text-muted">
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
                                                    </small>
                                                </Card.Footer>
                                            </Card>
                                        </CardDeck>
                                    </Col>    
                                </Row>    
                            </div>                                    
                        </div>
                    </Jumbotron>
                </div>
            </Container>
        </div>
    </div>
);

