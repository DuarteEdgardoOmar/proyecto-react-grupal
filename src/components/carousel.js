import React, { useEffect, useState } from "react";
// import Paisaje1 from "../image/paisaje1.jpg"
// import Paisaje2 from "../image/paisaje2.jpg"
// import Paisaje3 from "../image/paisaje3.jpg"
// import Paisaje4 from "../image/paisaje4.jpg"
// import Paisaje5 from "../image/paisaje5.jpg"
import axios from "axios"

const Carousel = ()=>{

    const [arreglo, setArreglo] = useState([])

    useEffect(()=>{

        const cargarPaisajes = async ()=>{

            try {
                const res = await (await axios.get("http://localhost:5555/paisajes"))
        
                if(res.status===200){
                    console.log(res.data)
        
                    setArreglo(res.data)
                }
                
            } catch (error) {
                console.log(error)
            }

        }

        cargarPaisajes();
    },[])

    return(

        <div className="container">
            <div className="carousel slide" id="demo" data-bs-ride="carousel">

                <div className="carousel-inner">
                
                    {arreglo.map((el, index)=>                        
                             
                        {if(index===0){
                            return(
                            <div className="carousel-item active" key={el.id+1}>
                            <img src={`../image/${el.imagen}`} alt={el.title} className="d-block w-100"></img>
                        </div>
                            )
                        }else{
                            return(
                            <div className="carousel-item " key={el.id+1}>
                            <img src={`../image/${el.imagen}`} alt={el.title} className="d-block w-100"></img>
                        </div>
                            )
                        }}


                      
                   
                    )}

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