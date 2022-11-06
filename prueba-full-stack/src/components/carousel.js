import React, { useEffect, useState , Component} from "react"
import Carousel from 'react-elastic-carousel';
import Zapato from './zapato.json';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function App() {
return(
    <Carousel breakPoints={breakPoints}>
    { Zapato && Zapato.map(zapato =>{
      return(
      <div key={zapato.id}>
        <div>
        <img src={`${process.env.PUBLIC_URL}/img/${zapato.foto}`} alt={zapato.nombre}  className="imgcom1"  />
        </div>
        
        <br />
        <strong>{zapato.nombre}</strong>
        <br />
        {zapato.precio}
        <hr />
      </div>
      )
    })}
  </Carousel>
)
  
}
 export default App;



