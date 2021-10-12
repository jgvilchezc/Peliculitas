import TarjetasDeCategorias from "./TarjetasDeCategorias"
import useFetch from "../useFetch";

const PathCagetorias = () => {

    const { data, isPending } = useFetch()

    return (
        <>  
        <h2>Categorias</h2>
         <div className="Contenedor">
       
            <div className="a">
            <TarjetasDeCategorias className="margin marginInicial" Style={data && data.urlsCategory[0].urlAccion} Categoria="Acción" isPending= {isPending}/>
            </div>
            <div className="a">
            <TarjetasDeCategorias className="margin" Style={data && data.urlsCategory[0].urlCienciaFiccion} Categoria="Ciencia Ficción" isPending= {isPending}/>
            </div>
            <div className="a">
            <TarjetasDeCategorias className="margin" Style={data && data.urlsCategory[0].urlNovela} Categoria="Novela" isPending= {isPending}/>
            </div>
            <div className="a">
            <TarjetasDeCategorias className="margin" Style={data && data.urlsCategory[0].urlInfantil} Categoria="Infantil" isPending= {isPending}/>
            </div>
            <div className="a">
            <TarjetasDeCategorias className="margin" Style={data && data.urlsCategory[0].urlMusical} Categoria="Musical" isPending= {isPending}/>
            </div>
            <div className="a">
            <TarjetasDeCategorias className="margin" Style={data && data.urlsCategory[0].urlAventura} Categoria="Aventura" isPending= {isPending}/>
            </div>

            
        </div>
        </>
    );
}
 
export default PathCagetorias;