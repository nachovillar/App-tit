import React from 'react';
import {NavBarProfile} from '../components/navBarProfile.js';
import {Container ,Col, Image, Jumbotron, Card, Button} from 'react-bootstrap';
import './profileDel.css';


export const ProfileDel = () =>(
    <div>
    <div>
        <NavBarProfile/>
    </div>
    <div>
        <Container >
            <div class = 'cuerpo'>
                <Jumbotron fluid>
                    <Container>
                        <h1>Mi Perfil</h1>
                        <table>
                            <tr>
                                <td>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="/icons/del.png" />
                                        <Card.Body>
                                            <Card.Title>Información</Card.Title>
                                            <Card.Text>
                                                 Nombre: 
                                                <br></br>
                                                Correo:
                                            </Card.Text>
                                            <Button variant="primary">Editar</Button>
                                        </Card.Body>
                                    </Card>
                                </td>
                            </tr>

                        </table>
                    </Container>
                </Jumbotron>
            </div>
        </Container>
    </div>
</div>
)