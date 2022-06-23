/** @format */

import React from "react";
import "../components/Header.css";
import { Link } from "react-router-dom";

import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap/";
import Catalogue from "../pages/Catalogue";

function Header() {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <Navbar.Brand href='#'>Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse
            id='navbarScroll'
            className='d-flex justify-content-between'>
            <Nav
              className='my-2 my-lg-0'
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <Link to='/catalogue'> Cataloge</Link>

              <NavDropdown title='Location' id='navbarScrollingDropdown'>
                <NavDropdown.Item href='#action3'>Netanya</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>Tel aviv</NavDropdown.Item>

                <NavDropdown.Item href='#action5'>Hadera</NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href='#' disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <Form className='d-flex col-xl-4'>
              <FormControl
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
            </Form>
            <div className='d-flex justify-content-md-center'>
              <Nav.Link className='' href='#action2'>
                Saved
              </Nav.Link>
              <Nav.Link href='#action1'>Cart</Nav.Link>
              <Button variant='outline-success'>Log in</Button>
            </div>
            {/* <FontAwesomeIcon icon='fa-solid fa-cart-shopping' /> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div>
        <img src='' />
      </div>
      <div>
        <input type='text' />
      </div>
      <div></div> */}
    </>
  );
}

export default Header;
