import "./Peliculitas.css"
import LINK from "./components/LINK";
import LoaderSpinner from "./LoaderSpinner";
import useFetch from "./useFetch";

const Peliculas = ( {Categoria1, Categoria2, URL, Nombre, INFO} ) => {



    return ( 

        <div className="peli"  >
        
                <div className="imagendelapeli" style={{backgroundImage:URL}}>
                
                  <div className="BotonPlay">
                  
                    <div className="Boton">Play</div>
                  </div>
                  </div>                
                <div className="nombredelapeli" >{Nombre}</div>

                <div className="descripcionycategorias" style={{ backgroundColor: "transparent"}}>
                    <p>
                    {INFO}
                    </p>
                  <div className="cajitadecategorias" style={{ backgroundColor: "transparent"}}>
                  
                    <div className="categorias"><LINK className="LINK" info={Categoria1} Info={`/Categorías/${Categoria1}`}/></div>
                    <div className="categorias categoria2 Categoria2"><LINK className="LINK" info={Categoria2} Info={`/Categorías/${Categoria2}`}/></div>
                  </div>
                  
                </div>
                </div>

     );
}
 
export default Peliculas;