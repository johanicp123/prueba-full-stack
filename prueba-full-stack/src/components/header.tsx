import React from "react";
import Logo from "../assets/img/12.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <div className="promo">
        <h5>HOT SALE -30% EN SANDALIAS</h5>
      </div>
      <div className="menu1">
        <ul>
          <li>
            <a href="/">DIRECTORIO DE TIENDAS</a>
          </li>
          <li>
            <a href="/">SERVICIO AL CLIENTE</a>
          </li>
          <li>
            <a href="/">CUENTA</a>
          </li>
        </ul>
      </div>

      <div className="contenedor">
        <div className="contenedor1">
          <div>
            <a href="/">
              <img className="logo" src={Logo} alt="logo" />
            </a>
          </div>
          <div>
            <Navbar bg="white" expand="md" className=" mt-3 letranav">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/">MUJER</Nav.Link>
                    <Nav.Link href="/">HOMBRE</Nav.Link>
                    <Nav.Link href="/">BLOG</Nav.Link>
                    <Nav.Link href="/">HISTORIA</Nav.Link>
                    <Nav.Link href="/">TIENDAS</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>

        <div className="contenedor2">
          <div className="input-group mb-3 inputbus">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar"
            ></input>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="envgra">
            <h6>ENVIOS GRATIS PARA PEDIDOS SUPERIORES A $300.000</h6>
          </div>
          <div className="carritocom">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bag carritologo"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
