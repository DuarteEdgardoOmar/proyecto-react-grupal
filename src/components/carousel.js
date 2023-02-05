import React from "react";
import Add from "../image/add.png"
import Circles from "../image/circles.png"
import Exercises from "../image/exercise.png"
const Carousel = ()=>{
    return(
        <div className="container">
            <div className="carousel slide" id="demo" data-bs-ride="carousel">

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src={Add} alt="add" className="d-block w-100"></img>
                    </div>

                    <div className="carousel-item">
                        <img src={Circles} alt="circle" className="d-block w-100"></img>
                    </div>

                    <div className="carousel-item">
                        <img src={Exercises} alt="exercise" className="d-block w-100"></img>
                    </div>

                </div>

                {/* botones left and right */}
                <button type="button" className="carousel-control-prev" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>

                <button type="button" className="carousel-control-next" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
                        
            </div>
        </div>

    )
}

export default Carousel;