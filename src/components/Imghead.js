import React from 'react'
import { Button, Alert, Breadcrumb, Card, Form, Container, Row, Col, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
function Imghead() {
  return (
    <div style={{ margin: 10 }} >
      <Container fluid style={{marginTop:`-1%`}}>

<div
    className="col-12 p-5 text-left bg-image img-responsive img-fluid "
    style={{backgroundImage: `url("headerimg.jpg")`,height: 400, backgroundSize:'cover', backgroundPosition:'center'}}
  >
    
    <div className="mask" >
      <div className=" justify-content-center align-items-left ">
        <div className="text-white">
           <h5 >New Coming </h5>
          <h5 style={{color:"green"}}>_________</h5>
          <h1 >CRAFTSMANSHIP  <br></br>
           AT ITS FINEST </h1>
          <a
            className="btn btn-outline-light btn-lg m-2"
            href="#"
            target="_blank"
            role="button"
            style={{backgroundColor:"green"}}
            >SHOP ALL COLLECTION</a>
        </div>
      </div>
    </div>
  </div>
  </Container>
    </div>

  )
}
export default Imghead
