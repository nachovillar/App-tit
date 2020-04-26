import React from 'react';
import {Card, CardDeck} from 'react-bootstrap';


export const Resenas = () =>(
    <div>
        <CardDeck>
            <Card>
                <Card.Body>
                <Card.Title>UserTest</Card.Title>
                    <Card.Text>
                        sample text
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"><span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span></small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>UserTest2</Card.Title>
                    <Card.Text>
                        sample text
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"><span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span></small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>CrazyCatLady</Card.Title>
                    <Card.Text>
                        Rico y suavesito tal cual como me gusta
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"><span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span></small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>Carlos Gutierres</Card.Title>
                    <Card.Text>
                        GUGUL COMO ESCRIBIR UNA RESEÑA
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </small>
                </Card.Footer>
            </Card>
        </CardDeck>
    </div>
)