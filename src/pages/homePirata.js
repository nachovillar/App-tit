import React from 'react';
import {Container, Image, Form, Button} from 'react-bootstrap';
import './homePirata.css';
import {NavBarProfile} from '../components/navBarProfile';
import {Link} from 'react-router-dom';
// import {Redirect} from 'react-router-dom';



export const HomePirata = () =>(
    <div>
        <div>
            <NavBarProfile/>
        </div>
        <Container>
            <div class="logo" >
                <Image src={'/icons/logo.png'} alt='' fluid width={500} height={100}/>
            </div>
            <div class='search'>
                <table class ="barraBusqueda">
                    <tr>
                        <td><Form><Form.Control placeholder = '¿Que quieres comer hoy?'/></Form></td>
                        <td><Button variant="danger"><Link to="/Search+Result/Pulpo">Search</Link></Button></td>

                    </tr>
                </table>
            </div>
        </Container>

    </div>
)
