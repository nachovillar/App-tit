import React from 'react';
import {Container, Form, FormControl, Button, Card, CardGroup,Row,Col} from 'react-bootstrap';
import './pulpo.css';
import {NavBarProfile} from '../components/navBarProfile';
import {Link} from 'react-router-dom';
import {Ads} from '../components/Ads';

export const Pulpo = () =>(
<div>
    <div>
        <NavBarProfile/>
    </div>

    <div class="search">
        <Form inline>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" fluid/>
            <Button type="submit" variant="danger"><Link to="/Search+Result/Sushi">Search</Link></Button>
        </Form>
    </div>

    <div>
        <div class = 'cuerpoPulpo'>
            <Container fluid>
                <Row>
                    <Col>
                        <Ads/>
                    </Col>
                    <Col xs={8}>
                    <h5>Resultados "pulpo"</h5>
                        <Row>
                            <Col >
                                <div className='item'>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="/icons/pulpo1.jpg" />
                                        <Card.Body>
                                            <Card.Title>Restaurant Travesía - Pulpo al vapor</Card.Title>
                                            <Card.Text>
                                                 $ 8.990
                                            </Card.Text>
                                            <Button variant="danger">+Info</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col> 
                            <Col>
                                <div className='item'>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="/icons/pulpo4.png" />
                                        <Card.Body>
                                            <Card.Title>Wine and Cava - Pulpo a las brazas</Card.Title>
                                            <Card.Text>
                                                $ 10.000
                                            </Card.Text>
                                            <Button variant="danger">+Info</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col>
                                <div className='item'>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="/icons/pulpo5.jpg" />
                                        <Card.Body>
                                            <Card.Title>Sazon Peruana -  ceviche de pulpo</Card.Title>
                                            <Card.Text>
                                                $6.990
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
</div>
)
