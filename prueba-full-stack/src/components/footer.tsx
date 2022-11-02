import React from "react";

const Footer = () => {
  return (
    <>
      <div className="inst">
        <h1>@HUSHPUPPIESCO</h1>
        <hr />
        <a href="/">face</a>
        <a href="/">insta</a>
      </div>
      <div className="container">
        <div className="row m-3">
          <div className="col-6 col-md-3 foo">
            <h5>SERVICIO AL CLIENTE</h5>
            <ul>
              <li>
                <a href="/">CONTÀCTENOS</a>
              </li>
              <li>
                <a href="/">POLITICAS DE LA TIENDA</a>
              </li>
              <li>
                <a href="/">CAMBIOS Y DEVOLUCIONES</a>
              </li>
              <li>
                <a href="/">POLITICAS DE DATOS</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3 foo">
            <h5>MI CUENTA</h5>
            <ul>
              <li>
                <a href="/">MIS PEDIDOS</a>
              </li>
              <li>
                <a href="/">MIS DEVOLUCIONES</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3 foo">
            <h5>RECURSOS</h5>
            <ul>
              <li>
                <a href="/">TIENDAS</a>
              </li>
              <li>
                <a href="/">DEVOLUCIONES</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3 foo">
            <h5>NEWSLETTER</h5>
            <h6>Registrate para ser el primer en recibir nuestras noticias</h6>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Footer;
