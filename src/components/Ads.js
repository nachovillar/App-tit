import React from 'react';
import {Carousel} from 'react-bootstrap';

import './Ads.css'

export const Ads=()=>(
    <div>
        <div class="publicidad">
            <Carousel controls={false} indicators={false}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/icons/mc.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/icons/pepsi.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
            
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/icons/king.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </div>

)