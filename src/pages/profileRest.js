import React from 'react';
import {NavBarProfile} from '../components/navBarProfile.js';
import {Container, Jumbotron, Button, Row, Col, Image} from 'react-bootstrap';
import './profileRest.css';
import {Dashboard} from '../components/Dashboard';

export const ProfileRest = () =>(
    <div>
    <div>
        <NavBarProfile/>
    </div>
    <div>
        <Container>
            <div className='bodyRest'>
                <Row>
                    <Col>
                        <div className='leftUserInfo'>
                            <Jumbotron>
                                <div>
                                    <Row>
                                        <div className = 'foto'>
                                            <Image src="/icons/Mestizzo.png" roundedCircle thumbnail />
                                        </div>
                                    </Row>
                                    <Row>
                                        <div>
                                            <ul>    
                                                <li>Dir: CALLE BRASIL 2089, Valparaíso</li>
                                                <li>Fono: 85425333</li>
                                                <li>@: jesus.cafeteria@hotmail.com</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <Row>
                                        <Col><Button variant='danger'>Editar Perfil</Button></Col>    
                                    </Row>
                                </div>
                            </Jumbotron>
                        </div>
                    </Col>
                    <Col xs={8}>
                        <div className='DashboardInfo'>
                            <Jumbotron>
                                <div>
                                    <Dashboard/>
                                </div>
                            </Jumbotron>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
</div>
)