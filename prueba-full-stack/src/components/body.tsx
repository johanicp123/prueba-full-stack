import React from "react";
import imagen1 from '../assets/img/1.jpg';
import Item from "./Item";
import Carousel from 'react-elastic-carousel';
import Logo from "../assets/img/12.jpg";
import Datos from './carousel';



const Body = () => {
  return (
    <>
      <div className="caontainer">
        <div className="row">
          <div className="col-12 col-md-6">
            <h3>HUSHPUPPIESCO / CALZADO / ZAPATILLA HOMBRE PELIKAN</h3>
          </div>
          <div className="col-12 col-md-6">
            <h2>ZAPATILLA HOMBRE PELIKAN</h2>
            <h2>$</h2>
            <h4>cod</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2>DETALLES DE PRODUCTO</h2>
            <hr />
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              sunt doloribus eos voluptatibus sed a temporibus repudiandae
              accusantium, reprehenderit ipsam voluptatem in labore culpa quod
              sequi fuga quibusdam soluta? Distinctio est error deserunt sunt
              eius iure non porro numquam. Aut voluptatum quisquam voluptatibus
              labore illo ratione sed similique et autem!
            </h4>
          </div>
          <div className="col-12">
            <h2>TECNOLOGIAS</h2>
            <hr />
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              natus numquam et sapiente laborum autem laboriosam corporis, ad
              asperiores eius aliquid, illum explicabo qui ab.
            </h4>
            <div>
              <h2>COMPLETA TU LOOK</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-3">
            <h1>fdfdf</h1>
          </div>
          <div className="col-6 col-md-3">
            <h2>fdf</h2>
          </div>
          <div className="col-6 col-md-3">
            <h1>fdfdf</h1>
          </div>
          <div className="col-6 col-md-3">
            <h2>fdf</h2> 
          </div>
        </div>
        <div className="row">
          <div className="col-12">
        

        <Datos />

          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
