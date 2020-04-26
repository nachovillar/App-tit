import React from 'react';
import {NavBarProfile} from '../components/navBarProfile.js';
import { Container, Row, Col, Card, Button, Image, Jumbotron } from 'react-bootstrap';
import './profile.css';
import { dashBoardProfile } from '../components/dashBoardProfile.js';


export const Profile = () =>(
<div>
    <div>
        <NavBarProfile/>
    </div>
    <div className='bodyUser'>
        <Container>
            <Row>
                <Col>
                    <div className='CardUser'>
                        <Jumbotron>
                            <Card style={{ width: '18rem' }}>
                                <div className='foto'>
                                    <Image src='/userIcons/user.svg' roundedCircle thumbnail/>
                                </div>
                                <Card.Body>
                                    <Card.Title>Información</Card.Title>
                                    <Card.Text>
                                            Nombre: Usuario
                                            <br></br>
                                            Correo: Usuario@Prueba.ucv.cl
                                    </Card.Text>
                                    <Button variant="primary">Editar</Button>
                                </Card.Body>
                            </Card>
                        </Jumbotron>
                    </div>
                </Col>
                <Col>
                    <div>
                        <dashBoardProfile/>
                        
                        <Jumbotron>
                            
                        </Jumbotron>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
        
</div>
)