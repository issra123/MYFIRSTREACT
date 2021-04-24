import React from 'react'
import { Button, Alert, Breadcrumb, Card, Form, Container, Row, Col, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Aftercategsec() {
   return (
      <div style={{ margin: 10 }}>

         <Container fluid>
            <Row style={{ marginTop: `2%` }}>
               <Col>

                  <img style={{ width: `100%` }} src="jwlry5.jpg" class="img-rounded" />
                  <div class="card-img-overlay">
                     <Card.Text>DECLARE YOUR LOVE</Card.Text>

                     <Button variant="outline-dark">COLLECTION</Button>
                  </div>

               </Col>
               <Col>

                  <img style={{ width: `100%` }} src="jwlry4.jpg" class="img-rounded" />
                  <div class="card-img-overlay">
                     <Card.Text>BEAUTY AT ITS FINEST</Card.Text>

                     <Button variant="outline-dark">COLLECTION</Button>
                  </div>
               </Col>

            </Row>
         </Container>
      </div>
   )
}
export default Aftercategsec
