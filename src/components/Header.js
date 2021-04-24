import React, { Component } from 'react'
import {Button, Alert, Breadcrumb,Card,Form,Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
 class Header extends Component {
    render() {
        return (
    
    <Form style={{margin:10}}>
        <Container fluid>
<Row>
<Col>
<Form.Control type="search" placeholder="Search" style={{marginTop:20,width:`50%`}}></Form.Control>
</Col>
<Col >
<Form.Group>
<Form.Label style={{color:"green", fontSize:30}}>
VAN RIJK
</Form.Label>
<Form.Text style={{color:"green", fontSize:10 , marginTop:-20}}>
_______________________
</Form.Text>
<Form.Text style={{color:"green", fontSize:10 , marginTop:-5}}>
Lorem ipsum dolor
</Form.Text>
</Form.Group>
</Col>
<Col >
<Form.Label style={{ paddingTop:20,marginLeft:`50%` }}>
Call Us Now (90)89899
</Form.Label>
</Col>
</Row>
</Container>
</Form>   

      
        )
    }}

export default Header;
