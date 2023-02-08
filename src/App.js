import React from "react";

import Carousel from "./components/carousel";

import "../src/css/estilos.css"


function App() {
  return (
    <div className="container">

      <div className="row my-2 bg-dark">
        <h1 className="text-warning">Hola Mundo!!!</h1>
      </div>
    
      <div className="row">
        <div className="container contenedor-carousel">
          <Carousel/>    
        </div>
      </div>
      
    </div>
    
  );
}

export default App;
