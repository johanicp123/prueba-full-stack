import React from "react";
import Logo from "../assets/img/12.jpg";

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
            <img className="logo" src={Logo} alt="logo" />
          </div>
          <div className="menu2">
            <ul>
              <li>
                <a href="/">HOMBRE</a>
              </li>
              <li>
                <a href="/">MUJER</a>
              </li>
              <li>
                <a href="/">BLOG</a>
              </li>
              <li>
                <a href="/">HISTORIA</a>
              </li>
              <li>
                <a href="/">TIENDAS</a>
              </li>
            </ul>
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
          <h6 className="envgra">
            ENVIOS GRATIS PARA PEDIDOS SUPERIORES A $300.000
          </h6>
          <h6>carrito</h6>
        </div>
      </div>
    </>
  );
};

export default Header;
