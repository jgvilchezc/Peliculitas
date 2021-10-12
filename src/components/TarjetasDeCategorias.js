import LINK from "./LINK"
import LoaderSpinner from "../LoaderSpinner";


const TarjetasDeCategorias = ({className, Categoria, Style, isPending}) => {

    
    return ( 
        
        <div className={className} >
        <div className="Tarjetas" style={{backgroundImage:Style}}> {isPending && <LoaderSpinner/>} </div>
        <span className="hover"><LINK info={Categoria} Info={`/Categorías/${Categoria}`}></LINK></span>
        </div>
    );
}
 
export default TarjetasDeCategorias;