import React from "react";

import Carousel from "./components/carousel";



function App() {
  return (
    <div className="container m-5">

      <div className="row m-5 bg-dark">
        <h1 className="text-warning">Hola Mundo!!!</h1>
      </div>
    
      <div className="row m-5 bg-dark">
        <Carousel/>
      </div>
      
    </div>
    
  );
}

export default App;
