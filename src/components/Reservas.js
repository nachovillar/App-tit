import React from 'react';
import { Table, Button } from 'react-bootstrap';


export const Reservas = () =>(
    <div>
        <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Tamaño</th>
                <th>Comentario</th>
                <th>Hora</th>
                <th>Estado</th>
            </tr>
        </thead>
            <tr>
                <th>1</th>
                <th>UserTest1</th>
                <th>4</th>
                <th>N/A</th>
                <th>15:45</th>
                <th><Button variant='secondary'>Disponible</Button></th>
            </tr>
        </Table>
    </div>
)