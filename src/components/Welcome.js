import React from 'react'
import { Button, Alert, Breadcrumb, Card, Form, Container, Row, Col, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'react-bootstrap/Image'

function Welcome() {
  return (
    <div style={{ margin: 10 }}>
      <div className="container-fluid padding">
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-7" style={{marginTop:`2%`}}>WELCOME TO VAN RIJK
                       </h1>
            <h1 className="display-5" style={{ color: "green", marginTop:`-2%` ,marginBottom:`2%` }}>
              ___
                       </h1>
          </div>
          <div className="col-12">
            <p className="lead" style={{marginBottom:`2%`}}>"Neque porro quisquam est
            qui dolorem ipsum quia dolor sit amet,
                        consectetur,<br></br>
                         adipisci velit..
                         "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                          consectetur, adipisci velit..
                       </p>
          </div>
        </div>


       
       
      </div>
    </div>
  )
}
export default Welcome




