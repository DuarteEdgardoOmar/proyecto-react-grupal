import React from "react";
import Paisaje1 from "../image/paisaje1.jpg"
import Paisaje2 from "../image/paisaje2.jpg"
import Paisaje3 from "../image/paisaje3.jpg"
import Paisaje4 from "../image/paisaje4.jpg"
import Paisaje5 from "../image/paisaje5.jpg"

const Carousel = ()=>{
    return(
        <div className="container">
            <div className="carousel slide" id="demo" data-bs-ride="carousel">

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src={Paisaje1} alt="add" className="d-block w-100"></img>
                    </div>

                    <div className="carousel-item">
                        <img src={Paisaje2} alt="circle" className="d-block w-100"></img>
                    </div>

                    <div className="carousel-item">
                        <img src={Paisaje3} alt="exercise" className="d-block w-100"></img>
                    </div>

                    <div className="carousel-item">
                        <img src={Paisaje4} alt="exercise" className="d-block w-100"></img>
                    </div>

                    <div className="carousel-item">
                        <img src={Paisaje5} alt="exercise" className="d-block w-100"></img>
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