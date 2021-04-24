import React from 'react'
import {Button,Image, Alert, Breadcrumb,Card,Form,Container, Row, Col, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
 function Blog() {
    return (
        <div style={{margin:10}}>
           <Container fluid >
               <h1 style={{marginTop:`3%`}}> LATEST BLOG POSTS</h1>
               <h1 style={{color:"green",marginTop:`-2%`,marginBottom:`2%`}}>____</h1>
              <Row>
                  <Col>
                  <Image style={{width:`100%`}} src="jwlry3.jpg"></Image>
                  </Col>
                  <Col className="col-3">
                  <Image style={{width:`100%`}} src="jwlry2.jpg"></Image>
                  </Col>
                  <Col>
                  <Image style={{width:`100%`}} src="jwlry5.jpg"></Image>
                  </Col>
                  <Col>
                  <Image style={{width:`100%`}} src="jwlry3.jpg"></Image>
                  </Col>
              </Row>
               </Container> 
        </div>
    )
}
export default Blog
