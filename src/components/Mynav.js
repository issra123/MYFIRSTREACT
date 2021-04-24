import React from 'react'
import {Button, Alert, Breadcrumb,Card,Form,NavDropdown,Navbar,Nav,FormControl,Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
 function Mynav() {
    return (
    <div style={{margin:10}}>
       <Container fluid>
      <Navbar  expand="lg">

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Button variant="outline-dack">((()))</Button>
    <Nav className="mr-auto" style={{marginLeft:`35%`}}>
  <Nav.Link active> LUXURY WATCHES </Nav.Link>
  <Nav.Link active> JEWELLERY </Nav.Link>
  <Nav.Link active> ENGAGMENT </Nav.Link>
  <Nav.Link active> BUY/SELL </Nav.Link>
            
    </Nav>
    <Form inline>
    
      <Button variant="outline-dack">MY WATCHES</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</Container>

    </div>
    )
}
export default Mynav
