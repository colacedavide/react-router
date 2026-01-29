
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/">Home</Nav.Link>
                    <Nav.Link to="/about">Features</Nav.Link>
                    <Nav.Link to="/products">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

