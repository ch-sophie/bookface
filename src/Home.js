import React from 'react'
import {Container,Form,Button,Navbar} from 'react-bootstrap/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrain } from "@fortawesome/free-solid-svg-icons";


const Home = () => {
  return (  
    <Container fluid>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Book Face</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Form className="me-auto d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        </Navbar>
        {/* <FontAwesomeIcon icon= {faTrain} /> */}

      </Container>

  )
}

export default Home
