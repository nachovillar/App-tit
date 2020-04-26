import React from 'react';
import {NavBarHome} from '../components/navBarHome';
import {Jumbotron, Container} from 'react-bootstrap';
import './aboutUs.css';


export const AboutUs = ()=>(
    <div>
        <div>
            <NavBarHome/>
        </div>
        <div>
            <Container >
                <div class = "cuerpo">
                    <Jumbotron fluid>
                            <h1>Appétit</h1>
                            <p>
                                Página creada por estudiantes abandonados por el profesor, con el propósito de entrgar un proyecto decente que consiste en otorgar información acerca de lo que desea comer.
                            </p>

                    </Jumbotron>
                </div>
            </Container>
        </div>
    </div>
)