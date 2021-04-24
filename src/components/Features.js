import React from 'react';
import {Button, Alert, Breadcrumb, Card, Form, Container, Image, Row, Col, Navbar, CardDeck} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Features = () => {
    return (
        <div style={{margin:10}}>
            <Container fluid>
                <div>
                <h1 style={{marginTop:`4%`}}>WEEKLY FEATURED PRODUCTS</h1>
                <h1 style={{color:'green',marginBottom:`2%`,marginTop:`-2%`}}>____</h1>
                </div>
                <Row> 
                    <Col>
                    <Card style={{width:`100%`,height:`100%`}}>
                    <Card.Img src="jwlry1.jpg" />
                    <Card.Body>
                        <Card.Title>
                            Links Of London Rolled Yellow <br></br>
                            Gold 5-Charm Bracelet
                        </Card.Title>
                        <Button variant="outline-dark"> ADD TO WISHLIST </Button>
                    </Card.Body>
 
                   </Card>
                    </Col>
                    <Col>
                    <Row> 
                       <Card style={{width:`50%`}} >
                        <Card.Img src="jwlry2.jpg" />
                    <Card.Body>
                        <Card.Title >
                            Links Of London Rolled Yellow <br></br>
                            Gold 5-Charm Bracelet
                            </Card.Title>
                        <Card.Text style={{color:"green"}}><small>5656.6767 CAD</small></Card.Text>
                    </Card.Body>
                        </Card>
                        <Card style={{width:`50%`}} >
                        <Card.Img src="jwlry3.jpg" />
                    <Card.Body>
                        <Card.Title >
                            Links Of London Rolled Yellow <br></br>
                            Gold 5-Charm Bracelet
                           </Card.Title>
                        <Card.Text style={{color:"green"}}><small>5656.6767 CAD</small></Card.Text>
                    </Card.Body>
                    </Card>
                   </Row>
                    <Row>
                        <Card style={{width:`50%`}}>
                        <Card.Img src="jwlry4.jpg" />
                    <Card.Body>
                        <Card.Title >
                            Links Of London Rolled Yellow <br></br>
                            Gold 5-Charm Bracelet
                            </Card.Title>
                        <Card.Text style={{color:"green"}}><small>5656.6767 CAD</small></Card.Text>
                    </Card.Body>
                        </Card>
                        <Card style={{width:`50%`}}>
                        <Card.Img src="jwlry5.jpg"/>
                    <Card.Body>
                        <Card.Title >
                            Links Of London Rolled Yellow <br></br>
                            Gold 5-Charm Bracelet
                            </Card.Title>
                        <Card.Text style={{color:"green"}}><small>5656.6767 CAD</small></Card.Text>
                    </Card.Body>
                        </Card>
                    </Row>
                    </Col>
                    
                </Row>

             

            </Container>
            
        </div>
    )
}
export default Features
