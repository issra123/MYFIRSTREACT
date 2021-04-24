import React from 'react'
import { CardColumns } from 'react-bootstrap'
import {Button, Alert,Image, Breadcrumb,Card,Form,Container, Row, Col, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Categories() {
    return (
        <div style={{margin:10}} >
            <Container fluid>
                <Row>
                    <Card style={{backgroundColor:"green"}}>
                    <Col style={{paddingTop:`50%`,color:"white"}}>
                    <Image src="diamond.jpg" className="img-circle" style={{width:`40%`}} /> 
                    <Card.Title><br></br> BROWSE OUR <br></br> CATEGORIES </Card.Title>
                    <Card.Text>___</Card.Text>
                    <Card.Text><small>BROWSE ALL CATEGORIES</small></Card.Text>
                    </Col>
                    </Card>
                    <Col>
          <>
            
              <Row>
                  <Col>
              <Card style={{width:`105%`}}>
              <Card.Img src="jwlry1.jpg"></Card.Img>
                  <Card.Body>
                     <Card.Title >JWELERY</Card.Title> 
                     <Card.Text className="text-muted">next</Card.Text>
                  </Card.Body>
              </Card>
              </Col>
              <Col>
              <Card style={{width:`105%`}}>
              <Card.Img src="jwlry2.jpg"></Card.Img>
                  <Card.Body>
                     <Card.Title>JWELERY</Card.Title> 
                     <Card.Text className="text-muted">next</Card.Text>
                  </Card.Body>
              </Card>
              </Col>
              <Col>
              <Card style={{width:`105%`}}>
              <Card.Img src="jwlry3.jpg"></Card.Img>
                  <Card.Body>
                     <Card.Title>JWELERY</Card.Title> 
                     <Card.Text className="text-muted">next</Card.Text>
                  </Card.Body>
              </Card>
              </Col>
              <Col>
              <Card style={{width:`105%`}}>
              <Card.Img src="jwlry4.jpg"></Card.Img>
                  <Card.Body>
                     <Card.Title>JWELERY</Card.Title> 
                     <Card.Text className="text-muted">next</Card.Text>
                  </Card.Body>
              </Card>
              </Col>
              </Row>
              </>
              <>
              <Row>
                  <Col>
              <Card style={{width:`105%`}}>
              <Card.Img src="jwlry5.jpg"></Card.Img>
                  <Card.Body>
                     <Card.Title >JWELERY</Card.Title> 
                     <Card.Text className="text-muted">next</Card.Text>
                  </Card.Body>
              </Card>
              </Col>
              <Col>
              <Card style={{width:`105%`}}>
              <Card.Img src="jwlry6.jpg"></Card.Img>
                  <Card.Body>
                     <Card.Title>JWELERY</Card.Title> 
                     <Card.Text className="text-muted">next</Card.Text>
                  </Card.Body>
              </Card>
              </Col>
              <Col>
              <Card style={{width:`105%`}}>
              <Card.Img src="jwlry7.jpg"></Card.Img>
                  <Card.Body>
                     <Card.Title>JWELERY</Card.Title> 
                     <Card.Text className="text-muted">next</Card.Text>
                  </Card.Body>
              </Card>
              </Col>
              <Col>
              <Card style={{width:`105%`}}>
              <Card.Img src="jwlry8.webp"></Card.Img>
                  <Card.Body>
                     <Card.Title>JWELERY</Card.Title> 
                     <Card.Text className="text-muted">next</Card.Text>
                  </Card.Body>
              </Card>
              </Col>
              </Row>

              </> 
              </Col>
              </Row>
              </Container> 
        </div>
    )
}
export default Categories
