import React from "react";
import logo1 from "../assets/logos/logo1.svg";
import telephone from "../assets/logos/telephone-fill.svg";
import "./navbar.css";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const navbarHm = () => {
  return (
    <div>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to={"/"}>
            <img
              src={logo1}
              alt="Clicksgadgethub logo"
              width="60"
              height="60"
            />
            Clicksgadget<span>HUB</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"} className="navlink">
                Home
              </Nav.Link>

              <NavDropdown
                className="navlink"
                title="Products"
                id="basic-nav-dropdown"
              >
                {/* as={HashLink} to={"/products#games"} */}
                <NavDropdown.Item
                  as={Link}
                  to={{
                    pathname: "/products",
                    hash: "#Iphones",
                    state: { fromDashboard: true },
                  }}
                  href=""
                >
                  Iphones
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to={{
                    pathname: "/products",
                    hash: "#Samsungs",
                    state: { fromDashboard: true },
                  }}
                  href=""
                >
                  Samsungs
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to={{
                    pathname: "/products",
                    hash: "#Laptops",
                    state: { fromDashboard: true },
                  }}
                  href=""
                >
                  Laptops
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to={{
                    pathname: "/products",
                    hash: "#games",
                    state: { fromDashboard: true },
                  }}
                  href=""
                >
                  Games
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to={{
                    pathname: "/products",
                    hash: "#Accessories",
                    state: { fromDashboard: true },
                  }}
                  href=""
                >
                  Accessories
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to={"/products"} href="#action/3.1">
                  All
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={"/about"} className="navlink">
                About
              </Nav.Link>
              <Nav.Link as={Link} to={"/contact"} className="navlink">
                Contact
              </Nav.Link>
            </Nav>

            <Link to="/contact">
              <a
                className="btn btn-custom rounded-pill btn-rounded float-end"
                role="button"
              >
                07034722635
                <span>
                  <img src={telephone} alt="telephone icon" />
                </span>
              </a>
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        {/* <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes> */}
      </div>
    </div>
  );
};

export default navbarHm;
