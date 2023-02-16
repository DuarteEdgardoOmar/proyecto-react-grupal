import React from "react";

import Carousel from "./components/carousel.jsx";

import "../src/css/estilos.css"

import CarouselInstagram from "./components/carouselInstagram.jsx";


function App() {
  return (
    <div className="container-fluid">

      <div className="row mb-5 bg-dark">
        <h1 className="text-warning">Hola Mundo!!!</h1>
      </div>
    
      <div className="row">
        <div className="container bg-dark">
          <Carousel/>    
        </div>
      </div>

      <div className="row">
        <div className="container mt-5 h-25 w-25">
          <CarouselInstagram/>    
        </div>
      </div>
      
    </div>
    
  );
}

export default App;
