import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/estilos.css";
import { motion } from "framer-motion";

const Carousel = () => {
  const [arreglo, setArreglo] = useState([]);

  useEffect(() => {
    const cargarPaisajes = async () => {
      try {
        const res = await axios.get("http://localhost:5555/paisajes");

        if (res.status === 200) {
          console.log(res.data);

          setArreglo(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    cargarPaisajes();
  }, []);

  return (
    <motion.div className="container-container border ">

      <motion.div className="container-fluid d-flex p-2" drag="x" dragConstraints={{right:1200, left:-1200}}>

        {arreglo.map((elemento) => (

            <motion.div className="item border border-warning border-1 mx-3">

                <img className="img-fluid w-100 h-100" src={`../image/${elemento.imagen}`} alt={elemento.title}/>

            </motion.div>
        ))}

      </motion.div>

    </motion.div>
  );
};

export default Carousel;
