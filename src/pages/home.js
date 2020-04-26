import React from 'react';
import {Container, Image, Form, Button} from 'react-bootstrap';
import './home.css';
import {NavBarHome} from '../components/navBarHome';
import {Link} from 'react-router-dom';
// import {Redirect} from 'react-router-dom';



export const Home = () =>(
    <div>
        <div>
            <NavBarHome/>
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



