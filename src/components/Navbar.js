import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button, ButtonGroup} from 'react-bootstrap';
import './Navbar.scss';

const Navigation = () => (
    <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#">MAGBANK</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="mr-auto">
                    <Nav.Link href="#cartao">Cartão</Nav.Link>
                    <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
                    <Nav.Link href="#faq">FAQ</Nav.Link>
                </Nav>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="outline-secondary">
                        <NavDropdown title="Acessar minha conta" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                            Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                            Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Button>
                    <Button variant="outline-secondary">abra sua conta</Button>
                </ButtonGroup>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Navigation;