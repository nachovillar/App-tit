import React from 'react';
import {Container, Form, FormControl, Button, Card, Row, Col} from 'react-bootstrap';
import './sushi.css';
import {NavBarProfile} from '../components/navBarProfile';
import {Link} from 'react-router-dom';
import {Ads} from '../components/Ads';

export const Sushi = () =>(
<div>
    <div>
        <NavBarProfile/>
    </div>

    <div class="search">
        <Form inline>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
            <Button type="submit" variant="danger"><Link to="/Sushi">Search</Link></Button>
        </Form>
    </div>

    <div class='cuerpoSushi'>
        <Container fluid>
            <Row>
                <Col>
                    <Ads/>
                </Col>
                <Col xs={8}>
                    <h5>Resultados "Sushi"</h5>
                    <Row>
                        <Col>
                            <div className='Result'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="/icons/mestizo.jpg" />
                                    <Card.Body>
                                    <Card.Title>Mestizo Sushi - Tabla sushi (30 piezas)</Card.Title>
                                        <Card.Text>
                                            $9.000 
                                        </Card.Text>
                                        <Button variant="danger"><Link to="/Search+Result/Res/Mestizzo/Tabla+sushi">+Info</Link></Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col>
                            <div className='Result'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="/icons/master.jpg" />
                                    <Card.Body>
                                    <Card.Title>Master Sushi - Tabla sushi 20</Card.Title>
                                        <Card.Text>
                                            $ 5.000
                                        </Card.Text>
                                        <Button variant="danger">+Info</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col>
                            <div className="Result">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="/icons/seiko.jpg" />
                                    <Card.Body>
                                    <Card.Title>Seiko Sushi - Todo lo que pueda comer por 1 hora</Card.Title>
                                        <Card.Text>
                                            $7.000
                                        </Card.Text>
                                        <Button variant="danger">+Info</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
            

</div>
)