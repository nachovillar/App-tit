import React from 'react';
import './FAQ.css';
import {Accordion,Card,Container} from 'react-bootstrap';
import {NavBarHome} from '../components/navBarHome';


export const FAQ = ()=>(
    <div>
        <NavBarHome/>
        <Container>
            <div class="Title">
                <h1>Preguntas Frecuentes</h1>
            </div>
            <div  class="Questions">
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Que es Appetit
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                Es un proyecto ideado y hecho para el ramo de ingenieria web de la escuela en ingeniera en informatica
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            quien es Felipe garcia   
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                no se, tu dimelo ya no existe aca
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Como ordeno una comida  
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                Hello! I'm another body
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            cobertura   
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                actualmente no tenemos cobertura ya que es esto es un proyecto 
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>   
        </Container>
        
    </div>
)