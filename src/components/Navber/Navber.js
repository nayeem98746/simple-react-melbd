import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Stack } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


const Navber = () => {
    return (
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">MealDB</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       <Stack direction="horizontal" gap={3}>
       <NavLink
         to="/home"
         activeStyle={{
             fontWeight: "bold",
            color: "red"
             }}
                >
             Home
    </NavLink>
       <NavLink
         to="/meal"
         activeStyle={{
             fontWeight: "bold",
            color: "red"
             }}
              >
         Meal
    </NavLink>
        </Stack>
        
       
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Navber;