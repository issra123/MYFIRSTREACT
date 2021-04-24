import React, { Component } from 'react'
import {Button, Alert,Image, Breadcrumb,Card,Form,Container, Row, Col, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

 class Imgwatch extends Component {
    render() {
       
        return (
            <div style={{ margin: 10 ,marginTop:`3%`}}>
                <div
    className="col-12 p-5 text-left bg-image img-responsive img-fluid "
    style={{backgroundImage: `url("headerimg.jpg")`, height: 500,backgroundSize:'cover', backgroundPosition:'center'}}
  >
    
    <div className="mask" >
      <div className=" justify-content-center align-items-left ">
        <div className="text-black">
     <h1>
     PRECISION TIMEPIECES FOR <br></br>
                           THE DISCERNING COLLECTOR 
     </h1>
     <Button variant="outline-dark"> COLLECTION </Button>

         
        </div>
      </div>
    </div>
  </div>
            </div>
          
        )
    }
}
export default Imgwatch
