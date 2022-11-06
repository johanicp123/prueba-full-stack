import React from "react";
import imagen1 from "../assets/img/1.jpg";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import Logo from "../assets/img/12.jpg";
import Datos from "./carousel";

import styled from "styled-components";

const Body = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 text-start">
            <h5>HUSHPUPPIESCO / CALZADO / ZAPATILLA HOMBRE PELIKAN</h5>
            <img
              src={imagen1}
              alt="foto zapato "
              className="img-fluid img-thumbnail"
            />

            <hr />
            <div>
              <img
                src={imagen1}
                alt="foto zapato "
                className="img-fluid img-thumbnail imgcom"
              />
              <img
                src={imagen1}
                alt="foto zapato "
                className="img-fluid img-thumbnail imgcom"
              />
              <img
                src={imagen1}
                alt="foto zapato "
                className="img-fluid img-thumbnail imgcom"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 text-start fw-normal">
            <h4 className="lebody">ZAPATILLA HOMBRE PELIKAN</h4>
            <h3 className="lemora">$</h3>
            <h4>cod. de producto</h4>
            <br />
            <h5>COLOR</h5>
            <img
                src={imagen1}
                alt="foto zapato "
                className="img-fluid img-thumbnail imgcom"
              />
              <br />
              <h5>TALLA</h5>
              <div>
              <button type="button" className="btn btn-light mabot">5.5</button>
              <button type="button" className="btn btn-light mabot">5.5</button>
              <button type="button" className="btn btn-light mabot">5.5</button>
              <button type="button" className="btn btn-light mabot">5.5</button>
              <button type="button" className="btn btn-light mabot">5.5</button>
              </div>
              <div>
              <button type="button" className="btn btn-light mabot">6.5</button>
              <button type="button" className="btn btn-light mabot">6.5</button>
              <button type="button" className="btn btn-light mabot">6.5</button>
              <button type="button" className="btn btn-light mabot">6.5</button>
              <button type="button" className="btn btn-light mabot">6.5</button>
              </div>
              <h5 className="mb-4"><u>Guia de tallas</u></h5>
              <button type="button" className="btn btnlook mb-2">
                Agrega al carrito
              </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-4">
            <h3 className="text-start lebody">DETALLES DE PRODUCTO</h3>
            <hr />
            <h4 className="justi fw-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              sunt doloribus eos voluptatibus sed a temporibus repudiandae
              accusantium, reprehenderit ipsam voluptatem in labore culpa quod
              sequi fuga quibusdam soluta? Distinctio est error deserunt sunt
              eius iure non porro numquam. Aut voluptatum quisquam voluptatibus
              labore illo ratione sed similique et autem!
            </h4>
          </div>
          <div className="col-12 mb-4">
            <h3 className="text-start lebody">TECNOLOGIAS</h3>
            <hr />
            <h4 className="mb-2 justi fw-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              natus numquam et sapiente laborum autem laboriosam corporis, ad
              asperiores eius aliquid, illum explicabo qui ab.
            </h4>
            <div>
              <h3 className="text-start mt-4 bglook lebody p-1">
                COMPLETA TU LOOK
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-3">
            <img
              src={imagen1}
              alt="foto zapato "
              className="img-fluid img-thumbnail"
            />

            <hr />
            <div>
              <img
                src={imagen1}
                alt="foto zapato "
                className="img-fluid img-thumbnail imgcom"
              />
              <img
                src={imagen1}
                alt="foto zapato "
                className="img-fluid img-thumbnail imgcom"
              />
              <img
                src={imagen1}
                alt="foto zapato "
                className="img-fluid img-thumbnail imgcom"
              />
              <h5 className="text-center fw-normal lemora">$ 00.00</h5>
              <button type="button" className="btn btnlook mb-2">
                Agrega al carrito
              </button>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <img
              src={imagen1}
              alt="foto zapato "
              className="img-fluid img-thumbnail"
            />

            <hr />
            <div>
              <img
                src={imagen1}
                alt="foto zapato "
                className="img-fluid img-thumbnail imgcom"
              />
              <img
                src={imagen1}
                alt="foto zapato "
                className="img-fluid img-thumbnail imgcom"
              />
              <img
                src={imagen1}
                alt="foto zapato "
                className="img-fluid img-thumbnail imgcom"
              />
              <h5 className="text-center fw-normal lemora">$ 00.00</h5>
              <button type="button" className="btn btnlook mb-2">
                Agrega al carrito
              </button>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <img
              src={imagen1}
              alt="foto zapato "
              className="img-fluid img-thumbnail"
            />

            <hr />
            <div>
              <img
                src={imagen1}
                alt="foto zapato "
                className="img-fluid img-thumbnail imgcom"
              />
              <img
                src={imagen1}
                alt="foto zapato "
                className="img-fluid img-thumbnail imgcom"
              />
              <img
                src={imagen1}
                alt="foto zapato "
                className="img-fluid img-thumbnail imgcom"
              />
              <h5 className="text-center fw-normal lemora">$ 00.00</h5>
              <button type="button" className="btn btnlook mb-2">
                Agrega al carrito
              </button>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <img
              src={imagen1}
              alt="foto zapato "
              className="img-fluid img-thumbnail"
            />

            <hr />
            <div>
              <img
                src={imagen1}
                alt="foto zapato "
                className="img-fluid img-thumbnail imgcom"
              />
              <img
                src={imagen1}
                alt="foto zapato "
                className="img-fluid img-thumbnail imgcom"
              />
              <img
                src={imagen1}
                alt="foto zapato "
                className="img-fluid img-thumbnail imgcom"
              />
              <h5 className="text-center fw-normal lemora">$ 00.00</h5>
              <button type="button" className="btn btnlook mb-2">
                Agrega al carrito
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="text-start mt-4 lebody p-1">
              PRODUCTOS RECOMENDADOS
            </h3>
            <hr />

            <Datos />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
