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
        <strong>{zapato.nombre}</strong>
        {zapato.precio}
      </div>
      )
    })}
  </Carousel>
)
  
}
 export default App;



