import { useState } from "react";
import { act } from "react-dom/test-utils";
import Loading from "./components/Loading";
import Dots from "./components/dots/Dots";
import VerPelicula from "./components/VerPelicula";
import "./Peliculitas.css"
import useFetch from "./useFetch";



const Cuadro = () => {

  const { data, isPending } = useFetch()
  const [activePoint, setActivePoint] = useState(0);

    return ( 
      <>
           < div className="cuadrote" style={{backgroundImage:`${ (data && data.peliculas[activePoint].foto) }`}}>
          
          {isPending && <Loading/>}
          
          {!isPending && <>
            <div className="contenedordeinformacion" style={{ backgroundColor: "transparent"}}>
              
              {  <div id="nombre" className="nombre" >{data.peliculas[activePoint].nombre}</div>}
              { data && <div id="descripcion" className="descripcion" >{data.peliculas[activePoint].descripcion} </div>}
            </div>
           

            <div className="contenedordecategorias" style={{ backgroundColor: "transparent"}}>
              { data && <div id="categoria1" className="temporada">{data.peliculas[activePoint].categoria1}</div>}
              { data && <div id="categoria2" className="temporada">{data.peliculas[activePoint].categoria2}</div>}
            </div>
            {!isPending && <VerPelicula/>}
            <div className="contenedordepuntitos">
              {data.peliculas.map((_, index) => {
                return <Dots onClick={() => {setActivePoint(index)}} active={index===activePoint}/>
              })
              }
            </div>
          </>}
          
        </div>
        </>
     );

}
 
export default Cuadro;