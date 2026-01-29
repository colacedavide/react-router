
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function AppNav() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Nav className="me-auto">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">Chi siamo</NavLink>
                    <NavLink to="/products">Prodotti</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

