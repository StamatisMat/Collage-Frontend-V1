import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar  from "react-bootstrap/Navbar"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color":'lightblue'}}>
                <FontAwesomeIcon icon = {faCamera}/> Stamatis' Internet Corner
            </Navbar.Brand>
            <Navbar.Toggle aria-controls = "navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
                <Nav 
                    className = "me-auto my-2 my-lg-0" 
                    style={{maxHeight: '100px'}}
                    navbarScroll
                >
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/Collage">Collage</NavLink>
                    <NavLink className="nav-link" to="/Projects">Projects</NavLink>
                    <NavLink className="nav-link" to="/AboutMe">About Me</NavLink>
                    <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>

    </Navbar>
  )
}

export default Header