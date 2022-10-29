import React from "react";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";
import { Link } from "react-router-dom";

export const Heading = () => {
    return (
        <Navbar color="success" dark>
            <Container>
                <NavbarBrand href="/">Student Dashboard</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className="btn btn-primary" to="/add">
                            Add Student
                        </Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    );
};
