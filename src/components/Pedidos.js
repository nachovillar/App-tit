import React from 'react';
import { Table, Button } from 'react-bootstrap';


export const Pedidos = () =>(
    <div>
        <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Producto</th>
                <th>Comentario</th>
                <th>Hora</th>
                <th>Estado</th>
            </tr>
        </thead>
            <tr>
                <th>1</th>
                <th>UserTest1</th>
                <th>Delivery 🚚</th>
                <th>tabla 30 piezas</th>
                <th>N/A</th>
                <th>N/A</th>
                <th><Button variant='secondary'>Enviar</Button></th>
            </tr>
            <tr>
                <th>2</th>
                <th>UserTest1</th>
                <th>Retiro 🛍️</th>
                <th>tabla 30 piezas</th>
                <th>N/A</th>
                <th>15:45</th>
                <th><Button variant='secondary'>Retirar</Button></th>
            </tr>
        </Table>
    </div>
)