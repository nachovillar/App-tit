import React from 'react';
import {NavBarSalir} from '../components/navBarSalir';
import {Jumbotron, Container, Form, Button} from 'react-bootstrap';
import './login.css';
import {Link} from 'react-router-dom';


export const Log2 = ()=>(
    <div>
        <div>
        <NavBarSalir/>
        </div>
        <div>
            <Container >
                <div class = "cuerpo">
                    <Jumbotron fluid>
                        <div>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Correo Electrónico</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                    
                            </Form.Group>

                             <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            
                            
                            <Button variant="primary" type="submit">
                                <Link to="/Log2/Restaurant">Entrar</Link>
                            </Button>
                        </Form>
                        </div>
                    </Jumbotron>
                </div>
            </Container>
        </div>
    </div>
)