import React from "react";

import Carousel from "./components/carousel.jsx";

import "../src/css/estilos.css"


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
      
    </div>
    
  );
}

export default App;
