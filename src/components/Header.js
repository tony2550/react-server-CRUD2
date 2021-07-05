import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Link to="/" className="navbar-brand">
          Postapp
        </Link>
        <Nav className="mr-auto">
          <Link to="/list" className="nav-link">
            List
          </Link>
          <Link to="/write" className="nav-link">
            Write
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      <br />
    </>
  );
};

export default Header;
