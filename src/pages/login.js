import React from 'react';
import {NavBarSalir} from '../components/navBarSalir.js';
import {Jumbotron, Container, Form, Button} from 'react-bootstrap';
import './login.css';
import {Link} from 'react-router-dom';


export const Log = ()=>(
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
                                <Form.Label>Correo Eectrónico</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                    
                            </Form.Group>

                             <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            
                            
                            <Button variant="primary" type="submit">
                                <Link to="/HomePage">Entrar</Link>
                            </Button>
                        </Form>
                        </div>
                    </Jumbotron>
                </div>
            </Container>
        </div>
    </div>
)