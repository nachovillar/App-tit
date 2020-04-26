import React from 'react';
import { useState } from 'react';
import {NavBarProfile} from '../components/navBarProfile'
import './Reservar.css';

import { Container, Jumbotron, Row, Col, Card, Form, Button, Modal, Alert} from 'react-bootstrap';

import {Link} from 'react-router-dom';
import { handleShow } from '@babel/types';

export const Reservar = ()=>(
    <div>
        <div>
            <NavBarProfile/>
        </div>
        <div>
            <Container>
                <div className='RForms'>
                    <Jumbotron>
                        <Row>
                            <Col>
                                <div className='mestizzo'>
                                    <Card>
                                        <Card.Img variant="top" src={'/icons/Mestizzo.png'} />
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
                                            </Col>
                                        </Card.Body>
                                    </Card>

                                </div>
                            </Col>
                            <Col md={8}>
                                <div className='formulario'>
                                    <Col>
                                        <Row>
                                            <div className='Grupo'>
                                                <Col>
                                                    <Form.Group>
                                                        <Form.Label>Nombre</Form.Label>
                                                        <Form.Control></Form.Control>
                                                    </Form.Group>
                                                </Col>
                                            </div>
                                            <div className='Grupo'>
                                                <Col>
                                                    <Form.Group>
                                                        <Form.Label>Fono</Form.Label>
                                                        <Form.Control></Form.Control>
                                                    </Form.Group>
                                                </Col>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className='Grupo'>
                                                <Col>
                                                    
                                                    <Form.Label>Mesa Para</Form.Label>
                                                    <Form.Control as="select">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>Son mas Personas</option>

                                                    </Form.Control>
                                                                                                    
                                                </Col>
                                            </div>
                                            
                                                <Col>
                                                    <div className='tiempo'>
                                                        <Form.Label>Hora</Form.Label>
                                                        <Row>
                                                            <Col>
                                                                <Form.Control as="select">
                                                                    <option>15:45</option>
                                                                    <option>12</option>
                                                                    <option>13</option>
                                                                    <option>14</option>
                                                                    <option>15</option>
                                                                    <option>16</option>
                                                                    <option>17</option>
                                                                    <option>18</option>
                                                                    <option>19</option>
                                                                    <option>20</option>
                                                                </Form.Control>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                        </Row>
                                        <Row>
                                            <Col>   
                                                <Form.Group>
                                                    <Form.Label>Peticiones o Comentarios</Form.Label>
                                                    <div className="coment">
                                                        <Form.Control as="textarea" rows="3"></Form.Control>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Button variant="success" onClick= {(e) =>{Alarma();}}>Aceptar</Button>
                                            </Col>
                                            <Col>
                                                <Button variant="danger"><Link to="/Search+Result/Res/Mestizzo/Tabla+sushi">Cancelar</Link></Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </Jumbotron>
                </div>
            </Container>
        </div>
    </div>
)
function Alarma() {
    alert("LISTO! TU PEDIDO ESTÁ RESERVADO, ESPERA TU LLAMADO");
  }
