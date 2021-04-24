import React from 'react'
import {Button, Alert, Breadcrumb,Card,Form,Container, Row, Col,Image, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
function Welpic() {
    return (
        <div style={{margin:10}}>
      
      <Container fluid>
              
    <Row>
      <Col>
       <Row>
      <Image src="manwatch.webp" style={{height:300, width:`100%`}} />
     
     <Card.ImgOverlay style={{marginLeft:250,color:"white"}}>COLLECTORS <br>
                                 </br> CORNER</Card.ImgOverlay>
  
                                 </Row>
                                 <Row>
      <Image src="bracelet.jpg" style={{height:300, width:`100%`}} />
     
        <Card.ImgOverlay style={{marginTop:330,color:"white"}}>BROWSE <br>
                                </br> BRACELETS</Card.ImgOverlay>
                                </Row>

      </Col>
      
      <Col>
      <Image src="jwelry.jpg"  style={{height:600, width:`100%`}} />

       <Card.ImgOverlay style={{color:"white"}}> BROWSE BRANDED <br>
                                </br> JEWELLERY</Card.ImgOverlay>
      </Col>
     
    </Row>
   
    
    </Container>

        </div>
    )
}
export default Welpic
