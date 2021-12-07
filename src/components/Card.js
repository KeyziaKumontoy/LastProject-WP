import React from 'react';
import './style.css'
import sofa1 from '../gambar/sofa1.jpg'
import sofa2 from '../gambar/sofa2.jpg'
import sofa3 from '../gambar/sofa3.jpg'
import { Card, Row, Col, Container } from 'react-bootstrap';
import { BsListUl, BsHeart, BsCart3 } from "react-icons/bs";



function card() {
    return (
        <div>
            <div className="container">
                <div className="kartu">
                    <Container>
                        <Row>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                <Card.Subtitle className="mb-2 text-muted">New <BsListUl/> <BsHeart/></Card.Subtitle>
                                    <Card.Img src={sofa1} />
                                    <Card.Body>
                                        <Card.Title>Wooden Chair</Card.Title>
                        <tbody>
                        <tr>
                            <td>⭐ ⭐ ⭐ ⭐ ☆</td> 
                           <div className="badge"><span> Rp. 12.000 </span> </div>
                            <BsCart3/>
                        </tr>
                    </tbody>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col>
                                <Card style={{ width: '18rem' }}>
                                <Card.Subtitle className="mb-2 text-muted">New <BsListUl /> <BsHeart /> </Card.Subtitle>
                                    <Card.Img variant="top" src={sofa2} />
                                    <Card.Body>
                                        <Card.Title>Wooden Chair</Card.Title>
                        <tbody>
                        <tr>
                            <td>⭐ ⭐ ⭐ ⭐ ☆</td>
                            <div className="badge"><span> Rp. 12.000 </span> </div>
                            <BsCart3/>
                        </tr>
                    </tbody>
                                       </Card.Body>
                                </Card>
                            </Col>

                            <Col>
                                <Card style={{ width: '18rem' }}>
                                <Card.Subtitle className="mb-2 text-muted">New <BsListUl /> <BsHeart /> </Card.Subtitle> 
                                    <Card.Img variant="top" src={sofa3} />
                                    <Card.Body>
                                        <Card.Title>Wooden Chair</Card.Title>
                    <tbody>
                        <tr>
                            <td>⭐ ⭐ ⭐ ⭐ ☆</td>
                            <div className="badge"><span> Rp. 12.000 </span> </div>
                            <BsCart3/>
                        </tr>
                    </tbody>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default card;