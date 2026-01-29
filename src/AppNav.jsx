
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function AppNav() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">Chi siamo</Nav.Link>
                    <Nav.Link href="/products">Prodotti</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

